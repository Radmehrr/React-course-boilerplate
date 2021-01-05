import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2T5ZKCh3HKmLWYJ21nPZh1k-VI0UZ5ts",
  authDomain: "expensify-r.firebaseapp.com",
  databaseURL: "https://expensify-r-default-rtdb.firebaseio.com",
  projectId: "expensify-r",
  storageBucket: "expensify-r.appspot.com",
  messagingSenderId: "756825479859",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
