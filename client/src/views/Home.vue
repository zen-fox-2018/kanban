<template>
  <div class="home">
    <v-container grid-list-md text-xs-center align-content-space-between true>
        <AddTask></AddTask>
        <v-layout row wrap>
        <v-flex v-for="(task, i) in tasks" :key="i" xs3 align-content-space-between true>
        <KanbanLayout :task="task"></KanbanLayout>
        <v-card dark color="secondary">
          
        <v-card-text class="px-0">{{task.status}}</v-card-text>
        </v-card>
      </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import AddTask from '@/components/AddTask.vue'
import db from '../config.js'
import KanbanLayout from '@/components/KanbanLayout.vue'

export default {
  name: 'home',
  data () {
    return {
      tasks: []
    }
  },
  components: {
    AddTask,
    KanbanLayout
  },
  mounted () {
    this.getTasks()
  },
  methods: {
    getTasks () {
      db.collection("tasks")
      .onSnapshot((querySnapshot) => {
        const listTask = [
          {
            name: 'Back-Log',
            tasks: []
          },
          {
            name: 'To-Do',
            tasks: []
          },
          {
            name: 'Doing',
            tasks: []
          },
          {
            name: 'Done',
            tasks: []
          }
        ]
        querySnapshot.forEach(function(doc) {
            if (doc.data().status === 'Back-Log') {
              listTask[0].tasks.push({id: doc.id, ...doc.data()});
            } else if (doc.data().status === 'To-Do') {
              listTask[1].tasks.push({id: doc.id, ...doc.data()});
            } else if (doc.data().status === 'Doing') {
              listTask[2].tasks.push({id: doc.id, ...doc.data()});
            } else {
              listTask[3].tasks.push({id: doc.id, ...doc.data()});
            }
        });
        this.tasks = listTask
    });
    }
  }
  
}
</script>
