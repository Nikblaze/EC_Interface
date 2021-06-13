import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCERgYobZmlXXWuq0d4dzqphWbLAPQWBig",
  authDomain: "westbengaldata2021.firebaseapp.com",
  databaseURL: "https://westbengaldata2021-default-rtdb.firebaseio.com",
  projectId: "westbengaldata2021",
  storageBucket: "westbengaldata2021.appspot.com",
  messagingSenderId: "283452415757",
  appId: "1:283452415757:web:8fadc077bf0f95a83d9a44",
  measurementId: "G-DZQ7WKTTQV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { database, authentication, provider };
