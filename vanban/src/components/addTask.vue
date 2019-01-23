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
                <b-form-input type="number" v-model="point" required placeholder="Enter task point"> </b-form-input>
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
export default {
    name: 'modalAddTask',
    data () {
        return {
            title: '',
            description: '',
            point: 0,
            assigned: '',
        }
    },
    methods: {
        addTask () {
            var docRef = db.collection('tasks')

            var setAda = docRef.set({
            title: this.title,
            description: this.description,
            point: this.point,
            assigned: this.assigned
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
