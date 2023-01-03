// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa32SUyxj_BpCOkQEVELkJDSUJN-rXYwI",
  authDomain: "chat-app-812c8.firebaseapp.com",
  projectId: "chat-app-812c8",
  storageBucket: "chat-app-812c8.appspot.com",
  messagingSenderId: "645969013097",
  appId: "1:645969013097:web:29283a1a20675f6b7b75f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)