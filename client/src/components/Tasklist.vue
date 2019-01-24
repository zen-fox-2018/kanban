<template>
    <div>
         <b-card :header="list.title"
                header-tag="header"
                >
            <h6>point: {{list.point}}</h6>
            <h6>Assigned To: {{list.assigned}}</h6>
            <b-row>
                <b-col>
                <b-button @click="back" variant="outline-success" v-if="list.status > 1 ">Back</b-button>
                <b-button @click="next" variant="outline-success" v-if="list.status < 4">Next</b-button>
                 <b-button @click="destroy" variant="outline-success">Delete</b-button>
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
import db from "@/scripts/config.js"
export default {
    props: {
        list: Object
    },
    methods: {
        destroy () {
            db
            .collection("Tasks")
            .doc(this.list.id)
            .delete()
            .then(function() {
               console.log("Document successfully deleted!");
            })
            .catch(function(error) {
               console.error("Error removing document: ", error);
            });
        },
        back () {
            db
              .collection("Tasks")
              .doc(this.list.id)
              .update({
                "status": this.list.status -= 1
              })
              .then(function() {
                console.log("Document successfully updated!");
              });
        },
        next () {
            db
              .collection("Tasks")
              .doc(this.list.id)
              .update({
                "status": this.list.status += 1
              })
              .then(function() {
                console.log("Document successfully updated!");
              });

        }
    }
}
</script>
