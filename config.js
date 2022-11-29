import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDmbFU-pGf_R34WjbnBz96HiCwMqum73G4",
    authDomain: "project71v2.firebaseapp.com",
    projectId: "project71v2",
    storageBucket: "project71v2.appspot.com",
    messagingSenderId: "153925640501",
    appId: "1:153925640501:web:8a322c2174b1f8ba8aac7c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
