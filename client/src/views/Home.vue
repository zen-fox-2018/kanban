<template>
  <div>
    <Toolbar @add_task="addTask"></Toolbar>
    <v-container fluid grid-list-md>
      <KanbanBoard :add_task="addTask"></KanbanBoard>
      <AddTask :show_add_task="showAddTask" @hide_add_task="hideAddTask"></Addtask>
    </v-container>
  </div>
</template>
<script>
import Toolbar from "@/components/Toolbar.vue"
import KanbanBoard from "@/components/KanbanBoard.vue"
import AddTask from "@/components/AddTask.vue"

export default {
  data () {
    return {
      showAddTask: false
    }
  },
  components: {
    KanbanBoard,
    Toolbar,
    AddTask
  },
  methods: {
    addTask () {
      this.showAddTask = true
    },
    hideAddTask () {
      this.showAddTask = false
    }
  }
}
</script>