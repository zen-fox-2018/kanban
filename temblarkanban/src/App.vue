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
                <Board :status_board="item.status" :color="item.color" :index="i" />
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
  data () {
    return {
      list: [
        {
          status : 'Back Log',
          color : 'error',
        },
        {
          status : 'To-Do',
          color : 'warning',
        },
        {
          status : 'Doing',
          color : 'info',
        },
        {
          status : 'Done',  
          color : 'success',
        }
      ],
    }
  },
}
</script>
