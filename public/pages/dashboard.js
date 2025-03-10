export function showDashboard(user) {
    document.getElementById("app").innerHTML = `
        <h1>Bienvenue ${user.displayName || user.email}</h1>
        <p>Vous êtes connecté à Couture App.</p>
        <button id="addMeasurements">Ajouter des mesures</button>
        <button id="viewModels">Voir les modèles</button>
        <button id="logout">Se déconnecter</button>
    `;

    document.getElementById("addMeasurements").addEventListener("click", () => {
        alert("Formulaire d'ajout de mesures en développement...");
    });

    document.getElementById("viewModels").addEventListener("click", () => {
        alert("Affichage des modèles en développement...");
    });

    document.getElementById("logout").addEventListener("click", () => {
        import("../auth/logout.js").then(module => module.logoutUser());
    });
}