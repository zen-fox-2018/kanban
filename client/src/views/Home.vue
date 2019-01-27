<template>
  <div>
    <v-container grid-list-xs text-md-center>
      <formadd></formadd>
      <v-layout row wrap justify-center>
        <v-flex xs2>
          <v-container>
        <v-switch :label="`Dark Theme`" v-model="goDark"></v-switch>
        <v-spacer></v-spacer>
      </v-container>
        </v-flex>
      </v-layout>

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
import formadd from "../components/FormAdd";

export default {
  props: ["backlogdata", "tododata", "doingdata", "donedata"],
  components: {
    board,
    formadd
  },
  data() {
    return {
      goDark: false
    };
  },
  watch: {
    goDark: function () {
      this.$emit('godark', this.goDark)
      
    }
  },
};
</script>
