import Firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
  apiKey: 'AIzaSyBHDPmmT2G1dlQgZGqk0bUpE4eMtBY7tHw',
  authDomain: 'kangban-bf523.firebaseapp.com',
  databaseURL: 'https://kangban-bf523.firebaseio.com',
  projectId: 'kangban-bf523',
  storageBucket: 'kangban-bf523.appspot.com',
  messagingSenderId: '237871984339'
}
const firebaseApp = Firebase.initializeApp(config)
const firestore = firebaseApp.firestore()

export default firestore
