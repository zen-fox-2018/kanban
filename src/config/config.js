const firebase = require('firebase')
require('firebase/firestore')

var config = require('./config.json')

firebase.initializeApp(config)
var db = firebase.firestore()

export default db
