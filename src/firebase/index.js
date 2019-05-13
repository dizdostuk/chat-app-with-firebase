import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCXRkyLyJHXumfMv2wjkzdS9J8dccQq68Q",
  authDomain: "chat-app-bbf58.firebaseapp.com",
  databaseURL: "https://chat-app-bbf58.firebaseio.com",
  projectId: "chat-app-bbf58",
  storageBucket: "chat-app-bbf58.appspot.com",
  messagingSenderId: "556672069955",
  appId: "1:556672069955:web:ce444564b2ff3ebb"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
  db,
  firebase
};