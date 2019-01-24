<template>
  <v-app>
    <v-toolbar app color="amber">
      <v-toolbar-title class="headline text-uppercase">
        <span>Katemblar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
     <v-toolbar-items>

      <Create/>
     </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <v-container fluid grid-list-lg>
          <v-layout  justify-space-around row fill-height wrap>

             <v-flex xs12 sm6 md3 order-md1 order-sm3 v-for="(item , i) in list" :key="i">
                <Board :name_board="item.name" :color="item.color" :card="card" :status_board="i" />
             </v-flex>


          </v-layout>
        </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Board from '@/components/Board.vue'
import Create from '@/components/Create.vue'

export default {
  name: 'App',
  components: {
    Board,
    Create
  },
  created() {
    this.getCardData()
  },
  data () {
    return {
      list: [
        {
          name : 'Back Log',
          color : 'error',
        },
        {
          name : 'To-Do',
          color : 'warning',
        },
        {
          name : 'Doing',
          color : 'info',
        },
        {
          name : 'Done',  
          color : 'success',
        }
      ],
      card: [],
    }
  },
  methods : {
    getCardData () {
      let dataCard = []
      this.$db.collection('cards')
      .onSnapshot((snapshot) => {
        snapshot.forEach(e => {
          dataCard.push(e.data())
        })
      });
        this.card = dataCard
    }
  }
}
</script>
