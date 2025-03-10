import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./utils/firebaseConfig.js";
import { showLoginPage } from "./auth/login.js";
import { showDashboard } from "./pages/dashboard.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        showDashboard(user);
    } else {
        showLoginPage();
    }
});