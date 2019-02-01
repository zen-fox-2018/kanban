<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600">
        <v-btn  slot="activator" flat color="orange" dark>
            Show Detail
        </v-btn>
      <v-card>
        <v-card-title class="headline">Detail Task :{{card_info.title}} for {{card_info.assignedto}}</v-card-title>
        <v-card-text>Task Description : {{card_info.description}} </v-card-text>
        <br><br>
        <v-card-text>Point : {{card_info.point}}</v-card-text>
        <br><br>
        <v-card-text>Status : {{card_info.status}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" v-if="prev"  @click="backCard">{{ prev_to }}</v-btn>
          <v-btn color="error"  @click="deleteCard">Delete</v-btn>
          <v-btn color="success"  v-if="next" @click="nextCard">{{ next_to }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'DetailCard',
    data () {
      return {
        dialog: false,
        next: true,
        prev: true,
        next_to : '',
        prev_to : '',
        listCardStatus : ['Back Log', 'To-Do', 'Doing', 'Done']
      }
    },
    created() {
        this.setButton()
    },
    props: ['card_info' , 'index'],
    methods :{
        setButton() {
            if(this.index -1 == -1) {
                this.prev = false
                this.next_to = this.listCardStatus[this.index + 1]
            } else if( this.index + 1 >= this.listCardStatus.length ) {
                this.next = false 
                this.prev_to = this.listCardStatus[this.index -1]
            } else {
                this.next_to = this.listCardStatus[this.index + 1]
                this.prev_to = this.listCardStatus[this.index - 1]
            }
        },
        deleteCard() {
            this.$db.collection('cards').doc(`${this.card_info.id}`).delete()
            .then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
            this.dialog = "false"
        },
        nextCard() {
            this.dialog = false
            var statusRef = this.$db.collection('cards').doc(`${this.card_info.id}`)

            return statusRef.update({
                status: this.next_to
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        },
        backCard() {
            this.dialog = false
            var statusRef = this.$db.collection('cards').doc(`${this.card_info.id}`)

            return statusRef.update({
                status: this.prev_to
            })
            .then(function() {
                console.log("Document successfully updated!");
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

        }
    }
  }
</script>