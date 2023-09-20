
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCvwXGm1SaFI_5yx2pdeqwGGsIoT6cIAsQ",
  authDomain: "git-warriors.firebaseapp.com",
  projectId: "git-warriors",
  storageBucket: "git-warriors.appspot.com",
  messagingSenderId: "908590477414",
  appId: "1:908590477414:web:1626d0a24344372c5bbda7",
  measurementId: "G-HJT1LG0KCY"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
