import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4MZIxt3gBfztQEx2J71kObyXsFtcjTJM",
  authDomain: "todo-app-3bea4.firebaseapp.com",
  databaseURL: "https://todo-app-3bea4.firebaseio.com",
  projectId: "todo-app-3bea4",
  storageBucket: "todo-app-3bea4.appspot.com",
  messagingSenderId: "409651753415",
  appId: "1:409651753415:web:6ad43fa6ade3647419e9e2"
};

firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();

export { firebase, googleAuthProvider, database as default };
