import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDf5VBvoBlGIorJvXb7U8q71Cac7Yovx48",
  authDomain: "todo-cf006.firebaseapp.com",
  projectId: "todo-cf006",
  storageBucket: "todo-cf006.appspot.com",
  messagingSenderId: "509227145100",
  appId: "1:509227145100:web:f4f46907a187239dfea8a9",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
