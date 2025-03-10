import { auth } from "../utils/firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

export function showLoginPage() {
    document.getElementById("app").innerHTML = `
        <h2>Connexion</h2>
        <form id="loginForm">
            <label for="email">Email :</label>
            <input type="email" id="email" required />
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" required />
            <button type="submit">Se connecter</button>
        </form>
        <button id="backHome">Retour</button>
    `;

    document.getElementById("loginForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Connexion réussie !");
            window.location.href = "index.html";
        } catch (error) {
            alert("Erreur de connexion : " + error.message);
        }
    });

    document.getElementById("backHome").addEventListener("click", () => {
        window.location.href = "index.html";
    });
}