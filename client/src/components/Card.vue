<template>
  <div>
    <v-card style="padding: 5vh">
      <v-card style="margin-bottom: 1vh">
        <h4>Title: {{item.title}}</h4>
        <h4>Desc: {{item.desc}}</h4>
        <h4>Points: {{item.points}}</h4>
        <h4>Assigned to: {{item.assignedTo}}</h4>
        <v-btn v-if="state == 'todo'" round color="primary" dark v-on:click="move('backlog')">backlog</v-btn>
        <v-btn v-if="state == 'doing'" round color="primary" dark v-on:click="move('todo')">ToDo</v-btn>
        <v-btn v-if="state == 'done'" round color="primary" dark v-on:click="move('doing')">doing</v-btn>
        <v-btn round color="primary" dark v-on:click="deleteTask">delete</v-btn>
        <v-btn
          v-if="state == 'backlog'"
          round
          color="primary"
          dark
          v-on:click="move('todo', index)"
        >ToDo</v-btn>
        <v-btn v-if="state == 'todo'" round color="primary" dark v-on:click="move('doing')">Doing</v-btn>
        <v-btn v-if="state == 'doing'" round color="primary" dark v-on:click="move('done')">Done</v-btn>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["item", "state"],
  data() {
    return {};
  },
  methods: {
    move(collectionName, index) {
      this.deleteTask();
      db.collection(collectionName)
        .doc()
        .set({
          title: "Los Angeles",
          desc: "CA",
          points: 100,
          assignedTo: "taqi"
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
    deleteTask() {
      db.collection(this.state)
        .doc(this.item.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>
