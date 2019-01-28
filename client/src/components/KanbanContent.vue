<template>
  <div class="content" style="background-color: #795548;">
     <v-layout row>
        <v-flex xs12>
          <v-card dark true>
        <v-card-title primary-title>
          <v-chip color="pink" text-color="white">
            Task Title
          </v-chip>
           <v-chip color="indigo" text-color="white">
            {{task.title}}
          </v-chip>
        </v-card-title>
      </v-card>
        </v-flex>
     </v-layout>
                <div>
                    <div>
                        <v-btn v-if="nextBtn==='Done'" @click="next" color="green" round small true>{{nextBtn}}</v-btn>
                        <v-btn v-else-if="nextBtn==='To-Do'" @click="next" color="yellow" round small true>{{nextBtn}}</v-btn>
                        <v-btn v-else-if="nextBtn==='Doing'" @click="next" color="blue" round small true>{{nextBtn}}</v-btn>
                    </div>
                    
                    <div>
                        <v-btn v-if="prevBtn==='Doing'" @click="prev" color="blue" round small true>{{prevBtn}}</v-btn>
                        <v-btn v-if="prevBtn==='To-Do'" @click="prev" color="yellow" round small true>{{prevBtn}}</v-btn>
                        <v-btn v-if="prevBtn==='Back-Log'" @click="prev" color="orange" round small true>{{prevBtn}}</v-btn>
                    </div>
                    <div>
                        <v-btn @click="deleteTask" color="red" round small true>Delete</v-btn>
                    </div>                 
            </div> 
     <v-card color="brown">
        <v-card-text class="px-0"></v-card-text>
        </v-card>
 </div>
</template>

<script>
import db from '../config.js'
export default {
  props: ['task', 'status'],
  data () {
    return {
      prevBtn: '',
      nextBtn: ''
    }
  },
  created () {
    if(this.status === 'Back-Log') {
      this.nextBtn = 'To-Do',
      this.prevBtn = null
    } 
    else if (this.status === 'To-Do') {
      this.nextBtn = 'Doing',
      this.prevBtn = 'Back-Log'
    } 
    else if (this.status === 'Doing') {
      this.nextBtn = 'Done',
      this.prevBtn = 'To-Do'
    } 
    else {
      this.nextBtn = null
      this.prevBtn = 'Doing'
    }
  },
  methods: {
    next () {
       db
        .collection('tasks')
        .doc(this.task.id)
        .delete()
        .then(() => {
          db
          .collection('tasks')
          .doc(this.task.id)
          .set({
            title: this.task.title,
            status: this.nextBtn
          })
        })
    },
    prev () {
        db
        .collection('tasks')
        .doc(this.task.id)
        .delete()
        .then(() => {
          db
          .collection('tasks')
          .doc(this.task.id)
          .set({
            title: this.task.title,
            status: this.prevBtn
          })
        })
    },
    deleteTask () {
      db
        .collection('tasks')
        .doc(this.task.id)
        .delete()
        .then(() => {
          console.log('successfully deleted')
        })
        .catch(err =>{
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
