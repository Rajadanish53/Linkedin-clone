import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAYG267ZKUiHb3F1comRO2WgnznS52hHVk",
    authDomain: "linkedin-clone-md.firebaseapp.com",
    projectId: "linkedin-clone-md",
    storageBucket: "linkedin-clone-md.appspot.com",
    messagingSenderId: "101052078185",
    appId: "1:101052078185:web:42e49b3b37d06f4bb92af8",
    measurementId: "G-0Y1RZL81Y1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};