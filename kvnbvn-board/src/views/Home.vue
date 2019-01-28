<template>
  <div class="home">
    <hr>
    <h1>KVNBVNBRD</h1>
    <hr>
    <div class="button">
      <button @click="showModal" style="border-radius:10px;">Create Task</button>
    </div>
    <!-- Create Task Modal -->
    <div>
      <b-modal ref="myModalRef" hide-footer title="Create New Task">
        <div class="d-block text-center">
            <div class="form-group">
              <input v-model="title" type="text" class="form-control" id="title" placeholder="Title">
            </div>
            <div class="form-group">
              <input v-model="description" type="text" class="form-control" id="desc" placeholder="Description">
            </div>
            <div class="form-group">
              <input v-model="assignTo" type="text" class="form-control" id="assignTo" placeholder="Assign To">
            </div>
        </div>
        <b-btn class="mt-3" variant="outline-dark" block @click="createTask">Add Task</b-btn>
      </b-modal>
    </div>
    <!-- Create Task Modal -->

    <b-container class="bv-example-row">
      <b-row>
        <b-col><Board :lists="backLog" :cardColor="'light'" header="Back-Log"></Board></b-col>
        <b-col><Board :lists="todo" :cardColor="'warning'" header="To-Do"></Board></b-col>
        <b-col><Board :lists="doing" :cardColor="'info'" header="Doing"></Board></b-col>
        <b-col><Board :lists="done" :cardColor="'success'" header="Done"></Board></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Board from '@/components/Board.vue'
// import db from '@/scripts/config.js'

export default {
  name: 'home',
  components: {
    Board
  },
  data () {
    return {
      backLog: [],
      todo: [],
      doing: [],
      done: [],
      title: '',
      description: '',
      assignTo: '',
      status: 1
    }
  },
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    createTask () {
      db.collection("tasks").add({
          title: this.title,
          description: this.description,
          assignTo: this.assignTo,
          status: this.status
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      this.$refs.myModalRef.hide()
    },
    fetch() {
      db
        .collection("tasks")
        .onSnapshot((querySnapshot)=> {
            this.backLog = []
            this.todo = []
            this.doing = []
            this.done = []
          querySnapshot.forEach((doc) => {
            console.log(doc.data() ,'=======')
            if(doc.data().status === 1) {
              this.backLog.unshift({id: doc.id, ...doc.data() }) 
            } else if (doc.data().status === 2) {
              this.todo.unshift({id: doc.id, ...doc.data() }) 
            } else if (doc.data().status === 3) {
              this.doing.unshift({id: doc.id, ...doc.data() }) 
            } else if (doc.data().status === 4) {
              this.done.unshift({id: doc.id, ...doc.data() }) 
            }
          })
      });
      console.log(this.backLog, '===== backlog')
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style>
  .button {
    margin-top: 5px;
    margin-bottom: 10px;
    
  }
  button {
    width: 130px;
    height: 50px;
    border: 2px solid white;
    color: white;
    background: rgb(68, 68, 68);
    font-size: 30px;
    font-weight: 700
  }
</style>

