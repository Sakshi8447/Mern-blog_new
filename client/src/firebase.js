// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "newmern-blog.firebaseapp.com",
  projectId: "newmern-blog",
  storageBucket: "newmern-blog.appspot.com",
  messagingSenderId: "664096783946",
  appId: "1:664096783946:web:3871554385f495e531b0b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);