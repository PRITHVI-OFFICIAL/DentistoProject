// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8SSAPOs5ZJG1GKl_xtq10JTyJ0Y-sMhM",
  authDomain: "dentisto-228f6.firebaseapp.com",
  projectId: "dentisto-228f6",
  storageBucket: "dentisto-228f6.appspot.com",
  messagingSenderId: "8820594985",
  appId: "1:8820594985:web:ab866e7f9f820656fe3f38"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();