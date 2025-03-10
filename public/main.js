import { showHomePage } from "./pages/home.js";
import { showRegisterPage } from "./auth/register.js";
import { showLoginPage } from "./auth/login.js";
import { showDashboard } from "./pages/dashboard.js";
import { logoutUser } from "./auth/logout.js";
import { auth, db } from "./utils/firebaseConfig.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

console.log("Chargement de main.js...");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("Utilisateur connecté :", user.email);
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log("Rôle de l'utilisateur :", userData.role);

            if (userData.role === "client") {
                window.location.href = "client-dashboard.html";
            } else if (userData.role === "tailleur") {
                window.location.href = "tailleur-dashboard.html";
            } else {
                alert("Rôle inconnu !");
            }
        } else {
            console.log("Aucune donnée utilisateur trouvée !");
        }
    } else {
        showHomePage();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homeBtn").addEventListener("click", showHomePage);
    document.getElementById("registerBtn").addEventListener("click", showRegisterPage);
    document.getElementById("loginBtn").addEventListener("click", showLoginPage);
    document.getElementById("logoutBtn").addEventListener("click", async () => {
        console.log("Déconnexion !");
        await signOut(auth);
        window.location.href = "index.html";
    });
});