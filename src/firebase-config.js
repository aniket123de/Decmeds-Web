// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDobNl7u3bHJbGuLNnifHNZtu-mWitEXjU",
  authDomain: "decmedsapplication.firebaseapp.com",
  databaseURL: "https://decmedsapplication-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "decmedsapplication",
  storageBucket: "decmedsapplication.firebasestorage.app",
  messagingSenderId: "985193641768",
  appId: "1:985193641768:web:69b5bfda3eab1b6d67821d",
  measurementId: "G-XTLD5KQBG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
export  { analytics };