
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCKZied5M9-MXdqvJkPgxQzAJ9WeqreUyc",
  authDomain: "bonsai-authintication.firebaseapp.com",
  projectId: "bonsai-authintication",
  storageBucket: "bonsai-authintication.appspot.com",
  messagingSenderId: "215246930785",
  appId: "1:215246930785:web:d027bf36a3e069d50e7b20",
  measurementId: "G-W0E398RFV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
