import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDiAg9hd1bojV49EZw90ZvapLWBo7JSF8I",
  authDomain: "petpatrol-5f189.firebaseapp.com",
  projectId: "petpatrol-5f189",
  storageBucket: "petpatrol-5f189.appspot.com",
  messagingSenderId: "1097247684276",
  appId: "1:1097247684276:web:7ea2af44f675e73cd6c9e1",
  measurementId: "G-2KWN13S27M",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();
const fire= firebase.firestore();


export { database,fire,auth, firebase };
