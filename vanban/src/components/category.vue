<template>
     <b-card :header="status"
          header-text-variant="white"
          header-tag="header"
          :header-bg-variant="cardCol"
          style="width: 21rem;"
          class="mx-2"
    >
    <cardTask v-for="task in tasks" :detail="task" :key="task.id"/>
  </b-card>
</template>

<script>
import cardTask from './task.vue'

export default {
    name: 'category',
    props: {
        cardCol: String,
        status: String,
        tasks: Array
    },
    components: {
        cardTask,
    }
}
</script>

<style>

</style>
