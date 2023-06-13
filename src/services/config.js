import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "black--wolf.firebaseapp.com",
  projectId: "black--wolf",
  storageBucket: "black--wolf.appspot.com",
  messagingSenderId: "260198420513",
  appId: "1:260198420513:web:829c066a717696fa32d360"
};

const app = initializeApp(firebaseConfig);