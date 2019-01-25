<template>
  <div>
    <h3>New Task</h3>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Title" v-model="title">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <input type="Text" class="form-control" id="exampleInputPassword1" placeholder="Description" v-model="description">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {db} from '@/config.js'

export default {
  name: 'FormKanban',
  data() {
    return {
      title: '',
      description: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      db.collection("kanban").add({
        title: this.title,
        description: this.description,
        status: 'Back-Log'
      })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    },
    listenDb() {
      db
        .collection("kanban")
        .onSnapshot(({docs}) => {
          // let arr = docs.map(doc => doc.data())
          // this.$emit('tasks', arr)
          let arr = []
          docs.forEach(element => {
            arr.push({id: element.id, data: element.data()})
          });
          this.$emit('tasks', arr)
        });
    }
  },
  mounted() {
    this.listenDb()
  }
}
</script>

