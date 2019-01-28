<template>
  <v-layout ma-4 mt-5 style="max-width:20vw">
    <v-flex>
      <v-card style="padding-bottom:5px">
        <v-card-title primary-title :class="tasks.color">
          <div>
            <h3 class="headline mb-0 white--text" >{{ tasks.status }}</h3>
          </div>
        </v-card-title>
        <v-card color="orange" class="white--text" style="margin:20px" v-for="(task, i) in tasks.tasks" :key="i">
          <v-card-title primary-title>
            <div>
              <div class="headline"><strong>{{ task.title }}</strong></div><br>
              <span>Point: {{ task.point }}</span><br>
              <span>Assigned to: {{ task.assigned }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-layout justify-space-between>
              <v-btn flat icon v-if="tasks.status !== 'Back-Log'" @click="back(task.id)">
                <v-icon color="blue" large>undo</v-icon>
              </v-btn>
              <v-btn flat icon @click="remove(task.id)">
                <v-icon color="red" large>delete</v-icon>
              </v-btn>
              <v-btn flat icon @click="next(task.id)" v-if="tasks.status !== 'Done'">
                <v-icon color="green" large>check_circle</v-icon>
              </v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'task-list',
  props: ['tasks'],
  data () {
    return {
      filtered: [],
      dict: ['Back-Log', 'To-Do', 'Doing', 'Done']
    }
  },
  methods: {
    remove: async function (id) {
      const answer = await swal('Are you sure want to delete?', {
        buttons: {
          no: {
            text: 'Gak mau!',
            value: false
          },
          yes: {
            text: 'Mau dong!',
            value: true
          }
        }
      })
      if (!answer) {
        swal('Oke deh gajadi apus', 'hehehehehe', 'error')
      } else {
        try {
          await db.collection('tasks').doc(id).delete()
          swal('Success delete!', 'task deleted', 'success')
        } catch (err) {
          console.error(err)
        }
      }
    },
    next: async function (id) {
      try {
        let index = this.dict.indexOf(this.tasks.status)
        await db.collection('tasks').doc(id).update({
          status: this.dict[index + 1]
        })
        swal(`Success moved to ${this.dict[index + 1]}`)
      } catch (err) {
        console.error(err)
      }
    },
    back: async function (id) {
      try {
        let index = this.dict.indexOf(this.tasks.status)
        await db.collection('tasks').doc(id).update({
          status: this.dict[index - 1]
        })
        swal(`Success moved to ${this.dict[index - 1]}`)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style>

</style>
