import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { firebaseConfig } from "../utils/firebaseConfig.js";

const db = getFirestore(firebaseConfig);

export async function addMeasurement(userId, measurementData) {
    try {
        const docRef = await addDoc(collection(db, `users/${userId}/measurements`), measurementData);
        console.log("Mesure ajoutée avec ID: ", docRef.id);
    } catch (error) {
        console.error("Erreur lors de l'ajout de la mesure: ", error);
    }
}

export async function getMeasurements(userId) {
    const querySnapshot = await getDocs(collection(db, `users/${userId}/measurements`));
    let measurements = [];
    querySnapshot.forEach((doc) => {
        measurements.push({ id: doc.id, ...doc.data() });
    });
    return measurements;
}