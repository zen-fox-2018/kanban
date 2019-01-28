<template>
  <v-card>
    <v-card-title  class="headline darken-2" :class="card.color" primary-title>
        <h3 class="headline mb-0 white--text">{{ card.title }}</h3>
    </v-card-title>
    <v-card-text>
      <v-container v-for="(task, index) in tasks" :key="index">
        <CardList :task="task" @detail="detail"></CardList>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import CardList from '@/components/CardList.vue'
export default {
  components: {
    CardList
  },
  props: ['card', 'tasks'],
  methods: {
    detail (task) {
      this.$emit('detail', task)
    }
  }
}
</script>
