import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIY2A7deS_YA5HcoGiSZmXAhA8GwjkQUk",
  authDomain: "amaz-clone-fe.firebaseapp.com",
  databaseURL: "https://amaz-clone-fe.firebaseio.com",
  projectId: "amaz-clone-fe",
  storageBucket: "amaz-clone-fe.appspot.com",
  messagingSenderId: "725072293856",
  appId: "1:725072293856:web:bd0c88817dcc9dc4228585",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseDB = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();

export { firebaseDB, firebaseAuth };
