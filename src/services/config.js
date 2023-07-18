import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBRVR0rRKIgMlWrdO3NMlLab5jVPBFiO3Y",
  authDomain: "ecommerce-db6a9.firebaseapp.com",
  projectId: "ecommerce-db6a9",
  storageBucket: "ecommerce-db6a9.appspot.com",
  messagingSenderId: "490529028459",
  appId: "1:490529028459:web:915359379d07f69320742e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);