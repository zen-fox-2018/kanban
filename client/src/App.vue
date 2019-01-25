<template>
  <v-app>
    <v-toolbar class="orange" app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">O-KanBan</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-layout fill-height>
            <v-btn flat @click="dialog = true">New Task</v-btn>
          <v-dialog v-model="dialog" max-width="600px">
            <Form @close_modal="dialog = false"/>
          </v-dialog>
        </v-layout>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid grid-list-lg>
        <v-layout justify-space-around wrap>
          <v-flex sm12 md3 v-for="(card, i) in baseCards" :key="i">
            <BaseCard :card_id="card.title" :card="card" :tasks="tasks" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import BaseCard from '@/components/BaseCard'
import Form from '@/components/Form'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BaseCard,
    Form
  },
  created() {
    this.getData()
  },
  data () {
    return {
      baseCards: [
        {color: 'light-blue', title: 'Back-Log'},
        {color: 'red', title: 'To-Do'},
        {color: 'yellow', title: 'Doing'},
        {color: 'light-green accent-3', title: 'Done'},
      ],
      tasks: [],
      dialog: false,
    }
  },
  methods: {
    getData() {
      this.$db.collection("tasks").onSnapshot(querySnapshot => {
          var result = [];
          querySnapshot.forEach(function(doc) {
              result.push({id: doc.id, ...doc.data()});
          });
          this.tasks = result
      });
    }
  }
}
</script>
