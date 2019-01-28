<template>
    <b-card bg-variant="default"
                :header="detail.title"
                class="text-left mt-2">
            <div class="card-text"> 
                {{ detail.description }} 
                <br>
                Points: {{ detail.points }}
                <br>
                Assigned to : {{ detail.assigned }}

                <div class="row">
                <b-button @click="before" v-if="detail.status > 1" style="background-color: black;" size="sm" class="mt-2 mx-2"> 
                    before 
                </b-button>

                <b-button @click="delTask" size="sm" class="mt-2 mx-2" style="background-color: black;"> 
                    delete
                </b-button>

                 <b-button @click="next" v-if="detail.status < 4" style="background-color: black;" size="sm" class="mt-2 mx-2"> 
                    next
                </b-button>
                </div>
            </div>
    </b-card>
</template>

<script>
import db from '@/scripts/config.js'

export default {
    props: {
        detail: Object
    },
    methods: {
        delTask () {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this task!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                     db.collection("tasks").doc(this.detail.id).delete()
                     .then(function() {
                        swal("Poof! Your task has been deleted!", {
                            icon: "success",
                        });
                    })
                    .catch(function(error) {
                        swal({
                            title: "Sorry!",
                            text: `${error}`,
                            icon: "error",
                        })
                        console.error("Error removing document: ", error);
                    });
                    
                } else {
                    swal("Your task is safe!");
                }
            })
           
        },
        before () {
            db.collection('tasks').doc(this.detail.id).set({
                title: this.detail.title,
                description: this.detail.description,
                points: this.detail.points,
                assigned: this.detail.assigned,
                status: this.detail.status - 1
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

        },
        next () {
            db.collection('tasks').doc(this.detail.id).set({
                title: this.detail.title,
                description: this.detail.description,
                points: this.detail.points,
                assigned: this.detail.assigned,
                status: this.detail.status + 1
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }
    }
}
</script>

<style>

</style>
