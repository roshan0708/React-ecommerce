import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDBQ5s4OtTokqUNreSV7MWuz-jbFFYxLo",
  authDomain: "ecommerce-react-db-de699.firebaseapp.com",
  databaseURL: "https://ecommerce-react-db-de699.firebaseio.com",
  projectId: "ecommerce-react-db-de699",
  storageBucket: "ecommerce-react-db-de699.appspot.com",
  messagingSenderId: "710393122707",
  appId: "1:710393122707:web:459886d99596ecf1142266",
  measurementId: "G-NWQRC0MP7S"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
