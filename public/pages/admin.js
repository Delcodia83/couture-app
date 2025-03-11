import { auth, db } from "../utils/firebaseConfig.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { collection, addDoc, getDocs, query } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Vérification de l'accès Admin
auth.onAuthStateChanged(user => {
    if (!user || user.email !== "admin@coutureapp.com") {
        alert("Accès refusé !");
        window.location.href = "index.html";
    }
});

// Génération d'une licence pour un tailleur
document.getElementById("generateLicenseBtn").addEventListener("click", async () => {
    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const duration = document.getElementById("licenseDuration").value;

    if (!userName || !userEmail) {
        alert("Veuillez entrer le nom et l'email du tailleur !");
        return;
    }

    try {
        const licenseKey = "LIC-" + Math.random().toString(36).substr(2, 9).toUpperCase();

        await addDoc(collection(db, "licenses"), {
            name: userName,
            email: userEmail,
            licenseKey: licenseKey,
            duration: duration,
            createdAt: new Date()
        });

        alert("Licence générée avec succès !");
        loadLicenses();
    } catch (error) {
        alert("Erreur lors de la génération : " + error.message);
    }
});

// Charger les licences existantes
async function loadLicenses() {
    const licensesList = document.getElementById("licensesList");
    licensesList.innerHTML = "";

    const q = query(collection(db, "licenses"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const li = document.createElement("li");
        li.textContent = `Nom: ${data.name} | Email: ${data.email} | Licence: ${data.licenseKey} | Durée: ${data.duration}`;
        licensesList.appendChild(li);
    });
}

document.getElementById("logoutBtn").addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
});

document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

loadLicenses();