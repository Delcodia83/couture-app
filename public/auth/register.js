import { auth, db } from "../utils/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

export function showRegisterPage() {
    document.getElementById("app").innerHTML = `
        <h2>Inscription</h2>
        <form id="registerForm">
            <label for="email">Email :</label>
            <input type="email" id="email" required />
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" required />
            <label for="role">Choisir un rôle :</label>
            <select id="role">
                <option value="client">Client</option>
                <option value="tailleur">Tailleur</option>
            </select>
            <button type="submit">S'inscrire</button>
        </form>
        <button id="backHome">Retour</button>
    `;

    document.getElementById("registerForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                email: email,
                role: role,
                createdAt: new Date()
            });

            alert("Inscription réussie !");
            window.location.href = "index.html";
        } catch (error) {
            alert("Erreur d'inscription : " + error.message);
        }
    });

    document.getElementById("backHome").addEventListener("click", () => {
        window.location.href = "index.html";
    });
}