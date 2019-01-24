<template>
  <b-card-group deck
                  class="mb-3">
       <b-card :header="title"
          header-text-variant="white"
          header-tag="header"
          :header-bg-variant="color"
          footer=""
          footer-tag="footer"
          :footer-bg-variant="color"
          footer-border-variant="dark"
          style="max-width: 20rem;"
  >
    <Tasklist :list="task" v-for="task in list" :key="task.id"></Tasklist>
  </b-card>
  </b-card-group>
</template>

<script>
import Tasklist from '@/components/Tasklist.vue'
export default {
    name: "taskbox",
    props: {
        color: String,
        title: String,
        list: Array
    },
    components: {
        Tasklist
    },
    data () {
        return {
        }
    },
    methods: {

    },
    
}
</script>

