<template>
  <div class="home">
    <Myheader @show-form="modalAddTask = true"/>
    <hr>

    <add-task @closeAddTask="modalAddTask = false" v-show="modalAddTask" />
    <!-- <b-card-group columns style="column-count: 4;" class="mx-4"> -->
      <div class="row align-items-start mx-2">
      <category :cardCol="'danger'" :status="'Back-Log'" :tasks="backLog" />
      <category :cardCol="'warning'" :status="'To-Do'" :tasks="todo" />
      <category :cardCol="'primary'" :status="'Doing'" :tasks="doing" />
      <category :cardCol="'success'" :status="'Done'" :tasks="done"/>

      </div>
    <!-- </b-card-group> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Myheader from '@/components/header.vue'
import task from '@/components/task.vue'
import category from '@/components/category.vue'
import addTask from '@/components/addTask.vue'
import db from '@/scripts/config.js'

export default {
  name: 'home',
  components: {
    Myheader,
    task,
    category,
    addTask
  },
  data () {
    return {
      modalAddTask: false,
      backLog: [],
      todo: [],
      doing: [],
      done: [],
    }
  },
  methods: {
    fetch () {
      db.collection("tasks")
        .onSnapshot((querySnapshot) => {
          this.backLog = []
          this.todo = []
          this.doing = []
          this.done = []
            querySnapshot.forEach((doc) => {

                if (doc.data().status == 1) {
                  this.backLog.unshift({id: doc.id, ...doc.data()})
                } else if (doc.data().status == 2) {
                  this.todo.unshift({id: doc.id, ...doc.data()})
                } else if (doc.data().status == 3) {
                  this.doing.unshift({id: doc.id, ...doc.data()})
                } else if (doc.data().status == 4) {
                  this.done.unshift({id: doc.id, ...doc.data()})
                }
            })
        })
    }
  },
  mounted () {
    this.fetch()
  }
}
</script>
