
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBENNW782BHeOmqNNC2b70Ly5n4-GMLwFY",
  authDomain: "my-todo-app-9105c.firebaseapp.com",
  projectId: "my-todo-app-9105c",
  storageBucket: "my-todo-app-9105c.appspot.com",
  messagingSenderId: "181995467969",
  appId: "1:181995467969:web:954c9a30dc20793f979040",
  measurementId: "G-90HEWGB76M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);