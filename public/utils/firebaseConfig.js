// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuration Firebase (tu l'as déjà défini correctement)
const firebaseConfig = {
  apiKey: "AIzaSyDI77X6UDWX1WLK3uui3yRYWcnsmkUbE0Y",
  authDomain: "couture-app-2af14.firebaseapp.com",
  projectId: "couture-app-2af14",
  storageBucket: "couture-app-2af14.firebasestorage.app",
  messagingSenderId: "448530497830",
  appId: "1:448530497830:web:88ac50582ebcccb1d201e7"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };