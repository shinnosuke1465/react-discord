import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBio0weJGpKqPhhynm05tD3VmmGjtM8IUg",
  authDomain: "react-discord-bd856.firebaseapp.com",
  projectId: "react-discord-bd856",
  storageBucket: "react-discord-bd856.firebasestorage.app",
  messagingSenderId: "718478720367",
  appId: "1:718478720367:web:336197b65eaffd972a3c9a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };