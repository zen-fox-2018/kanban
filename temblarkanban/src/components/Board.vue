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
      <v-toolbar-title>{{status_board}}</v-toolbar-title>
    </v-toolbar>

    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <div id="data" v-for="(item, i) in card"  :key="i" >
            <Card :card_info="item" :index="index" />
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
    props: ['color', 'index' , 'status_board'],
    components : {
        Card
    },
    data() {
      return {
        card : []
      }
    },
    created () {
      this.getCardData()
    },
    methods :{
      getCardData() {
        this.$db.collection('cards')
        .onSnapshot((snapshot) => {
          var dataCard = []
          snapshot.forEach(e => {
            dataCard.push({
              id: e.id,
              ...e.data()
              })
          })
          this.card = dataCard.filter(e => {
            return e.status === this.status_board
          })
          // console.log(this.card)
        })
      },
    }
}
</script>
