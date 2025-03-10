import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function showRegisterPage() {
    document.getElementById("app").innerHTML = `
        <h2>Inscription</h2>
        <form id="registerForm">
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Mot de passe" required>
            <button type="submit">S'inscrire</button>
        </form>
    `;

    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => window.location.reload())
            .catch(error => alert("Erreur d'inscription : " + error.message));
    });
}