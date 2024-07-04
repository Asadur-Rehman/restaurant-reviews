import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBM8dj_RTGarVGutwsgLGgjLcf9-cQAJVY",
    authDomain: "project2-d4d30.firebaseapp.com",
    projectId: "project2-d4d30",
    storageBucket: "project2-d4d30.appspot.com",
    messagingSenderId: "794537733725",
    appId: "1:794537733725:web:e6f1a82459b06fa59167b4",
    measurementId: "G-58BE9TCQ44"
  };

initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();