// Import necessary modules from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCus_AaTon94zRGkT_50MNgIe2V59SmXAk",
  authDomain: "linkedin-49aa6.firebaseapp.com",
  projectId: "linkedin-49aa6",
  storageBucket: "linkedin-49aa6.appspot.com", // ✅ Corrected typo
  messagingSenderId: "50891981188",
  appId: "1:50891981188:web:76e5939f6827cfaed29dd1",
  measurementId: "G-B3XMNKFZP8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp); // Firestore database
const auth = getAuth(firebaseApp); // Authentication
const provider = new GoogleAuthProvider(); // Google Auth Provider
const storage = getStorage(firebaseApp); // Cloud Storage

export { auth, provider, storage };
export default db;
