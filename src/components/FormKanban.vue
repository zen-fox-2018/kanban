<template>
  <div>
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
  props: ['callTask'],
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
          this.title = ''
          this.description = ''
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
  },
  watch: {
    callTask(v) {
      console.log(v)
    }
  }
}
</script>

