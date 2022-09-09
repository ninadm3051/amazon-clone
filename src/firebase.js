import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBUwAud9Mdpddkl4VZTXut7Uzx9Yz-DE",
  authDomain: "clone-80926.firebaseapp.com",
  projectId: "clone-80926",
  storageBucket: "clone-80926.appspot.com",
  messagingSenderId: "543280950440",
  appId: "1:543280950440:web:620bc0e5058f89bdbb669d",
  measurementId: "G-VSMEM1NL49"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
