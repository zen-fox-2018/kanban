<template>
    <div>
        <b-card :header="detail.title || 'no title'">
                <p class="card-text">Point : {{detail.point || 'no points' }}</p>
                <p class="card-text">Assigned to : {{detail.assigned || 'no assignee'}}</p>
                <div class="d-flex">
                    <b-button @click="modalShow = !modalShow"
                            size="sm"
                            variant="primary">
                            Detail
                    </b-button>
                    <span class="ml-auto"> <i @click="deleteTask(detail.id)" class="fas fa-trash-alt mt-2" style="color: #d61b1b; cursor: pointer;"></i> </span>
                </div>
        </b-card>
        <b-modal v-model="modalShow" 
                id="detailTask"
                hide-footer
                ref="modal">
                <div slot="modal-header" class="d-flex justify-content-between">
                    <p> Detail task :  {{detail.title || 'no title' }} for {{detail.assigned || 'no assignee'}}</p>
                </div>
                <p> Description : {{detail.description}}</p>
                <p> Point :  {{detail.point}} </p>
                <p> Status : {{detail.status}} </p>
                <b-btn @click.prevent="changeStatus(button.previous)" v-if="button.previous" class="float-left" variant="primary" >
                    <span> 
                        <i class="fas fa-arrow-left"></i>
                    </span>
                    {{button.previous}}
                </b-btn>
                <b-btn @click.prevent="changeStatus(button.next)" v-if="button.next" class="float-right mx-2" variant="secondary" >
                    {{button.next}}
                    <span> 
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </b-btn>
        </b-modal>
    </div>
</template>

<script>
import swal from 'sweetalert'
import db from '@/script/config.js'

export default {
    props : ["detail", "button", "colors"],
    data() {
        return {
            modalShow: false
        }
    },
    components : {
        swal
    },
    methods :{
        deleteTask(id){
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this task!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    db.collection("tasks").doc(id).delete()
                    .then(function() {
                        swal("Poof! Your task has been deleted!", {
                            icon: "success",
                        });
                        console.log("Document successfully deleted!");
                    }).catch(function(error) {
                        console.error("Error removing document: ", error);
                    });
                    
                }
            });
        },
        changeStatus (status) {
            db.collection("tasks").doc(this.detail.id).update({
                "status": status
            })
            .then(() => {
                console.log("Document successfully updated!");
                this.hideModal()
            });
        },
        hideModal () {
           this.$refs.modal.hide()
        }
    }

}
</script>

<style>

</style>
