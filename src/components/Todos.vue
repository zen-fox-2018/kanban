<template>
    
    <b-card class="todos" :header="types.title"
            :header-bg-variant="types.color"
            header-tag="header">               
            <div v-for="task in tasks" :key="task.id">
                <Task :detail="task" :button="types.button" class="my-2"> </Task>
            </div>
        
    </b-card>
</template>

<script>
import db from '@/script/config.js'
import Task from '@/components/Task.vue'

export default {
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
        }
    },
    components : {
        Task
    }
}
</script>

<style scoped>
.todos {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
}
</style>

