// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCus_AaTon94zRGkT_50MNgIe2V59SmXAk",
  authDomain: "linkedin-49aa6.firebaseapp.com",
  projectId: "linkedin-49aa6",
  storageBucket: "linkedin-49aa6.appspot.com",
  messagingSenderId: "50891981188",
  appId: "1:50891981188:web:76e5939f6827cfaed29dd1",
  measurementId: "G-B3XMNKFZP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

// ✅ Export everything
export { app, auth, provider, storage, signInWithPopup };
export default db;
