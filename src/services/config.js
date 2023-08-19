import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-dKeyUDa5f_9hmlkKI65Ve6c7yK1pCNY",
  authDomain: "black--wolf3.firebaseapp.com",
  projectId: "black--wolf3",
  storageBucket: "black--wolf3.appspot.com",
  messagingSenderId: "1055867523838",
  appId: "1:1055867523838:web:ff1c1b02389a7ca87e4baf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);