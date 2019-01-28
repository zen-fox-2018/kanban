<template>
  <div id="e3" class="grey lighten-3" v-if="boardname == status">
    <v-toolbar color="grey">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row justify-center wrap>
          <div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
              <v-btn slot="activator" color="red lighten-2" dark>Details</v-btn>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Details for task "{{title}}"</v-card-title>
                <v-card-text>description: {{description}}</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click="dialog = false">Cancel</v-btn>
                    <v-btn color="green darken-1" flat @click="deleteTask">Delete</v-btn>
                    <v-btn color="green darken-1" flat @click="previousBoard" v-if="boardname=='To-Do'">Back Log</v-btn>
                    <v-btn color="green darken-1" flat @click="previousBoard" v-if="boardname=='Doing'">To-Do</v-btn>
                    <v-btn color="green darken-1" flat @click="previousBoard" v-if="boardname=='Done'">Doing</v-btn>
                    <v-btn color="green darken-1" flat @click="nextBoard" v-if="boardname=='Back Log'">To-Do</v-btn>
                    <v-btn color="green darken-1" flat @click="nextBoard" v-if="boardname=='To-Do'">Doing</v-btn>
                    <v-btn color="green darken-1" flat @click="nextBoard" v-if="boardname=='Doing'">Done</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import db from "@/firestore.js";

export default {
  name: "Task",
  props: ["title", "description", "status", "boardname", "taskid"],
  data() {
    return {
      id: this.taskid,
      dialog: false
    };
  },
  methods: {
    deleteTask() {
      this.dialog = false;
      db.collection("Tasks")
        .doc(this.id)
        .delete();
    },
    nextBoard() {
      this.dialog = false;
      var nextStatus = "To-Do";

      if (this.status == "To-Do") {
        nextStatus = "Doing";
      } else if (this.status == "Doing") {
        nextStatus = "Done";
      }

      db.collection("Tasks")
        .doc(this.id)
        .set({ status: nextStatus }, { merge: true });
    },
    previousBoard(){
      var previousStatus = "Doing";
      this.dialog = false;

      if (this.status == "Doing") {
        previousStatus = "To-Do";
      } else if (this.status == "To-Do") {
        previousStatus = "Back Log";
      }

      db.collection("Tasks")
        .doc(this.id)
        .set({ status: previousStatus }, { merge: true });
    }
  }
};
</script>
