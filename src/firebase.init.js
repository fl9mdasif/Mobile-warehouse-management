// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9KbFm2l5I__gQbVAjuvVniX6PhP8KuRw",
    authDomain: "mobile-warehouse-fd23b.firebaseapp.com",
    projectId: "mobile-warehouse-fd23b",
    storageBucket: "mobile-warehouse-fd23b.appspot.com",
    messagingSenderId: "513940056097",
    appId: "1:513940056097:web:6f73df8123d58b06b75b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;