import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWCtSKRPEHb2vNGk10kIahVrBfvf3gaxE",
  authDomain: "webapp23-group5.firebaseapp.com",
  projectId: "webapp23-group5",
  storageBucket: "webapp23-group5.appspot.com",
  messagingSenderId: "798645134664",
  appId: "1:798645134664:web:0d7092335b6cab37bdbf7d"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);
const auth = firebase.auth(app);

export { firestore, auth };
