<template>
    
    <b-card class="todos" :header="types.title"
            :header-bg-variant="types.color"
            header-tag="header">          
            <draggable v-model="tasks" :options="{group:'id'}" @start="drag=true" @end="drag=false" @change="handleChange">     
                <div v-for="task in tasks" :key="task.id">
                    <Task :detail="task" :button="types.button" :color="types.color" class="my-2"> </Task>
                </div>
            </draggable>
    </b-card>
</template>db.collection("tasks").doc(this.detail.id).update({
                "status": status
            })
            .then(() => {
                console.log("Document successfully updated!");
                this.hideModal()
            });

<script>
import db from '@/script/config.js'
import Task from '@/components/Task.vue'
import draggable from 'vuedraggable'

export default {
    components: {   
        Task,
        draggable
    },
    props : ["types"],
    data() {
        return {
            tasks : []
        }
    },
    created() {
        this.fetchTask()
    },
    methods: {
        fetchTask() {
            db.collection("tasks").where("status", "==",  this.types.status)
            .onSnapshot((querySnapshot) => {
                this.tasks = [];
                querySnapshot.forEach((doc) => {
                    var obj = doc.data()
                    obj.id = doc.id
                    this.tasks.push(obj)
                });
            });
        },
        handleChange(){
            // console.log(arguments, "=================")
            if(arguments[0].added){
                console.log(arguments[0].added.element.id)
                console.log((this.types.status))
                db.collection("tasks").doc(arguments[0].added.element.id).update({
                    "status": this.types.status
                })
                .then(() => {
                    console.log("Document successfully updated!");
                });
            }
        }
    }
}
</script>

<style scoped>
.todos {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
}
</style>

