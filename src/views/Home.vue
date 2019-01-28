<template>
  <div class="home container">
    <a href="" v-if="!newData" @click.prevent="showForm">New Task</a>
    <a href="" v-else @click.prevent="showForm">Close Form</a>
    <form-kanban v-if="newData" :callTask="newData" />
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
import {db} from '@/config.js'
import BoardKanban from '@/components/BoardKanban.vue'
import FormKanban from '@/components/FormKanban.vue'

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
        style: 'background-color: orange;',
        title: 'Back-Log',
        tasks: '',
        dataButton: [
          {status: 'To-Do', style: 'background-color: yellow;'}, 
          {status: 'Delete', style: 'background-color: red;'}]
      },
      todo: {
        style: 'background-color: yellow;',
        title: 'To-Do',
        tasks: '',
        dataButton: [
          {status: 'Back-Log', style: 'background-color: orange;'},
          {status: 'Doing', style: 'background-color: deepskyblue;'},
          {status: 'Delete', style: 'background-color: red;'}]
      },
      doing: {
        style: 'background-color: deepskyblue;',
        title: 'Doing',
        tasks: '',
        dataButton: [
          {status: 'To-Do', style: 'background-color: yellow;'},
          {status: 'Done', style: 'background-color: lime;'}, 
          {status: 'Delete', style: 'background-color: red;'}]
      },
      done: {
        style: 'background-color: lime;',
        title: 'Done',
        tasks: '',
        dataButton: [
          {status: 'Doing', style: 'background-color: deepskyblue;'}, 
          {status: 'Delete', style: 'background-color: red;'}]
      },
      newData: false,
      tasks: [],
      callTask: false
    }
  },
  methods: {
    showForm() {
      let status = this.newData ? false : true
      this.newData = status
    },
    getTasks(tasks) {
      this.backLog.tasks = tasks.filter(task => task.data.status == 'Back-Log')
      this.todo.tasks = tasks.filter(task => task.data.status == 'To-Do')
      this.doing.tasks = tasks.filter(task => task.data.status == 'Doing')
      this.done.tasks = tasks.filter(task => task.data.status == 'Done')
    },
    callTaskMethod() {
      this.callTask = true
    }
  },
  created() {
    db
      .collection("kanban")
      .onSnapshot(({docs}) => {
        // let arr = docs.map(doc => doc.data())
        // this.$emit('tasks', arr)
        let arr = []
        docs.forEach(element => {
          arr.push({id: element.id, data: element.data()})
        });
        this.getTasks(arr)
      });
  }
}
</script>


