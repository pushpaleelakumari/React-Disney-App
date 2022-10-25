import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA9Fd82maXYEYkOboMXXO3gOzsDjT03clA",
  authDomain: "disney-project-b8911.firebaseapp.com",
  projectId: "disney-project-b8911",
  storageBucket: "disney-project-b8911.appspot.com",
  messagingSenderId: "79310095232",
  appId: "1:79310095232:web:5addd941fb0a76dfac3765",
  measurementId: "G-VJZ9P52HHS"
};



const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();



export {auth, provider, storage};
export default db;
