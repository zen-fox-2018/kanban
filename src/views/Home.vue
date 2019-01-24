<template>
  <div class="container" style="margin-top : 5em;">
    <div class="row">
      <div v-for="todo in types" :key="todo.title" class="col-md-3">
        <Todos :types="todo"> </Todos>
      </div>
    </div>
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'

export default {
  name: 'home',
  data () {
    return {
      color: '',
      title: '',
      types: [{ title: 'Back-Log :(', status: 'backlog', color: 'danger', button : { next: 'todo'} },
        { title: 'To-Do List', status: 'todo', color: 'warning', button : { next: 'doing', previous: 'backlog'} },
        { title: 'On Going Boss', status: 'doing', color: 'info', button : { next: 'done', previous: 'todo'} },
        { title: 'Done Bray', status: 'done', color: 'success', button : { previous: 'doing'} }]
    }
  },
  methods: {
    
  },
  components: {
    Todos
  }
}
</script>
