const firebase = require("firebase");
require("firebase/firestore");
require('dotenv').config()

var config = {
  apiKey: process.env.APIKEY,
  authDomain: "amazingkanban.firebaseapp.com",
  databaseURL: "https://amazingkanban.firebaseio.com",
  projectId: "amazingkanban",
  storageBucket: "amazingkanban.appspot.com",
  messagingSenderId: "450440621470"
};

firebase.initializeApp(config);

var db = firebase.firestore();

export default db