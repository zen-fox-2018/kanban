<template>
  <v-card style="padding:10px;" dark :color="color">
    <v-card-title><h1>{{title}}</h1></v-card-title>
    <v-divider></v-divider>
    <card :tasks="tasks" :status="title"></card>
  </v-card>
</template>

<script>
  import card from '../components/Card'

  export default {
    components: {
      card
    },
    data: () => ({
      
    }),

    props: ['color', 'title', 'tasks']
  }
</script>

<style>

</style>
