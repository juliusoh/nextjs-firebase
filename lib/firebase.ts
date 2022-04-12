import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBOfohqfs98Su8TNuk2A651NaKypLifo6E",
  authDomain: "devopsjulius.firebaseapp.com",
  projectId: "devopsjulius",
  storageBucket: "devopsjulius.appspot.com",
  messagingSenderId: "636679556922",
  appId: "1:636679556922:web:8d7c14f1eb404dbc00ca03",
  measurementId: "G-BDWD0Z0239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app)
export const storage = getStorage(app)