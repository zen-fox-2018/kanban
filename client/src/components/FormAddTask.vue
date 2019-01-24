<template>
  <div class="text-center">
    
<b-modal id="modal1" hide-footer title="Add Task" >
    <b-form @submit.prevent="addtask"  >
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
      
      <b-button type="submit" variant="primary" @click="hideModal">Add Task</b-button>
    </b-form>
</b-modal>
  </div>
</template>

<script>
import db from "@/scripts/config.js";
export default {
    data () {
        return {
            title: "",
            description: "",
            point: "",
            assigned: ""
        }
    },
    methods: {
        addtask () {
            let addtask = {
                title: this.title,
                description: this.description,
                point: this.point,
                assigned: this.assigned,
                status: 1
            }
            db
              .collection("Tasks")
              .add(addtask)
              .then(function(docRef) {
                              this.$emit('hideshow')
                console.log("Document written with ID: ", docRef.id);
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });

        },
        hideModal () {
            this.$emit('hideshow')
        }
    }
}
</script>


