import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB0q4llc6jb8c7i0XYg7KUw9fYHYwuG_XI",
    authDomain: "kukri-01.firebaseapp.com",
    databaseURL: "https://kukri-01.firebaseio.com",
    projectId: "kukri-01",
    storageBucket: "kukri-01.appspot.com",
    messagingSenderId: "364901593920",
    appId: "1:364901593920:web:1084a21b614d3f79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase

