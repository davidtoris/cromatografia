
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoeFk33fbcajZ8WR7jiy9k8263wIhXjZk",
  authDomain: "consuf-d9441.firebaseapp.com",
  projectId: "consuf-d9441",
  storageBucket: "consuf-d9441.appspot.com",
  messagingSenderId: "485298184625",
  appId: "1:485298184625:web:80b64e3c553e363b6cdd90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;