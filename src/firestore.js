require('dotenv').config()
import * as firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: process.env.firestore_apiKey,
  authDomain: process.env.firestore_authDomain,
  databaseURL: process.env.firestore_databaseURL,
  projectId: "kanban-cadb9",
  storageBucket: process.env.firestore_storageBucket,
  messagingSenderId: process.env.firestore_messagingSenderId
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
