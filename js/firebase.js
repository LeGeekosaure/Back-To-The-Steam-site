import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBN8Qe4Mp0dfRxKnlXUVGggILPxfn5ygHY",
    authDomain: "back-to-the-steam-steam.firebaseapp.com",
    projectId: "back-to-the-steam-steam",
    storageBucket: "back-to-the-steam-steam.firebasestorage.app",
    messagingSenderId: "827452185860",
    appId: "1:827452185860:web:65cc1b7a0c98922514c451",
    measurementId: "G-8H7R0K9VV5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
