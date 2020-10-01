import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsAuXRAq3CuaCkGEnmd6nMMVSNeQjl6ss",
  authDomain: "console-love.firebaseapp.com",
  databaseURL: "https://console-love.firebaseio.com",
  projectId: "console-love",
  storageBucket: "console-love.appspot.com",
  messagingSenderId: "407245183768",
  appId: "1:407245183768:web:f568f93d699ee1ed359c6d",
  measurementId: "G-Q91REVRZ6P",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;