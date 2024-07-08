import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDe2YflDnfYia7mBb6vXaUfI26tDjyTq0w",
  authDomain: "e-commerce-6d572.firebaseapp.com",
  projectId: "e-commerce-6d572",
  storageBucket: "e-commerce-6d572.appspot.com",
  messagingSenderId: "1075179544941",
  appId: "1:1075179544941:web:48162c1c95400608203a64",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
