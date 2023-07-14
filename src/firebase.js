import firebase from "@firebase/app";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDefScbTPSSxkeq7RpSNZspa20lHSe2ttY",
    authDomain: "ecommerce-699eb.firebaseapp.com",
    projectId: "ecommerce-699eb",
    storageBucket: "ecommerce-699eb.appspot.com",
    messagingSenderId: "616393759196",
    appId: "1:616393759196:web:b3ee31e62a537ed4f55719"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth};