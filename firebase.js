import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPxOZfa3Z4X0s-YqJOKLi8ljurd9qzeyU",
  authDomain: "clone-react-2704b.firebaseapp.com",
  projectId: "clone-react-2704b",
  storageBucket: "clone-react-2704b.appspot.com",
  messagingSenderId: "876040148490",
  appId: "1:876040148490:web:081f33341b0b13a88771f3",
  measurementId: "G-5CP61MZKL6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };