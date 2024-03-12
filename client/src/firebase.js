// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-dcdcc.firebaseapp.com",
  projectId: "mern-blog-dcdcc",
  storageBucket: "mern-blog-dcdcc.appspot.com",
  messagingSenderId: "455061988292",
  appId: "1:455061988292:web:cbd31d66df3c478cfa3a91",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
