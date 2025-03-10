// Fichier constants.js - Contient toutes les constantes globales de l'application

// Taille maximale pour l'upload des fichiers (100MB)
export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB en octets

// Rôles utilisateurs
export const USER_ROLES = {
    CLIENT: "client",
    TAILLEUR: "tailleur",
    ADMIN: "admin"
};

// Types de licences pour les tailleurs
export const LICENSE_TYPES = {
    TRIMESTRIELLE: "trimestrielle",
    SEMESTRIELLE: "semestrielle",
    ANNUELLE: "annuelle",
    A_VIE: "à vie",
    LIMITE_CLIENTS_10: "limite_10_clients",
    LIMITE_CLIENTS_20: "limite_20_clients",
    LIMITE_CLIENTS_50: "limite_50_clients"
};

// Statuts des licences
export const LICENSE_STATUS = {
    ACTIVE: "active",
    EXPIREE: "expirée",
    EN_ATTENTE: "en attente"
};

// URL de l'API Cloudinary
export const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dkh6ty9fc/upload";

// Types de fichiers autorisés pour l'upload des modèles de couture
export const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "application/pdf"];

// Collection Firestore pour stocker les utilisateurs et leurs données
export const FIRESTORE_COLLECTIONS = {
    USERS: "users",
    MEASUREMENTS: "measurements",
    MODELS: "models",
    LICENSES: "licenses"
};

// Messages d'erreur globalisés
export const ERROR_MESSAGES = {
    UPLOAD_LIMIT_EXCEEDED: "La taille du fichier dépasse la limite autorisée de 100MB.",
    UNAUTHORIZED_ACCESS: "Vous n'avez pas les permissions nécessaires pour effectuer cette action.",
    INVALID_FILE_TYPE: "Type de fichier non supporté. Veuillez choisir une image ou un PDF."
};