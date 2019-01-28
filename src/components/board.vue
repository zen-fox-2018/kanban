<template>
  <div id="e3" style="max-width: 250px; " class="grey lighten-3">
    <v-toolbar :color="color">
      <v-toolbar-title>{{boardname}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout align-space-between justify-center column fill-height v-for="task in tasks">
          <Task :title="task.title" :description="task.description" :status="task.status" :taskid="task.id" :boardname="boardname"/>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import Task from "@/components/task.vue";
import db from "@/firestore.js";

export default {
  name: "Board",
  props: ["color", "boardname"],
  components: {
    Task,
    db
  },
  data: function() {
    return {
      tasks: []
    }
  },
  created() {
    db
      .collection("Tasks")
      .onSnapshot(querySnapshot => {
        var arrTask = [];
          querySnapshot.forEach(doc => {
            arrTask.push({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              status: doc.data().status
            })
          })
        this.tasks = arrTask
      })
  }
};
</script>
