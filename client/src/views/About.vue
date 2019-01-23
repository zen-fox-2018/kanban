<template>
  <div class="about">
    <navbar></navbar>
    <h1>This is an about page</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
      <taskbox style='color:red'></taskbox>
      </b-col>
       <b-col>
      <taskbox></taskbox>
      </b-col>
       <b-col>
      <taskbox></taskbox>
      </b-col>
       <b-col>
      <taskbox></taskbox>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import taskbox from '@/components/taskBox.vue'
import navbar from '@/components/Navbar.vue'
export default {
  name: 'About',
  components: {
    taskbox,
    navbar
  }

}
</script>
