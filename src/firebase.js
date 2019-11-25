import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhzTNy9M4XC0ka9DKyGmYAUCdyp5JGZDk",
  authDomain: "todo-bb0b6.firebaseapp.com",
  databaseURL: "https://todo-bb0b6.firebaseio.com",
  projectId: "todo-bb0b6",
  storageBucket: "todo-bb0b6.appspot.com",
  messagingSenderId: "184030773505",
  appId: "1:184030773505:web:aae864c8e7febf2c4d5b00",
  measurementId: "G-GQBLB9XME1"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
