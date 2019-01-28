import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwCAzWWQOHsXxVuTVXUO2M1Vasg4aJGpM",
    authDomain: "kanban-ce69d.firebaseapp.com",
    databaseURL: "https://kanban-ce69d.firebaseio.com",
    projectId: "kanban-ce69d",
    storageBucket: "kanban-ce69d.appspot.com",
    messagingSenderId: "867250725719"
  };

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp