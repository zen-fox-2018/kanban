import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#00bcd4',
      secondary: '#3f51b5',
      accent: '#ff5722',
      error: '#e91e63',
      warning:'#ffc107',
      info: '#03a9f4',
      success: '#4caf50'
  } 
})
