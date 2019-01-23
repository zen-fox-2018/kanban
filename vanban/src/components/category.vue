<template>
     <b-card :header="status"
          header-text-variant="white"
          header-tag="header"
          :header-bg-variant="cardCol"
          style="max-width: 20rem;"
    >
    <task />
  </b-card>
</template>

<script>
import task from './task.vue'

export default {
    name: 'category',
    props: {
        cardCol: String,
        status: String
    },
    components: {
        task,
    }
}
</script>

<style>

</style>
