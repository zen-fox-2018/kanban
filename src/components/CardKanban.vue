<template>
<div>
  <div v-for="task in payload.tasks" :key="task.id">
    <div class="card mt-3">
      <div class="card-header">
        <h1> {{task.data.title}} </h1>
        <!-- <h6> {{ dataKanban.title }} </h6> -->
      </div>
      <div class="card-body">
        <p> {{ task.data.description }} </p>
      </div>
      <div class="card-footer">
        <div v-for="button in payload.dataButton" :key="button.id">
          <button class="btn btn-outline" :style="button.style" @click="updateTask(task, button.status)">
            {{button.status}}
          </button><hr>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {db} from '@/config.js'

export default {
  name: 'CardKanban',
  props: ['payload'],
  data() {
    return {

    }
  },
  methods: {
    removeTask(task) {

    },
    updateTask(task, status) {
      if (status === 'Delete') {
        db.collection("kanban").doc(`${task.id}`)
          .delete()
          .then(function() {
              console.log("Document successfully deleted!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
      } else {
        task.data.status = status
        db.collection("kanban").doc(`${task.id}`)
          .update(task.data)
          .then(function() {
              console.log("Document successfully updated!");
          })
          .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
      }
    }
  }
}
</script>

