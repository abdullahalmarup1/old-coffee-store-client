// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA60wdXm4k7rpwOC_fKr-iDkwIiZTtxL_U",
    authDomain: "coffee-store-7b8a6.firebaseapp.com",
    projectId: "coffee-store-7b8a6",
    storageBucket: "coffee-store-7b8a6.appspot.com",
    messagingSenderId: "349967654144",
    appId: "1:349967654144:web:de14ef2e7aeafdba64e7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;