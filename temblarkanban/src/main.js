import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firestore from './firebase'

Vue.config.productionTip = false
Vue.prototype.$db = firestore

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
