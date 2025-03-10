export function showDashboard(user) {
    document.getElementById("app").innerHTML = `
        <h2>Tableau de Bord</h2>
        <p>Bienvenue, ${user.email} !</p>
    `;
}