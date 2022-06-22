import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBwcDEvUskEw6NDbiIvRxKvK4qxsC89rTM",
    authDomain: "appfinancas-c9020.firebaseapp.com",
    databaseURL: "https://appfinancas-c9020-default-rtdb.firebaseio.com",
    projectId: "appfinancas-c9020",
    storageBucket: "appfinancas-c9020.appspot.com",
    messagingSenderId: "586941313237",
    appId: "1:586941313237:web:52d718ba430be3ff1bf25c"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.database();
const auth = firebase.auth();
const database = getDatabase(app);

export { db, auth, database };
export default firebase;