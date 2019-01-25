/* eslint-disable */
const firebase = require("firebase");
// const axios = require('axios');

require("firebase/firestore");  
var config = {
  apiKey: "AIzaSyAg_sGKWQdrh44bqoImHOZjufbZYjdZcZI",
  authDomain: "kanban2-faishal.firebaseapp.com",
  databaseURL: "https://kanban2-faishal.firebaseio.com",
  projectId: "kanban2-faishal",
  storageBucket: "kanban2-faishal.appspot.com",
  messagingSenderId: "38336938865"
};
firebase.initializeApp(config);

var db = firebase.firestore();

// const server = axios.create({
//   baseURL: 'http://localhost:3000/'
// })
export {db, server}