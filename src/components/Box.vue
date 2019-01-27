<template>
  <b-card class="todos" :header="status.title" :header-bg-variant="status.headercolor" >
    <div v-for="(task,i) in tasks" :key="i">
      <Task :detail="task" :button="status.button" :color="status.headercolor"></Task>
    </div>
  </b-card>
</template>

<script>
import db from "@/config/config.js";
import Task from "@/components/Task.vue";

export default {
  name: 'task',
  components: {
    Task
  },
  data(){
    return {
      tasks: []
    }
  },
  props: ['status'],
  methods: {
     getTask() {
      db.collection("tasks")
        .where("status", "==", this.status.status)
        .onSnapshot(querySnapshot => {
          this.tasks = [];
          querySnapshot.forEach(doc => {
            var obj = doc.data();
            obj.id = doc.id;
            this.tasks.push(obj);
          });
        });
    },
  },
  created() {
    this.getTask();
  },
}
</script>
