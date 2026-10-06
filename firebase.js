import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa17W7lDjnB4V02sFiG_wJOQOtp3ZYpVU",
  authDomain: "islami-khidma-app2026.firebaseapp.com",
  projectId: "islami-khidma-app2026",
  storageBucket: "islami-khidma-app2026.firebasestorage.app",
  messagingSenderId: "552980551495",
  appId: "1:552980551495:web:51787e78d534a60e7d9e62"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
