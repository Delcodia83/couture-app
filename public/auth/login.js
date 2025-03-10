export function showLoginPage() {
    document.getElementById("app").innerHTML = `
        <h2>Connexion</h2>
        <form>
            <label>Email :</label>
            <input type="email" id="email" required>
            <label>Mot de passe :</label>
            <input type="password" id="password" required>
            <button type="submit">Se connecter</button>
        </form>
    `;
}