<template>
  <div class="home">
    <Myheader @show-form="modalAddTask = true"/>
    <hr>

    <add-task @closeAddTask="modalAddTask = false" v-show="modalAddTask" />
    <b-card-group deck class="mx-4">
      <category :cardCol="'danger'" :status="'Back-Log'"/>
      <category :cardCol="'warning'" :status="'To-Do'"/>
      <category :cardCol="'primary'" :status="'Doing'"/>
      <category :cardCol="'success'" :status="'Done'"/>
    </b-card-group>

  </div>
</template>

<script>
// @ is an alias to /src
import Myheader from '@/components/header.vue'
import task from '@/components/task.vue'
import category from '@/components/category.vue'
import addTask from '@/components/addTask.vue'

export default {
  name: 'home',
  components: {
    Myheader,
    task,
    category,
    addTask
  },
  data () {
    return {
      modalAddTask: false,
    }
  }
}
</script>
