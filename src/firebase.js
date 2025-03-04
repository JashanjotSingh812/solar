import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2PDeT1WdfAikpC1vjvapn74lysNonnwc",
    authDomain: "solar-5b3e8.firebaseapp.com",
    projectId: "solar-5b3e8",
    storageBucket: "solar-5b3e8.firebasestorage.app",
    messagingSenderId: "462891173077",
    appId: "1:462891173077:web:693502cc4164fbe01d0e5c",
    measurementId: "G-RW0QW82RMV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
