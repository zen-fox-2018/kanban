<template>
  <v-app>
    <home 
    v-bind:backlogdata="backlogData"
    v-bind:tododata="todoData"
    v-bind:doingdata="doingData"
    v-bind:donedata="doneData"
    ></home>
  </v-app>
</template>

<script>
import home from "./views/Home";

export default {
  name: "App",
  components: {
    home
  },
  data() {
    return {
      backlogData: [],
      todoData: [],
      doingData: [],
      doneData: []
    };
  },
  created() {
    db.collection("backlog").orderBy("created", "asc").onSnapshot((querySnapshot) => {
      let counter = 0
      let data = []
      querySnapshot.forEach((element, index) => {
        data.push(element.data())
        data[counter].id = element.id
        counter++
      });
      this.backlogData = data
    });

    db.collection("todo").onSnapshot((querySnapshot) => {
      let counter = 0
      let data = []
      querySnapshot.forEach((element, index) => {
        data.push(element.data())
        data[counter].id = element.id
        counter++
      });
      this.todoData = data
      
    });

    db.collection("doing").onSnapshot((querySnapshot) => {
      let counter = 0
      let data = []
      querySnapshot.forEach(element => {
        data.push(element.data())
        data[counter].id = element.id
        counter++
      });
      this.doingData = data
      
    });

    db.collection("done").onSnapshot((querySnapshot) => {
      let counter = 0
      let data = []
      querySnapshot.forEach(element => {
        data.push(element.data())
        data[counter].id = element.id
        counter++
      });
      this.doneData = data
      
    });
  }
};
</script>
