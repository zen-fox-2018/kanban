<template>
  <div id="app">
    <Navbar> </Navbar>
    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
