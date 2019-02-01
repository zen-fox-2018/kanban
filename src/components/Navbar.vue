<template>
    <div>
        <b-navbar toggleable="md" type="light">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand><img src="../assets/logo.jpeg" style="float : left; width: 35%;"> </b-navbar-brand>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-button v-b-modal.newTask variant="primary" class="my-2 my-sm-0" type="submit">New Task</b-button>
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="newTask"
                ref="modal"
                title="New Task"
                @shown="clearForm">
            <b-form @submit="onSubmit" id="formTask">
                <b-form-group   id="titleGroup" label="Title">
                    <b-form-input id="titleInput"
                                type="text"
                                v-model="task.title"
                                required
                                placeholder="Enter task title...">
                    </b-form-input>
                </b-form-group>
                <b-form-group   label="Description"
                                label-for="descriptionInput">
                    <b-form-textarea id="descriptionInput"
                                v-model="task.description"
                                placeholder="Enter description..."
                                :rows="3"
                                :max-rows="6">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group   label="Point"
                                label-for="poinInput">
                    <b-form-input id="poinInput"
                                type="number"
                                v-model="task.point"
                                required
                                placeholder="Enter point">
                    </b-form-input>
                </b-form-group>
                <b-form-group   label="Assigned to"
                                label-for="assignInput">
                    <b-form-input id="assignInput"
                                type="text"
                                v-model="task.assigned"
                                required
                                placeholder="Enter assignee name">
                    </b-form-input>
                </b-form-group>
            </b-form>
            <div slot="modal-footer">
                <b-btn type="submit" class="float-right mx-2" form="formTask" variant="primary" >
                    Save
                </b-btn>
                <b-btn @click.prevent="handleCancel" class="float-right" variant="primary" >
                    Close
                </b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
import db from '@/script/config.js'

export default {
    name: 'navbar',
    data() {
        return {
            task : {
                title : '',
                description : '',
                point: '',
                assigned : ''
            }
        }
    },
    methods: {
        clearForm () {
            this.task = {...this.task = ''} 
        },
        handleCancel() {
            this.clearForm()
            this.$refs.modal.hide()
        },
        onSubmit () {
            var input = this.task
            input.status = 'backlog'
            db.collection("tasks").add(input)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            
            this.$refs.modal.hide()
        }
  }
}
</script>

