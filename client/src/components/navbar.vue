<template>
  <div>
    <v-toolbar color="orange" dark>
      <v-img
        src="https://myrealdomain.com/images/chou-tzuyu.png"
        style="max-width:40px;"
      ></v-img>
      <v-toolbar-title>Kanluv</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat @click="dialog = true">Touch Task</v-btn>
      </v-toolbar-items>
    </v-toolbar>

      <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">Touch Task</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-textarea label="Title" v-model="title" required></v-textarea>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Points" v-model="point" type="number" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Assigned to" v-model="assigned" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="addTask">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      dialog: false,
      title: '',
      point: '',
      assigned: ''
    }
  },
  methods: {
    addTask: async function () {
      try {
        if (!this.title || !this.point || !this.assigned) {
          swal('All field is required!', 'try again', 'error')
        } else {
          await db.collection('tasks').add({
            title: this.title,
            point: this.point,
            assigned: this.assigned,
            status: 'Back-Log'
          })
          this.dialog = false
          swal('Success create task!', 'success')
        }
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>
