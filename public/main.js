import { auth, db } from "./utils/firebaseConfig.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { showHomePage } from "./pages/home.js";
import { showRegisterPage } from "./auth/register.js";
import { showLoginPage } from "./auth/login.js";
import { showDashboard } from "./pages/dashboard.js";

// Vérification de l'état de connexion de l'utilisateur
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("Utilisateur connecté :", user.email);

        try {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            const userData = userDoc.data();

            if (user.email === "admin@coutureapp.com") {
                console.log("Redirection vers admin-dashboard.html");
                window.location.href = "admin-dashboard.html";
                return;
            }

            if (userData) {
                console.log("Rôle de l'utilisateur :", userData.role);

                if (userData.role === "client") {
                    window.location.href = "client-dashboard.html";
                } else if (userData.role === "tailleur") {
                    window.location.href = "tailleur-dashboard.html";
                } else {
                    alert("Rôle inconnu !");
                    window.location.href = "index.html";
                }
            } else {
                alert("Aucun rôle défini pour cet utilisateur.");
                window.location.href = "index.html";
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du rôle :", error);
            window.location.href = "index.html";
        }
    } else {
        showHomePage();
    }
});

// Éviter les erreurs si un élément HTML n'existe pas encore
document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("homeBtn");
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (homeBtn) homeBtn.addEventListener("click", showHomePage);
    if (registerBtn) registerBtn.addEventListener("click", showRegisterPage);
    if (loginBtn) loginBtn.addEventListener("click", showLoginPage);

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            signOut(auth).then(() => {
                window.location.href = "index.html";
            }).catch((error) => {
                console.error("Erreur de déconnexion :", error);
            });
        });
    }
});