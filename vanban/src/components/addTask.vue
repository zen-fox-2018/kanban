<template>
     <b-modal title="Add Task" id="myModal" hide-footer>
          <b-form @submit.prevent="addTask" >
            <b-form-group label="Title :" class="text-left">
                <b-form-input type="text" v-model="title" required placeholder="Enter task title"> </b-form-input>
            </b-form-group>

            <b-form-group label="Description :" class="text-left">
                 <b-form-textarea v-model="description" placeholder="Enter task description" rows="3" max-rows="6"></b-form-textarea>
            </b-form-group>

            <b-form-group label="Point :" class="text-left">
                <b-form-input type="number" v-model="points" required placeholder="Enter task point"> </b-form-input>
            </b-form-group>

            <b-form-group label="Assigned to :" class="text-left">
                <b-form-input type="text" v-model="assigned" required placeholder="Assigned to"> </b-form-input>
            </b-form-group>

            <b-button @click="closeAddTask" type="reset" class="float-right ml-2" variant="light">Close</b-button>
            <b-button type="submit" class="float-right" variant="primary">Submit</b-button>
        </b-form>
    </b-modal>
</template>

<script>
import db from '@/scripts/config.js'

export default {
    name: 'modalAddTask',
    data () {
        return {
            title: '',
            description: '',
            points: 0,
            assigned: '',
        }
    },
    methods: {
        addTask () {
            db.collection("tasks").add({
                title: this.title,
                description: this.description,
                points: this.points,
                assigned: this.assigned,
                status: 1
            })
            .then((docRef) => {
                this.$emit('closeAddTask')
                swal("Good job!", "You submit this task!", "success");
                this.title = ''
                this.description = ''
                this.points = 0
                this.assigned = ''
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        },
        closeAddTask () {
            this.$emit('closeAddTask')
        }
    }
}
</script>

<style>

</style>
