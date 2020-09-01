import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuTrjIp8G39I6XeOTun8Wx2jvPWzjxHfQ",
  authDomain: "ims-ghaziabad-voting-2020.firebaseapp.com",
  databaseURL: "https://ims-ghaziabad-voting-2020.firebaseio.com",
  projectId: "ims-ghaziabad-voting-2020",
  storageBucket: "ims-ghaziabad-voting-2020.appspot.com",
  messagingSenderId: "457194192611",
  appId: "1:457194192611:web:3422f42b7f7d7049788fd6",
  measurementId: "G-QGBGCYSGYH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
