<template>
  <div class="card mt-5">
    <div class="card-header" :style="payload.style">
      <h5> {{ payload.title }} </h5>
    </div>
    <div class="card-body">
      <card-kanban :payload="payload" />
    </div>
  </div>
</template>

<script>
import CardKanban from '@/components/CardKanban.vue'
import {db} from '@/config.js'

export default {
  name: 'BoardKanban',
  components: {
    CardKanban,
  },
  props: ['payload'],
  data() {
    return {

    }
  },
  methods: {
    addKanban() {
      db.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }
  }
}
</script>

