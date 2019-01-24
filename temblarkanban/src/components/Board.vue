<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto;"
    class="grey lighten-3"
  >
    <v-toolbar
      :color="color"
      dark
    >
      <v-toolbar-title>{{name_board}}</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <div id="data" v-for="(item, i) in cardData"  :key="i" >
            <Card :card_info="item" />
          </div>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
    name: 'Board',
    props: ['color', 'name_board', 'card' , 'status_board'],
    components : {
        Card
    },
    data() {
      return {
        cardData: []
      }
    },
    created () {
      this.getData()
    },
    watch : {
      card: {
        handler: function() {
          this.getData()
        },
        deep : true
      }
    },
    methods :{
      getData() {
         this.cardData = this.card.filter(e => {
           return e.status === this.status_board
         })

      }
    }
}
</script>
