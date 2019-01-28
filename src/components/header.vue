<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href>KANBAN</a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-btn slot="activator" color="primary" dark>+ Add Task</v-btn>
            <addTask @close-dialog="closeDialog()" @add-task="createTask($event)"/>
          </v-dialog>
        </v-layout>
      </div>
    </div>
  </nav>
</template>

<script>
import db from "../firestore.js";
import addTask from "@/components/addTask.vue";

export default {
  name: "Header",
  data: () => ({
    dialog: false
  }),
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    createTask(task) {
      this.closeDialog();
      
      let objTask = {
        title: task.title,
        description: task.description,
        status: "Back Log"
      }

      db.collection("Tasks")
        .add(objTask)
        .then((docRef) =>{
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    }
  },
  components: {
    addTask
  }
};
</script>
