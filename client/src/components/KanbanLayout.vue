<template>
  <div class="kanbancard">
    <v-card v-if="task.name==='Back-Log'" color="orange">
    <v-card-text class="px-0">{{task.name}}</v-card-text>
    </v-card>
      <v-card v-else-if="task.name==='To-Do'" color="yellow">
    <v-card-text class="px-0">{{task.name}}</v-card-text>
    </v-card>
      <v-card v-else-if="task.name==='Doing'" color="blue">
    <v-card-text class="px-0">{{task.name}}</v-card-text>
    </v-card>
      <v-card v-else-if="task.name==='Done'" color="green">
    <v-card-text class="px-0">{{task.name}}</v-card-text>
    </v-card>
    <KanbanContent v-for="(taskEach, i) in task.tasks" :key="i"  :task="taskEach" :status="task.name"></KanbanContent>
  </div>
</template>

<script>
import KanbanContent from '@/components/KanbanContent.vue'
export default {
  data () {
    return {

    }
  },
  props: ['task'],
  components: {
    KanbanContent
  }
}
</script>

<style>

</style>
