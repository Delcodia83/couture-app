import { getAuth, signOut } from "firebase/auth";

export function logoutUser() {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.reload();
    }).catch(error => {
        alert("Erreur lors de la déconnexion : " + error.message);
    });
}