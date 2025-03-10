import { showHomePage } from "./pages/home.js";
import { showRegisterPage } from "./auth/register.js";
import { showLoginPage } from "./auth/login.js";
import { showDashboard } from "./pages/dashboard.js";
import { showAdminPage } from "./pages/admin.js";
import { logoutUser } from "./auth/logout.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";  // Corrige Firebase

console.log("Chargement de main.js...");

const auth = getAuth();

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
document.getElementById("homeBtn").addEventListener("click", showHomePage);
document.getElementById("registerBtn").addEventListener("click", showRegisterPage);
document.getElementById("loginBtn").addEventListener("click", showLoginPage);
document.getElementById("dashboardBtn").addEventListener("click", () => showDashboard(auth.currentUser));
document.getElementById("adminBtn").addEventListener("click", showAdminPage);
document.getElementById("logoutBtn").addEventListener("click", logoutUser);