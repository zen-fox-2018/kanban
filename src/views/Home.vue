<template>
  <div class="home">
    <div class="container mt-3">
      <div>
        <h3>Kanban Board</h3>
        <b-btn v-b-modal.modalnewtask variant="primary" size="sm">Add New Task</b-btn>

        <b-modal id="modalnewtask" title="Add New Task" hide-footer>
          <b-form-group>
            <div>
              <b-form>
                <b-form-group label="Title" label-for="title" style="text-align:left;">
                  <b-form-input id="title" type="text" v-model="task.title" required placeholder="Enter title"></b-form-input>
                </b-form-group>
                <b-form-group label="Description" label-for="description" style="text-align:left;">
                  <b-form-input type="text" v-model="task.description" placeholder="Enter description"></b-form-input>
                </b-form-group>
                <b-form-group label="Assigned" label-for="assigned" style="text-align:left;">
                  <b-form-input id="assigned" type="text" v-model="task.assignedTo" placeholder="Assigned to ..."></b-form-input>
                </b-form-group>
                <b-button variant="primary" @click.prevent="add">Add New Task</b-button>
              </b-form>
            </div>
          </b-form-group>
        </b-modal>
        <hr>
      </div>
     <div class="row" style="margin-top : 2em;">
      <div v-for="(status, index) in state" :key="index" class="col-3">
        <Box :status="status"></Box>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import swal from "sweetalert"
import Box from "@/components/Box.vue";
import db from "../config/config.js"

export default {
  name: 'home',
  components: {
    Box
  },
  data () {
    return {
      task : {
        title : '',
        description : '',
        assignedTo : ''
      },
      state: [
        { title: 'BackLog', status: 'backlog', headercolor: 'danger', button : { next: 'todo', colornext: 'warning'} },
        { title: 'ToDo', status: 'todo', headercolor: 'warning', button : { next: 'doing', colornext: 'primary', previous: 'backlog', colorprevious: 'danger'} },
        { title: 'Doing', status: 'doing', headercolor: 'primary', button : { next: 'done', colornext: 'success', previous: 'todo', colorprevious: 'warning'} },
        { title: 'Done', status: 'done', headercolor: 'success', button : { previous: 'doing', colorprevious: 'primary'} }
      ]
    }
  },
  methods: {
    add(){
      let input = this.task
      input.status = 'backlog'
      db.collection("tasks")
        .add(input)
        .then(({docRef}) => {
            console.log("Task Added");
            this.task = {
              title : '',
              description : '',
              assignedTo : ''
            }
        })
        .catch(function(error) {
            console.error("Error adding task: ", error);
        });
    }
  },
}
</script>
