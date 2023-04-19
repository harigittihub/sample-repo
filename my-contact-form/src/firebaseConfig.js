
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8R0BEOet2wO-CqG9ZwcD6vcncweG5r-M",
  authDomain: "contactpage-1e373.firebaseapp.com",
  projectId: "contactpage-1e373",
  storageBucket: "contactpage-1e373.appspot.com",
  messagingSenderId: "814758906122",
  appId: "1:814758906122:web:828b678ff39ffd8b1692f3"
};


 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);