<template>
    <div>
  <b-navbar type="light" variant="secondary " toggleable>
     <b-btn v-b-modal.modal1 @click="show" float-right variant="warning">Add Task</b-btn>
   
  </b-navbar>
</div>
</template>



<script>
export default {
  data () {
    return  {

    }
  },
   methods: {
     show () {
       this.$emit('showModal')
     }
   }
  
}
</script>

