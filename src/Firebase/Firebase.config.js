// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf2qnWk2O8V09I9f0mXPYEPTi2_jc9ou4",
  authDomain: "sellify-tech-store-app.firebaseapp.com",
  projectId: "sellify-tech-store-app",
  storageBucket: "sellify-tech-store-app.firebasestorage.app",
  messagingSenderId: "164689429925",
  appId: "1:164689429925:web:bc91102fa52ed19e40544c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;