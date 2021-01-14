import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCkGraK7tyuW963IMRdRvDB4cWCDR_LPgk",
  authDomain: "clothing-store-c1cb1.firebaseapp.com",
  projectId: "clothing-store-c1cb1",
  storageBucket: "clothing-store-c1cb1.appspot.com",
  messagingSenderId: "267564949573",
  appId: "1:267564949573:web:3a702438ba3f0aba8ec32c",
  measurementId: "G-X3BZ74B5JN"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;