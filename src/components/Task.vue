<template>
  <div>
    <b-card :header="detail.title" :header-bg-variant="color">
      <p class="card-text">Assigned To: {{detail.assignedTo}}</p>
      <div class="">
        <b-button @click="modalDetails = !modalDetails" size="sm" variant="outline-primary">Detail</b-button>
      </div>
    </b-card>
    <b-modal v-model="modalDetails" id="detailTask" hide-footer :title="detail.title">
      <p>Description: {{detail.description}}</p>
      <p>Status: {{detail.status}}</p>
      <p>Assigned To: {{detail.assignedTo}}</p>

      <b-btn @click.prevent="changeStatus(detail.id, button.previous)" v-if="button.previous" class="float-left" :variant="button.colorprevious">
        <span>
          <!-- <i class="fas fa-arrow-left"></i> -->
          <i class="fas fa-backward"></i>
        </span>
        {{button.previous}}
      </b-btn>
      <a href="#" class="ml-auto">
        <i @click.prevent="deleteTask(detail.id)" class="fas fa-trash-alt mt-2 fa-2x" ></i>
      </a>
      <b-btn @click.prevent="changeStatus(detail.id, button.next)" v-if="button.next" class="float-right mx-2" :variant="button.colornext">
        {{button.next}}
        <span>
          <!-- <i class="fas fa-arrow-right"></i> -->
          <i class="fas fa-forward"></i>
        </span>
      </b-btn>
    </b-modal>
  </div>
</template>

<script>
import swal from "sweetalert"
import db from "@/config/config.js"

export default {
  props: ["detail", "button", "color"],
  data() {
    return {
      modalDetails: false
    };
  },
  components: {
    swal
  },
  methods: {
    deleteTask(taskId) {
      db.collection("tasks")
        .doc(taskId)
        .delete()
        .then(function() {
          swal("Success delete task", {
            icon: "success"
          });
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
    },

    changeStatus(taskId, status) {
      db.collection("tasks")
        .doc(taskId)
        .update({
          status: status
        })
        .then(() => {
          console.log("Success Change Status");
        });
    }
  }
};
</script>