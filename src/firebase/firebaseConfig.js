import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCPZX_zBEe7971nUb9oHvjl_PymTcbzG_I",
  authDomain: "rout-28abc.firebaseapp.com",
  projectId: "rout-28abc",
  storageBucket: "rout-28abc.appspot.com",
  messagingSenderId: "379289185101",
  appId: "1:379289185101:web:32d25280a3c73247c7a504",
  measurementId: "G-BF5RW2BGHJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, doc, getDoc };