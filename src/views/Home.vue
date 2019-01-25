<template>
  <div class="home container">
    <a href="" @click="showForm">New Task</a>
    <form-kanban @tasks="getTasks" />
    <div class="row">
      <div class="col-3">
        <board-kanban :payload="backLog" />
      </div>
      <div class="col-3">
        <board-kanban :payload="todo" />
      </div>
      <div class="col-3">
        <board-kanban :payload="doing" />
      </div>
      <div class="col-3">
        <board-kanban :payload="done" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BoardKanban from '@/components/BoardKanban.vue'
import FormKanban from '@/components/FormKanban.vue'
// import CardKanban from '@/components/CardKanban.vue'

export default {
  name: 'home',
  components: {
    BoardKanban,
    FormKanban
    // CardKanban
  },
  data() {
    return {
      backLog: {
        style: 'background-color: red;',
        title: 'Back-Log',
        tasks: '',
        dataButton: ['To-Do', 'Delete']
      },
      todo: {
        style: 'background-color: yellow;',
        title: 'To-Do',
        tasks: '',
        dataButton: ['Back-Log', 'Doing', 'Delete']
      },
      doing: {
        style: 'background-color: deepskyblue;',
        title: 'Doing',
        tasks: '',
        dataButton: ['To-Do', 'Done', 'Delete']
      },
      done: {
        style: 'background-color: lime;',
        title: 'Done',
        tasks: '',
        dataButton: ['Doing', 'Delete']
      },
      newData: false,
      tasks: []
    }
  },
  methods: {
    showForm() {
      this.newData ? false : true
    },
    getTasks(tasks) {
      this.backLog.tasks = tasks.filter(task => task.data.status == 'Back-Log')
      this.todo.tasks = tasks.filter(task => task.data.status == 'To-Do')
      this.doing.tasks = tasks.filter(task => task.data.status == 'Doing')
      this.done.tasks = tasks.filter(task => task.data.status == 'Done')
    }
  }
}
</script>


