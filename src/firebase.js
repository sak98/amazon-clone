import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIar5hHX2-LRiY7FpaBKbD7fCUXsbP9wQ",
  authDomain: "clone-9930e.firebaseapp.com",
  databaseURL: "https://clone-9930e.firebaseio.com",
  projectId: "clone-9930e",
  storageBucket: "clone-9930e.appspot.com",
  messagingSenderId: "464780972708",
  appId: "1:464780972708:web:26b281a237f882e8d08c31",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
