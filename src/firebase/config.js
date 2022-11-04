import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDIt_CTnia7CUQqUvVWGqLnrN1XtPSIk9w",
  authDomain: "irvin-e-commerce.firebaseapp.com",
  projectId: "irvin-e-commerce",
  storageBucket: "irvin-e-commerce.appspot.com",
  messagingSenderId: "202526869838",
  appId: "1:202526869838:web:c4ca11596d048f1e20761f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
