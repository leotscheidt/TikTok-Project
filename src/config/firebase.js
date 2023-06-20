// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLhHFpXWjMfxHUhUFY6ipVyGuxHL1Oebw",
  authDomain: "tiktok---jornada-ef6a4.firebaseapp.com",
  projectId: "tiktok---jornada-ef6a4",
  storageBucket: "tiktok---jornada-ef6a4.appspot.com",
  messagingSenderId: "68369608155",
  appId: "1:68369608155:web:5e73c5d9964bd854f3cbfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;