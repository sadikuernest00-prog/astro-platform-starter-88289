import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzwDY8Rwhxzz0wm80a0YLPBJMi7OVMiA4",
  authDomain: "amic-222.firebaseapp.com",
  projectId: "amic-222",
  storageBucket: "amic-222.firebasestorage.app",
  messagingSenderId: "343688902626",
  appId: "1:343688902626:web:fc7d7b54a8a8c67a586bbb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
