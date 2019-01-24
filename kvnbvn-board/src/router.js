import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})


// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
