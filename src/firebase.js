import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXl0j_ErgfVRyFb5LMH1VN_wTMHJVQQYw",
  authDomain: "twitter-clone-295d0.firebaseapp.com",
  projectId: "twitter-clone-295d0",
  storageBucket: "twitter-clone-295d0.appspot.com",
  messagingSenderId: "715923315275",
  appId: "1:715923315275:web:e1e047eaac69e225934bce",
  measurementId: "G-WV4P4T8MWF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
