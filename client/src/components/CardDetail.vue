<template>
  <v-dialog v-model="detail.showDetail" max-width="350" persistent>
    <v-container>
      <v-card>
        <v-btn color="red" dark small absolute top right fab @click="close">
          <v-icon>close</v-icon>
        </v-btn>
        <v-card-title class="headline">{{ detail.title }} for {{ detail.to }}</v-card-title>

        <v-card-text>
          <v-text-field :value="detail.description" label="Description" disabled></v-text-field>
          <v-text-field :value="detail.points" label="Points" disabled></v-text-field>
          <v-text-field
            :value="detail.card.title"
            :color="detail.card.color"
            label="Status"
            disabled
          ></v-text-field>
        </v-card-text>

        <v-card-actions>
          <v-layout row wrap>
            <v-flex md4>
              <v-btn
                v-if="detail.prev"
                :color="detail.prev.color"
                @click="prev"
              >{{ detail.prev.title }}</v-btn>
            </v-flex>
            <v-flex md4>
              <v-btn color="red darken-2" @click="deleteTask">Delete</v-btn>
            </v-flex>
            <v-flex md4>
              <v-btn
                v-if="detail.next"
                :color="detail.next.color"
                @click="next"
              >{{ detail.next.title }}</v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  props: ["detail"],
  data() {
    return {
      button_value: {}
    };
  },
  methods: {
    close() {
      this.$emit("close_detail");
    },
    deleteTask() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore
            .collection("tasks")
            .doc(this.detail.id)
            .delete()
            .then(() => {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              this.close();
            })
            .catch(error => {
              console.log("gagal son");
            });
        } else {
          Swal.fire("Cancelled!", "Your task saved.", "warning");
          this.close();
        }
      });
    },
    next() {
      Swal.fire({
        title: "Are you sure?",
        text: `Mark this task as ${this.detail.next.title}`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change it!"
      }).then(result => {
        if (result.value) {
          this.$firestore
            .collection("tasks")
            .doc(this.detail.id)
            .update({
              status: this.detail.status + 1
            })
            .then(() => {
              Swal.fire(
                "Success!",
                "Your task has status been changed.",
                "success"
              );
              this.close();
            })
            .catch(error => {
              console.log("gagal son");
            });
        } else {
          Swal.fire("Cancelled!", "", "warning");
          this.$emit("close_detail");
        }
      });
    },
    prev() {
      Swal.fire({
        title: "Are you sure?",
        text: `Mark this task as ${this.detail.prev.title}`,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, change it!"
      }).then(result => {
        if (result.value) {
          this.$firestore
            .collection("tasks")
            .doc(this.detail.id)
            .update({
              status: this.detail.status - 1
            })
            .then(() => {
                            Swal.fire(
                "Success!",
                "Your task has status been changed.",
                "success"
              );
              this.close();
            })
            .catch(error => {
              console.log("gagal son");
            });
        } else {
          Swal.fire("Cancelled!", "", "warning");
          this.$emit("close_detail");
        }
      });
    }
  }
};
</script>
