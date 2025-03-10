export function showDashboard(user) {
    document.getElementById("app").innerHTML = `
        <h1>Bienvenue ${user.displayName || user.email}</h1>
        <p>Vous êtes connecté à Couture App.</p>
        <button id="logout">Se déconnecter</button>
    `;

    document.getElementById("logout").addEventListener("click", () => {
        import("../auth/logout.js").then(module => module.logoutUser());
    });
}