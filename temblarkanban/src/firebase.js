import Firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBB5JCKcg2Yv7uOCKh662glU8mZdsuGUHk",
    authDomain: "temblarkanban.firebaseapp.com",
    databaseURL: "https://temblarkanban.firebaseio.com",
    projectId: "temblarkanban",
    storageBucket: "temblarkanban.appspot.com",
    messagingSenderId: "556878419322"
  }
  const firebaseApp = Firebase.initializeApp(config)
  const firestore = firebaseApp.firestore()

export default firestore