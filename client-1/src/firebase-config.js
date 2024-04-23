// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQ3kiy_SXJSsGSQhyhJ01eUCRzqi1lJiY",
    authDomain: "birmingham-council-website.firebaseapp.com",
    projectId: "birmingham-council-website",
    storageBucket: "birmingham-council-website.appspot.com",
    messagingSenderId: "477229605230",
    appId: "1:477229605230:web:c8c01f545bdec440f4e17f",
    measurementId: "G-6SL1XHBTE7"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
