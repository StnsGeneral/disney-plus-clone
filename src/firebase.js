import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDZeU42mM2OjoxaKrIK-i-jeuom2blBD2o',
  authDomain: 'disneyplus-clone-73168.firebaseapp.com',
  projectId: 'disneyplus-clone-73168',
  storageBucket: 'disneyplus-clone-73168.appspot.com',
  messagingSenderId: '851564960260',
  appId: '1:851564960260:web:0213e3e1b648a1e92cb351',
  measurementId: 'G-Q88V085X74',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
