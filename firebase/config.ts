// Configuration Firebase
// 
// INSTRUCTIONS DE CONFIGURATION :
// 1. Allez sur https://console.firebase.google.com/
// 2. Créez un nouveau projet (ou utilisez un existant)
// 3. Activez Firestore Database (Mode production)
// 4. Dans les paramètres du projet > Vos applications > Application Web
// 5. Copiez les valeurs de configuration et remplacez-les ci-dessous

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// REMPLACEZ CES VALEURS PAR VOTRE CONFIGURATION FIREBASE
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
