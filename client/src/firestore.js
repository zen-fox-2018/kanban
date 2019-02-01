import firebase from "firebase"
import 'firebase//firestore'

var config = {
    apiKey: "AIzaSyBMET7T2bQqIwj3kZydenyDGJwvHw03228",
    authDomain: "o-kanban.firebaseapp.com",
    databaseURL: "https://o-kanban.firebaseio.com",
    projectId: "o-kanban",
    storageBucket: "o-kanban.appspot.com",
    messagingSenderId: "1049733390612"
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore()

export default db
