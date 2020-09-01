import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCDG6xwG-mtvAm0GE4aQZrASiAd7nqVGM',
  authDomain: 'udemy-crwn-db-9158b.firebaseapp.com',
  databaseURL: 'https://udemy-crwn-db-9158b.firebaseio.com',
  projectId: 'udemy-crwn-db-9158b',
  storageBucket: 'udemy-crwn-db-9158b.appspot.com',
  messagingSenderId: '71071683802',
  appId: '1:71071683802:web:02e31c23fc99a8124d01e3',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
