<template>
  <div class="container">
    <div class="row" style="margin-top : 2em;">
      <div v-for="todo in types" :key="todo.title" class="col-md-3">
        <Todos :types="todo"> </Todos>
      </div>
    </div>
    <p> <i> *) Drag and drop task to move change status</i></p>
  </div>
</template>

<script>
import Todos from '@/components/Todos.vue'
import draggable from 'vuedraggable'

export default {
  name: 'home',
  data () {
    return {
      types: [{ title: 'Back-Log :(', status: 'backlog', color: 'danger', button : { next: 'todo'} },
        { title: 'To-Do List', status: 'todo', color: 'warning', button : { next: 'doing', previous: 'backlog'} },
        { title: 'On Going Boss', status: 'doing', color: 'info', button : { next: 'done', previous: 'todo'} },
        { title: 'Done Bray', status: 'done', color: 'success', button : { previous: 'doing'} }]
    }
  },
  methods: {
    updateBlock(id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status;
    },
    handleChange(){
      console.log('channgeeeeeeeeeeee')
    }
  },
  components: {
    Todos,
    draggable,
  }
}
</script>

