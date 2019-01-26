<template>
  <v-app>
    <template>
      <v-toolbar color="info" dark>
        <h1>Amazing Kanban</h1>
        <v-spacer></v-spacer>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-btn slot="activator" flat>Create Task</v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">Create New Task</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field v-model="title" label="Title*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="description" label="Description*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="assigned" label="Assigned to*" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="createNewTask">Save</v-btn>
                <!-- sampai sini -->
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
        <v-toolbar-items>
        </v-toolbar-items>
      </v-toolbar>
    </template>
    <router-view></router-view>
  </v-app>
</template>

<script>
import db from './db.js'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      dialog: '',
      title: '',
      description: '',
      assigned: ''
    }
  },
  methods: {
    createNewTask() {
      db.collection("tasks").add({
            title: this.title,
            description: this.description,
            for: this.assigned,
            status: "Back-Log"
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
            this.dialog = false
            this.title = ''
            this.description = ''
            this.assigned = ''
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
  }
}
</script>
