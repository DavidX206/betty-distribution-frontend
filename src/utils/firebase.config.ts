// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZR7O0dvkryYR8rFQ9t2A1FSxPDf0rLE",
  authDomain: "betty-destribution.firebaseapp.com",
  projectId: "betty-destribution",
  storageBucket: "betty-destribution.appspot.com",
  messagingSenderId: "109360898169",
  appId: "1:109360898169:web:94876115ccad8a3fd3f4a8",
  measurementId: "G-EBWM50GYDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);