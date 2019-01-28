<template>
  <div class="home">
    <Header/>
    <br>
    <v-layout align-center justify-space-around row fill-height wrap>
      <v-flex row v-for="board in boards">
        <Board :color="board.color" :boardname="board.boardname"/>
        <br>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Board from "@/components/board.vue";

export default {
  name: "home",
  components: {
    Header,
    Board
  },
  data: function() {
    return {
      tasks: [],
      boards: [
        {
          boardname: "Back Log",
          color: "pink"
        },
        {
          boardname: "To-Do",
          color: "blue"
        },
        {
          boardname: "Doing",
          color: "green"
        },
        {
          boardname: "Done",
          color: "yellow"
        }
      ]
    };
  }
};
</script>
