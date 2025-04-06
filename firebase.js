// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPEE4EetYFCR0rqL5LlQN_46u2yh3iqOQ",
  authDomain: "hablame-islandes.firebaseapp.com",
  projectId: "hablame-islandes",
  storageBucket: "hablame-islandes.appspot.com",
  messagingSenderId: "150210962920",
  appId: "1:150210962920:web:1ed6c3ceeb16bf2c5cf705d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
