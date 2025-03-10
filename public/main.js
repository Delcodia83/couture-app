// Importation des modules nécessaires
import { showHomePage } from "./pages/home.js";
import { showRegisterPage } from "./auth/register.js";
import { showLoginPage } from "./auth/login.js";
import { showDashboard } from "./pages/dashboard.js";
import { showAdminPage } from "./pages/admin.js";
import { logoutUser } from "./auth/logout.js";

// Importation Firebase
import { auth } from "./utils/firebaseConfig.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

console.log("Chargement de main.js...");

// Vérifier l'état de connexion de l'utilisateur
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("dashboardBtn").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "inline";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("registerBtn").style.display = "none";

        if (user.email === "admin@coutureapp.com") {
            document.getElementById("adminBtn").style.display = "inline";
        }

        showDashboard(user);
    } else {
        document.getElementById("dashboardBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("adminBtn").style.display = "none";
        document.getElementById("loginBtn").style.display = "inline";
        document.getElementById("registerBtn").style.display = "inline";
        showHomePage();
    }
});

// Vérification des boutons
document.addEventListener("DOMContentLoaded", () => {
    console.log("Ajout des événements aux boutons...");

    document.getElementById("homeBtn").addEventListener("click", () => {
        console.log("Accueil ouvert !");
        showHomePage();
    });

    document.getElementById("registerBtn").addEventListener("click", () => {
        console.log("Page inscription ouverte !");
        showRegisterPage();
    });

    document.getElementById("loginBtn").addEventListener("click", () => {
        console.log("Page connexion ouverte !");
        showLoginPage();
    });

    document.getElementById("dashboardBtn").addEventListener("click", () => {
        console.log("Tableau de bord ouvert !");
        showDashboard();
    });

    document.getElementById("adminBtn").addEventListener("click", () => {
        console.log("Page Admin ouverte !");
        showAdminPage();
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
        console.log("Déconnexion !");
        logoutUser();
    });
});