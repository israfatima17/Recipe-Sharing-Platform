// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtNHVxmHcgOAk3f-OHLA5Ye_jo0GD6FBc",
    authDomain: "recipe-sharing-platform-c5538.firebaseapp.com",
    projectId: "recipe-sharing-platform-c5538",
    storageBucket: "recipe-sharing-platform-c5538.appspot.com",
    messagingSenderId: "386424351785",
    appId: "1:386424351785:web:263d3b05e32211c3b54038",
    measurementId: "G-RPQ06R11LM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
