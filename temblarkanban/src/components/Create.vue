<template>
    <v-layout fill-height>
            <v-btn 
            flat
            @click="dialog = true" 
            color="brown"
            offset-x
            >
            New Task</v-btn>

        <v-dialog  hide-overlay v-model="dialog" fullscreen  offset-x>
            <v-card>
                <v-card-title>
                <span class="headline" color="amber">New Task</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>

                    <v-flex xs12>
                        <v-text-field label=" Task Title*" v-model="task.title" required></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                        <v-textarea  label="Task Description" v-model="task.description" required ></v-textarea>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field label="Task Point*" v-model="task.point" required></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field label="Assigned To*" v-model="task.assignedto" required></v-text-field>
                    </v-flex>

                    </v-layout>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="amber darken-1"  flat @click="createCard">Save</v-btn>
                <v-btn color="amber darken-1" flat @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>


</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      task: {
          title: '',
          description: '',
          point: '',
          assignedto: ''
      }
    }),
    methods: {
        createCard() {
            this.$db.collection('cards').add({
                status: 'Back Log',
                created_at: new Date,
                ...this.task
                })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                this.dialog = false
        }
    }
  }
</script>