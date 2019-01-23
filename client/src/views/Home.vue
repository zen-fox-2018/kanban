<template>
  <div>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs3>
          <h2>Backlog</h2>
          <board v-bind:state="'backlog'" v-bind:data="backlogdata"></board>
        </v-flex>
        <v-flex xs3>
          <h2>Todo</h2>
          <board v-bind:state="'todo'" v-bind:data="tododata"></board>
        </v-flex>
        <v-flex xs3>
          <h2>Doing</h2>
          <board v-bind:state="'doing'" v-bind:data="doingdata"></board>
        </v-flex>
        <v-flex xs3>
          <h2>Done</h2>
          <board v-bind:state="'done'" v-bind:data="donedata"></board>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import board from "../components/Board";

export default {
  props: ["backlogdata", "tododata", "doingdata", "donedata"],
  components: {
    board
  }
};
</script>
