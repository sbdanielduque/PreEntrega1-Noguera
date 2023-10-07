import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzSIE6zYGeeLTEzwp-UikHwzry3dQPmRE",
    authDomain: "ecommerce-compustore.firebaseapp.com",
    projectId: "ecommerce-compustore",
    storageBucket: "ecommerce-compustore.appspot.com",
    messagingSenderId: "6116578813",
    appId: "1:6116578813:web:14a6237b66029af6783594"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => app