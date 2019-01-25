<template>
  <v-card>
      <v-card-title>
          <h2> Add New Task.. </h2>
      </v-card-title>
      <v-container>
        <form @submit.prevent="submit">
            <v-text-field
            v-model="title"
            label="Title"
            required
            ></v-text-field>

            <v-textarea
            v-model="description"
            label="Description"
            required
            ></v-textarea>

            <v-text-field
            v-model="point"
            type="number"
            label="Point"
            required
            ></v-text-field>

            <v-text-field
            v-model="assignedto"
            label="Assigned to"
            required
            ></v-text-field>

            <v-btn type="submit">Submit</v-btn>
            <v-btn @click="clear">Clear</v-btn>
        </form>
      </v-container>
  </v-card>
</template>

<script>

  export default {
    data: () => ({
      title: '',
      description: '',
      point: '',
      assignedto: '',
    }),

    methods: {
      submit () {
        let obj = {
          title: this.title,
          description: this.description,
          point: this.point,
          assignedto: this.assignedto,
          status: "Back-Log"
        }
        this.$emit('close_modal')
        this.$db.collection('tasks')
          .add(obj)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          })
      },
      clear () {
        this.title = ''
        this.description = ''
        this.point = ''
        this.assignedto = ''
      }
    }
  }
</script>
