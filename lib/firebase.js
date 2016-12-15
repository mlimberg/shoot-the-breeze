import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB_3sdyWauTuZ1hldIrwAYJArdmMyXjU98",
  authDomain: "shoot-the-breeze-293a7.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-293a7.firebaseio.com",
  storageBucket: "shoot-the-breeze-293a7.appspot.com",
  messagingSenderId: "354966544262"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('messages');
