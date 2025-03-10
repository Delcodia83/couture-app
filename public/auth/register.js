export function showRegisterPage() {
    document.getElementById("app").innerHTML = `
        <h2>Inscription</h2>
        <form>
            <label>Email :</label>
            <input type="email" id="email" required>
            <label>Mot de passe :</label>
            <input type="password" id="password" required>
            <button type="submit">S'inscrire</button>
        </form>
    `;
}