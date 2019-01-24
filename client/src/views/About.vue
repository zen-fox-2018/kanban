<template>
  <div class="about">
    <navbar></navbar>
    <h1>This is an about page</h1>
    <b-container class="bv-example-row" >
      <b-row>
        <b-col>
      <taskbox :color="'danger'" :title="'Back-Log'" :list="backlog">
      </taskbox>
      </b-col>
       <b-col>
      <taskbox :color="'warning'" :title="'To-Do'" :list="todo"></taskbox>
      </b-col>
       <b-col>
      <taskbox :color="'primary'" :title="'Doing'" :list="doing"></taskbox>
      </b-col>
       <b-col>
      <taskbox :color="'success'" :title="'Done'" :list="done"></taskbox>
      </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import taskbox from '@/components/taskBox.vue'
import navbar from '@/components/Navbar.vue'
import db from "@/scripts/config.js"
export default {
  name: 'About',
  components: {
    taskbox,
    navbar
  },
  data() {
    return {
      backlog: [],
      done: [],
      todo: [],
      doing: []
    }
  },
  methods: {
    getTask () {
      db
        .collection("Tasks")
        .onSnapshot((querySnapshot) => {
          this.backlog=[]
          this.done=[]
          this.todo=[]
          this.doing=[]
          querySnapshot.forEach((doc) => {
            console.log(doc.data())
            if (doc.data().status === 1) {
              this.backlog.push({id: doc.id, ...doc.data()})
            } else if (doc.data().status === 4) {
              this.done.push({id: doc.id, ...doc.data()})
            } else if (doc.data().status === 2) {
              this.todo.push({id: doc.id, ...doc.data()})
            } else if (doc.data().status === 3) {
              this.doing.push({id: doc.id, ...doc.data()})
            }
          });
      });
      
          // console.log(this.done)
    }

  },
  mounted () {
    this.getTask()
  }

}
</script>
