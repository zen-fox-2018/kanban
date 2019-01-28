<template>
    <v-layout justify-space-around row>
        <v-flex d-flex xs11 sm11 md3 lg3 v-for="(card, index) in cards" :key="index">
          <KanbanCard :card="{ id: index, ...card}" :tasks=filterTasks(index) @detail="detail"></KanbanCard>
        </v-flex>
        <CardDetail :detail="{showDetail, ...detailTask, ...buttonValue(detailTask.status), card: { ...cards[detailTask.status] }}" @close_detail="closeDetail"></CardDetail>
    </v-layout>
</template>

<script>
import KanbanCard from '@/components/KanbanCard.vue'
import CardDetail from '@/components/CardDetail.vue'

export default {
  components: {
    KanbanCard,
    CardDetail
  },
  data () {
    return {
      cards: [
        {
          title: 'Back-Log',
          color: 'red accent-4'
        },
        {
          title: 'To-Do',
          color: 'yellow accent-4'
        },
        {
          title: 'Doing',
          color: 'blue accent-4'
        },
        {
          title: 'Done',
          color: 'green accent-4'
        }
      ],
      tasks: [],
      detailTask: {},
      showDetail: false,
    }
  },
  methods: {
    filterTasks (index) {
      return this.tasks.filter(task => {
        return task.status === index
      }).sort((a,b) => {
        return b.created - a.created
      })
    },
    buttonValue (index) {
      return {
        prev: this.cards[index - 1],
        next: this.cards[index + 1]
      }
    },
    detail (task) {
      this.detailTask = task
      this.showDetail = true
    },
    closeDetail() {
      this.showDetail = false
    }
  },
  created () {
    this.$firestore.collection('tasks')
      .onSnapshot( (querySnapshot) => {
        var tasks = []
        querySnapshot.forEach(doc => {
          tasks.push({id: doc.id, ...doc.data()})
        })
        this.tasks = tasks
      })
    
  }
}
</script>
