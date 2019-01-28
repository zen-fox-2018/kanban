<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-btn slot="activator" color="primary" dark>Add Task</v-btn>
      <v-card dark>
        <v-card-title>
          <span class="headline">New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="*Input Here!!" required v-model="task"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="dialog = false">Close</v-btn>
          <v-btn color="grey" v-on:click.prevent="addTask" @click.prevent="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import db from '../config.js'
export default {
  data () {
    return {
      task: '',
      dialog: false,
      taskId: ''
    }
  },
  mounted () {
    this.modal()
  },
  methods: {
    addTask () {
      db.collection('tasks').add({
        title: this.task,
        status: 'Back-Log'
      })
      .then(ref => {
        this.task = ''
        this.taskId = ref.id
      })
      .catch(err => {
        console.log(err)
      })
    },
     modal () {
      if(!this.dialog) {
        this.dialog = true
      } else {
        this.dialog = false
      }
      return this.dialog
    }
  }
}
</script>

<style>

</style>
