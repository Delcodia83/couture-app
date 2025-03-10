import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export function showRegisterPage() {
    document.getElementById("app").innerHTML = `
        <h2>Créer un compte</h2>
        <form id="registerForm">
            <input type="text" id="name" placeholder="Nom complet" required>
            <input type="email" id="email" placeholder="Email" required>
            <input type="password" id="password" placeholder="Mot de passe" required>
            <select id="role">
                <option value="client">Client</option>
                <option value="tailleur">Tailleur</option>
            </select>
            <button type="submit">S'inscrire</button>
        </form>
    `;

    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const auth = getAuth();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => window.location.reload())
            .catch(error => alert("Erreur d'inscription : " + error.message));
    });
}