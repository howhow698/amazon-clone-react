import firebase from 'firebase';

/**
 * For Firebase JS SDK v7.20.0 and later, measurementId is optional
 * 
 * Firebase: amazon-clone-react
 * domain: clone-react-c8950
 */
const firebaseConfig = {
  apiKey: "AIzaSyCWy-oz-7bounthGresXt4J6C2QiErbVWU",
  authDomain: "clone-react-c8950.firebaseapp.com",
  projectId: "clone-react-c8950",
  storageBucket: "clone-react-c8950.appspot.com",
  messagingSenderId: "347875820361",
  appId: "1:347875820361:web:b62372a650373034a99098",
  measurementId: "G-8S6KPJCJYP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
