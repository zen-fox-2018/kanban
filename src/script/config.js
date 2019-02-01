const firebase = require('firebase')
// Required for side-effects
require('firebase/firestore')

var config = require('./config.json')

firebase.initializeApp(config)
var db = firebase.firestore()

export default db
