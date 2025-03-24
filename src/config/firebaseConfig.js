// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2-5_G2gcuTl3AjsuMfCZ7S8BsZWCpX2c",
  authDomain: "ptaclogin.firebaseapp.com",
  projectId: "ptaclogin",
  storageBucket: "ptaclogin.firebasestorage.app",
  messagingSenderId: "1010703531299",
  appId: "1:1010703531299:web:6d11b156bc7a61c1b8e096",
  measurementId: "G-5P1EJX1463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};