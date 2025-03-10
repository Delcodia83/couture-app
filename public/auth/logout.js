import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const auth = getAuth();

export function logoutUser() {
    signOut(auth).then(() => {
        alert("Déconnexion réussie !");
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
    });
}