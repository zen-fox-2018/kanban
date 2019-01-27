<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand">emejingKanban</a>
        <form class="form-inline">
          <button class="btn btn-outline-success my-2 my-sm-0"
          data-toggle="modal" data-target="#AddCard">New Task</button>
        </form>
        <!-- Modal -->
        <div class="modal fade" id="AddCard" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">New Task</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label>Title</label>
                  <input v-model="input.title" class="form-control">
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea v-model="input.description" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <label>Point</label>
                  <input v-model="input.point" class="form-control">
                </div>
                <div class="form-group">
                  <label>Assigned To</label>
                  <input v-model="input.assigned_to" class="form-control">
                </div>
              </div>
              <div class="modal-footer">
                <button @click="newTask" type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="plek">
      <Card :payload="backlog_payload" :title="`BackLog`" @next="nextTask" @previous="previousTask" @hapusini="deleteTask"></Card>
      <Card :payload="todo_payload" :title="`To-Do`" @next="nextTask" @previous="previousTask" @hapusini="deleteTask"></Card>
      <Card :payload="doing_payload" :title="`Doing`" @next="nextTask" @previous="previousTask" @hapusini="deleteTask"></Card>
      <Card :payload="done_payload" :title="`Done`" @next="nextTask" @previous="previousTask" @hapusini="deleteTask"></Card>
    </div>
  </div>
</template>
<script>

import config from '@/assets/config.js';
// import { functions } from 'fire          sbase';
import Card from '@/components/Card.vue';
const firebase = require('firebase');
firebase.initializeApp(config);
const firestore = firebase.firestore();

export default {
  name: 'App',
  components: {
    Card,
  },
  data() {
    return {
      input: {
        title: '',
        description: '',
        point: 0,
        assigned_to: '',
      },
      card_payload: [],
      backlog_payload: [],
      todo_payload: [],
      doing_payload: [],
      done_payload: [],
    }; 
  },
  methods: {
    newTask() {
      firestore.collection('cards').add({
        title: this.input.title,
        description: this.input.description,
        point: Number(this.input.point),
        assigned_to: this.input.assigned_to,
        status: 'BackLog',
      })
      .then((ref) => {
        this.input = { title: '', description: '', point: 0, assigned_to:'' };
      })
      .catch((err) => {
        console.log(err);
      })  
    },
    getAllCard() {
      firestore.collection('cards').onSnapshot(ss => {
        let newData = ss.docs.map(e => {
          return {
            ...e.data(),
            id: e.id
          }
        })
        this.card_payload = newData;
        console.log(this.card_payload, 'ini all value dari card_payload app.vue');
        let backlog_payload_temp = [];
        let todo_payload_temp = [];
        let doing_payload_temp = [];
        let done_payload_temp = [];
        newData.forEach(eachPayload => {
          console.log(eachPayload, 'ini each payload')
          if (eachPayload.status == 'BackLog') {
            backlog_payload_temp.push(eachPayload);
          } else if (eachPayload.status == 'ToDo') {
            todo_payload_temp.push(eachPayload);
          } else if (eachPayload.status == 'Doing') {
            doing_payload_temp.push(eachPayload);
          } else if (eachPayload.status == 'Done') {
            done_payload_temp.push(eachPayload);
          }
        });
        this.backlog_payload = backlog_payload_temp;
        this.todo_payload = todo_payload_temp;
        this.doing_payload = doing_payload_temp;
        this.done_payload = done_payload_temp;
        console.log(this.backlog_payload, 'ini backlog_payload dari app vue')
        console.log(this.todo_payload, 'ini todo payload dari app vue')
      }, err => {
        console.log(`Encountered error: ${err}`);
      });
    },
    nextTask(task) {
      if (task.status == 'BackLog') {
        firestore.collection('cards').doc(task.id).update({status: 'ToDo'});
      } 
      else if (task.status == 'ToDo') {
        firestore.collection('cards').doc(task.id).update({status: 'Doing'});
      }
      else if (task.status == 'Doing') {
        firestore.collection('cards').doc(task.id).update({status: 'Done'});
      }
    },
    previousTask(task) {
      console.log('masuk previos task nihh')
      console.log(task.status)
      if (task.status == 'ToDo') {
        firestore.collection('cards').doc(task.id).update({status: 'BackLog'});
      } 
      else if (task.status == 'Doing') {
        firestore.collection('cards').doc(task.id).update({status: 'ToDo'});
      }
      else if (task.status == 'Done') {
        firestore.collection('cards').doc(task.id).update({status: 'Doing'});
      }
    },
    deleteTask(task) {
      firestore.collection('cards').doc(task.id).delete();
    }
  },
  mounted() {
    this.getAllCard();
  },
  created() {
    this.getAllCard();
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.plek {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>
