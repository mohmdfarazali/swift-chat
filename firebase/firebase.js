// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYrKCn_9uj_3BIgjLgxmmGT1fCHGL1Fko",
  authDomain: "chat-app-da780.firebaseapp.com",
  projectId: "chat-app-da780",
  storageBucket: "chat-app-da780.appspot.com",
  messagingSenderId: "175488534613",
  appId: "1:175488534613:web:bc4c3e7e48c8ba77c72cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);