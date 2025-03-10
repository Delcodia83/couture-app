import { showHomePage } from "./pages/home.js";
import { showDashboard } from "./pages/dashboard.js";
import { showLoginPage } from "./auth/login.js";
import { logoutUser } from "./auth/logout.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

console.log("main.js chargé !");

const auth = getAuth();

// Vérifier l’état de l’utilisateur et afficher la bonne page
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("dashboardBtn").style.display = "inline";
        document.getElementById("logoutBtn").style.display = "inline";
        document.getElementById("loginBtn").style.display = "none";
        showDashboard(user);
    } else {
        document.getElementById("dashboardBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("loginBtn").style.display = "inline";
        showHomePage();
    }
});

// Gérer la navigation et tester les clics
document.getElementById("homeBtn").addEventListener("click", () => {
    console.log("Bouton Accueil cliqué !");
    showHomePage();
});
document.getElementById("loginBtn").addEventListener("click", () => {
    console.log("Bouton Connexion cliqué !");
    showLoginPage();
});
document.getElementById("dashboardBtn").addEventListener("click", () => {
    console.log("Bouton Tableau de bord cliqué !");
    showDashboard(auth.currentUser);
});
document.getElementById("logoutBtn").addEventListener("click", () => {
    console.log("Bouton Déconnexion cliqué !");
    logoutUser();
});