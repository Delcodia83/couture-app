export function showDashboard(user) {
    document.getElementById("app").innerHTML = `
        <h1>Bienvenue ${user.displayName || user.email}</h1>
        <button id="logoutBtn">Déconnexion</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", () => {
        import("../auth/logout.js").then(module => module.logoutUser());
    });
}