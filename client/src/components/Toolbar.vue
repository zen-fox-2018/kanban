<template>
      <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Kang</span>
        <span class="font-weight-light">BAN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        @click="addTask"
      >
        <span class="mr-2">Add Task</span>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    addTask () {
      this.$emit('add_task')
    }
  }
}
</script>
