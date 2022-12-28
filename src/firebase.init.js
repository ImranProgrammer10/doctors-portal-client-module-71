// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlBDNCa2Fzkws-er73MaG7WQe0M-Mg4Yo",
    authDomain: "doctors-portal-70652.firebaseapp.com",
    projectId: "doctors-portal-70652",
    storageBucket: "doctors-portal-70652.appspot.com",
    messagingSenderId: "860045209713",
    appId: "1:860045209713:web:80348b107b47d342b4ebd0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;