import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig1 = {
  apiKey: "AIzaSyD60dPRt-42KDGjEatVV-cY3-91cUcg5NA",
  authDomain: "seguratech-if2023.firebaseapp.com",
  projectId: "seguratech-if2023",
  storageBucket: "seguratech-if2023.appspot.com",
  messagingSenderId: "1526765890",
  appId: "1:1526765890:web:1ccc5c211f9292a66590db"
};

const app1 = initializeApp(firebaseConfig1, 'projeto1');
const auth1 = getAuth(app1);
const db = getFirestore(app1);

export { auth1, db, app1 as firebase };
