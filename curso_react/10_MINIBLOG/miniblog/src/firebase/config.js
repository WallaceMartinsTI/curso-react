// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3fCv5f1OzQsRLX545aYvQtH9c4O3QUU0",
  authDomain: "miniblog-880ca.firebaseapp.com",
  projectId: "miniblog-880ca",
  storageBucket: "miniblog-880ca.appspot.com",
  messagingSenderId: "422661117364",
  appId: "1:422661117364:web:58cdabe7eba2a49b824ee1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
