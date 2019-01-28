<template>
  <v-layout>
    <taskList :tasks="backlog" />
    <taskList :tasks="todo" />
    <taskList :tasks="doing" />
    <taskList :tasks="done" />
  </v-layout>
</template>

<script>
import taskList from '@/components/task-list'

export default {
  components: {
    taskList
  },
  data () {
    return {
      tasks: [],
      backlog: {
        tasks: [],
        status: 'Back-Log',
        color: 'red'
      },
      todo: {
        tasks: [],
        status: 'To-Do',
        color: 'blue'
      },
      doing: {
        tasks: [],
        status: 'Doing',
        color: 'cyan'
      },
      done: {
        tasks: [],
        status: 'Done',
        color: 'green'
      }
    }
  },
  methods: {
    setTask: function () {
      db.collection('tasks').onSnapshot( (doc) => {
        let task = doc.docs.map(function (e) {
          return {
            ...e.data(),
            id: e.id
          }
        })
        this.tasks = task
      })
    }
  },
  watch: {
    tasks: function (val) {
      this.backlog.tasks = []
      this.todo.tasks = []
      this.doing.tasks = []
      this.done.tasks = []
      val.forEach(e => {
        if (e.status === 'Back-Log') {
          this.backlog.tasks.push(e)
        } else if (e.status === 'To-Do') {
          this.todo.tasks.push(e)
        } else if (e.status === 'Doing') {
          this.doing.tasks.push(e)
        } else if (e.status === 'Done') {
          this.done.tasks.push(e)
        }
      });
    }
  },
  mounted () {
    this.setTask()
  }
}
</script>
