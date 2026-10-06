import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "আপনার_সঠিক_api_key_এখানে_দিন",
    authDomain: "islami-khidma-app2026.firebaseapp.com",
    projectId: "islami-khidma-app2026",
    storageBucket: "islami-khidma-app2026.appspot.com",
    messagingSenderId: "আপনার_সেন্ডার_আইডি",
    appId: "আপনার_অ্যাপ_আইডি"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
