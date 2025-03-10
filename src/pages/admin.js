export function showAdminPage() {
    document.getElementById("app").innerHTML = `
        <h2>Tableau de bord Admin</h2>
        <p>Gérez les licences et les utilisateurs.</p>
        <button id="generateLicense">Générer une licence</button>
        <button id="manageUsers">Gérer les utilisateurs</button>
    `;

    document.getElementById("generateLicense").addEventListener("click", () => {
        alert("Licence générée !");
    });

    document.getElementById("manageUsers").addEventListener("click", () => {
        alert("Gestion des utilisateurs en cours...");
    });
}