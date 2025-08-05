// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArnscgy-otAfMUcNFXHbWuoND1Tmfnp84",
  authDomain: "netflixgpt-2140a.firebaseapp.com",
  projectId: "netflixgpt-2140a",
  storageBucket: "netflixgpt-2140a.firebasestorage.app",
  messagingSenderId: "1041601843392",
  appId: "1:1041601843392:web:2c891aa1a760a7a3209d25",
  measurementId: "G-8CVDMPRKXE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();