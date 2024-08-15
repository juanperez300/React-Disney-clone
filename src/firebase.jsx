import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYQmK30l_tGM10c5gu7Qoav3L6qS7X0v4",
  authDomain: "react-disney-clone-5d6f8.firebaseapp.com",
  projectId: "react-disney-clone-5d6f8",
  storageBucket: "react-disney-clone-5d6f8.appspot.com",
  messagingSenderId: "1084306100820",
  appId: "1:1084306100820:web:bcb90b0c6d333f9ba413c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
