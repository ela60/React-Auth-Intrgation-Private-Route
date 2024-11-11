// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3R1-_9rUVFQ9ZEV-Ow0_-djOsoEIAls",
  authDomain: "auth-mohamillon.firebaseapp.com",
  projectId: "auth-mohamillon",
  storageBucket: "auth-mohamillon.firebasestorage.app",
  messagingSenderId: "607401219103",
  appId: "1:607401219103:web:285821e1a64d3de49eb12a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);