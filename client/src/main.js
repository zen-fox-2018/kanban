import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyDn7nCyfHSz_i5n5adO_E0g9DHS6LVlGC4',
  authDomain: 'funban-85ae6.firebaseapp.com',
  databaseURL: 'https://funban-85ae6.firebaseio.com',
  projectId: 'funban-85ae6',
  storageBucket: 'funban-85ae6.appspot.com',
  messagingSenderId: '1042800074702'
}
firebase.initializeApp(config)
var db = firebase.firestore()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

