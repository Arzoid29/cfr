import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXILK-A89FVh2V_85o9ojqrwaR6bZo9sU",
  authDomain: "crud-6671c.firebaseapp.com",
  projectId: "crud-6671c",
  storageBucket: "crud-6671c.appspot.com",
  messagingSenderId: "1067770999919",
  appId: "1:1067770999919:web:ede3a4873f64ae4f7c099a",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Firestore
