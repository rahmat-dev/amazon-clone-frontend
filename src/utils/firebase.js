import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZ5jjdOHTudI0dgs2IRMSgO_CHPzFBfAY",
  authDomain: "amat-zone.firebaseapp.com",
  databaseURL: "https://amat-zone.firebaseio.com",
  projectId: "amat-zone",
  storageBucket: "amat-zone.appspot.com",
  messagingSenderId: "905631619466",
  appId: "1:905631619466:web:272beeee8bdf49b89e5073",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseDB = firebaseApp.firestore();
const firebaseAuth = firebaseApp.auth();

export { firebaseDB, firebaseAuth };
