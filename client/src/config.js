import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDfdFmYT1ICeFFkQhf98URAQxSsg4_wzIE",
  authDomain: "kanbanzai95.firebaseapp.com",
  databaseURL: "https://kanbanzai95.firebaseio.com",
  projectId: "kanbanzai95",
  storageBucket: "kanbanzai95.appspot.com",
  messagingSenderId: "182395300073"
};
const db = firebase.initializeApp(config).firestore();

export default db