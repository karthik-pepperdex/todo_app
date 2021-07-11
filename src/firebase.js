// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBWA6BeqzEwz2HII82WQoBU-2PxDA-K_Oc",
//     authDomain: "todo-app-d0d2e.firebaseapp.com",
//     projectId: "todo-app-d0d2e",
//     storageBucket: "todo-app-d0d2e.appspot.com",
//     messagingSenderId: "696493098074",
//     appId: "1:696493098074:web:34301712f82948849c4463",
//     measurementId: "G-X7RDR3L13R"
//   };

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEv9kB7O8p8tOhw6z6Af1fzDTrCo4yvBg",
  authDomain: "todo-app-8e3e2.firebaseapp.com",
  projectId: "todo-app-8e3e2",
  storageBucket: "todo-app-8e3e2.appspot.com",
  messagingSenderId: "411684318336",
  appId: "1:411684318336:web:23ead3801cf6066bb38a65",
  measurementId: "G-P9HMJKZXL8"
});

const db = firebaseApp.firestore();

export default db;