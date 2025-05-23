// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk1UDqzbKVQlES38ePu41xiLX3EhFGYFg",
  authDomain: "miappmusica-1730d.firebaseapp.com",
  projectId: "miappmusica-1730d",
  storageBucket: "miappmusica-1730d.firebasestorage.app",
  messagingSenderId: "582469699414",
  appId: "1:582469699414:web:572a8d37bc42bbc4ddf8f7",
  measurementId: "G-MRJNWL1FW2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
