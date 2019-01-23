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
  apiKey: 'AIzaSyCzj5rbDUztKZ0pyugLDAlGu58hDKNyVO8',
  authDomain: 'vanban-kanban.firebaseapp.com',
  databaseURL: 'https://vanban-kanban.firebaseio.com',
  projectId: 'vanban-kanban',
  storageBucket: 'vanban-kanban.appspot.com',
  messagingSenderId: '141788233213'
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
