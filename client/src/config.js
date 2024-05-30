// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDOJv1IJ6dWTnXme6ezyCUSJA_hWzsKib0",
    authDomain: "mern-auth-20c44.firebaseapp.com",
    projectId: "mern-auth-20c44",
    storageBucket: "mern-auth-20c44.appspot.com",
    messagingSenderId: "877861101039",
    appId: "1:877861101039:web:ea5f99b3e8bb499f7b2a1a"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };