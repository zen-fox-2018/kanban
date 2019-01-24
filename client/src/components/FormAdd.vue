<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" color="primary" dark>Add task</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Add Task Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="title" label="title*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="description" label="Description*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="points" label="Points" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="assignedTo" label="Assigned to*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat v-on:click.prevent="addTask()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  methods: {
    addTask() {
      console.log(this.length);
      
      this.dialog = false
      console.log(this.title);
      db.collection("backlog")
        .doc()
        .set({
          title: this.title,
          desc: this.description,
          points: this.points,
          assignedTo: this.assignedTo,
          created: new Date()
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>