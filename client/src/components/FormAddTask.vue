<template>
  <div>
<b-modal ref="myModalRef" hide-footer title="Using Component Methods">
    <b-form @submit="addtask"  v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Title:"
                    label-for="exampleInput1"
                    >
        <b-form-input id="exampleInput1"
                      type="text"
                      v-model="title"
                      required
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Description :"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="description"
                      required
                      placeholder="Enter description">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Point :"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="point"
                      required
                      placeholder="Enter Point">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Assigned To :"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="assigned"
                      required
                      placeholder="Enter assigned">
        </b-form-input>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Add Task</b-button>
    </b-form>
    <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
</b-modal>
  </div>
</template>

<script>
export default {
    data () {
        return {
            tittle: "",
            description: "",
            point: "",
            assigned: ""
        }
    },
    methods: {
        Addtask () {
            
        },
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
    }
}
</script>


