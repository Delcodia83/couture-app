import { cloudinaryConfig } from "../utils/cloudinaryConfig.js";
import { MAX_FILE_SIZE, ALLOWED_FILE_TYPES, CLOUDINARY_API_URL, ERROR_MESSAGES } from "../config/constants.js";

/**
 * Fonction pour uploader un fichier sur Cloudinary.
 * @param {File} file - Le fichier à uploader.
 * @returns {Promise<string>} - URL du fichier uploadé ou erreur.
 */
export async function uploadFileToCloudinary(file) {
    try {
        // Vérifier si la taille du fichier est dans la limite autorisée
        if (file.size > MAX_FILE_SIZE) {
            throw new Error(ERROR_MESSAGES.UPLOAD_LIMIT_EXCEEDED);
        }

        // Vérifier si le type de fichier est autorisé
        if (!ALLOWED_FILE_TYPES.includes(file.type)) {
            throw new Error(ERROR_MESSAGES.INVALID_FILE_TYPE);
        }

        // Création du formData pour l'upload
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", cloudinaryConfig.uploadPreset);

        // Envoi du fichier vers Cloudinary
        const response = await fetch(CLOUDINARY_API_URL, {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || "Erreur inconnue lors de l'upload");
        }

        console.log("Fichier uploadé avec succès :", data.secure_url);
        return data.secure_url; // Retourne l'URL du fichier uploadé

    } catch (error) {
        console.error("Erreur lors de l'upload sur Cloudinary :", error.message);
        throw error;
    }
}