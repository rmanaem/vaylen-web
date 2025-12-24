// app/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual keys from Firebase Console
const firebaseConfig = {

    apiKey: "AIzaSyCKaCG2BL1G6Sq947p1Ge9kxzd8NZ2JKOs",

    authDomain: "vaylen-prod.firebaseapp.com",

    projectId: "vaylen-prod",

    storageBucket: "vaylen-prod.firebasestorage.app",

    messagingSenderId: "356106606098",

    appId: "1:356106606098:web:ce672574b5edc963e9eacb",

    measurementId: "G-GKQQ9WD8MR"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);