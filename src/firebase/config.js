import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// configuration firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5STrxdEGdE8nCpa-auQJtI6iRZc6OPGA",
  authDomain: "vue3-firebase-699ae.firebaseapp.com",
  projectId: "vue3-firebase-699ae",
  storageBucket: "vue3-firebase-699ae.appspot.com",
  messagingSenderId: "1080431314693",
  appId: "1:1080431314693:web:634d9bd8207e1c4394d96c",
};

//init firebase
firebase.initializeApp(firebaseConfig);
//init firestore
const db = firebase.firestore();
export { db };