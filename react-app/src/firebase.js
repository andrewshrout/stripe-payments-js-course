import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCJLGaDqpTj971XmF41rk7Jhf22ncP2OcM",
  authDomain: "real-estate-saas-47e04.firebaseapp.com",
  databaseURL: "https://real-estate-saas-47e04.firebaseio.com",
  projectId: "real-estate-saas-47e04",
  storageBucket: "real-estate-saas-47e04.appspot.com",
  messagingSenderId: "560256521387",
  appId: "1:560256521387:web:76c7b85cd51547762113ee",
  measurementId: "G-SSCZ8VH0BZ"
};


firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();
