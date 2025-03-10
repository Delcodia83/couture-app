import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function showLoginPage() {
    document.getElementById("app").innerHTML = `
        <h2>Connexion</h2>
        <form id="loginForm">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Mot de passe" required>
            <button type="submit">Se connecter</button>
        </form>
    `;

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => window.location.reload())
            .catch(error => alert("Erreur de connexion : " + error.message));
    });
}