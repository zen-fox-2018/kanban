import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firestore from './firebase'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000
})

Vue.config.productionTip = false
Vue.prototype.$firestore = firestore
Vue.prototype.$swal = Swal
Vue.prototype.$toast = Toast

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
