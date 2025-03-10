import { showHomePage } from "./pages/home.js";
import { showDashboard } from "./pages/dashboard.js";
import { showLoginPage } from "./auth/login.js";
import { logoutUser } from "./auth/logout.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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

// Gérer la navigation
document.getElementById("homeBtn").addEventListener("click", showHomePage);
document.getElementById("loginBtn").addEventListener("click", showLoginPage);
document.getElementById("dashboardBtn").addEventListener("click", () => {
    showDashboard(auth.currentUser);
});
document.getElementById("logoutBtn").addEventListener("click", logoutUser);