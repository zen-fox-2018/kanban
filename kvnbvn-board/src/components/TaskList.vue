<template>
    <div class="listTask">
        <b-card-group deck>
            <b-card header-tag="header">
                <p>Title: {{list.title}}</p>
                <p>Description: {{list.description}}</p>
                <p>Assigned to: {{list.assignTo}}</p>
                <b-button variant="danger" @click="deleteTask" style="margin-bottom:5px;">delete</b-button>
                <b-button @click="next" :variant="colorNext" v-if="list.status !== 4" style="margin-bottom:5px;">{{buttonNext}}</b-button>
                <b-button @click="prev" :variant="colorPrev" v-if="list.status !== 1">{{buttonPrev}}</b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
import db from '@/scripts/config.js'
export default {
    data () {
        return {
            buttonNext : '',
            buttonPrev : '',
            colorNext: '',
            colorPrev: ''
        }
    },
    props: {
        list: Object,
        header: String
    },
    methods: {
        deleteTask () {
            db
                .collection("tasks")
                .doc(this.list.id)
                .delete()
                .then(function() {
                    console.log("Document successfully deleted!");
                }
                )
                .catch(function(error) {
                    console.error("Error removing document: ", error);
                });
        },
        next() {
            db
            .collection("tasks")
            .doc(this.list.id)
            .update({
                "status": this.list.status + 1,
            })
            .then(function() {
                console.log("Document successfully updated!");
            });
            console.log(this.header, '======= INI HEADER')
        },
        prev() {
            db
            .collection("tasks")
            .doc(this.list.id)
            .update({
                "status": this.list.status - 1,
            })
            .then(function() {
                console.log("Document successfully updated!");
            });
        }
    },
    created () {
        if(this.header === 'Back-Log') {
            this.buttonNext = 'To-Do'
            this.colorNext = 'warning'
        } else if (this.header === 'To-Do') {
            this.buttonNext = 'Doing'
            this.buttonPrev = 'Back-Log'
            this.colorNext = 'info'
            this.colorPrev = 'light'
        } else if (this.header === 'Doing') {
            this.buttonNext = 'Done'
            this.buttonPrev = 'To-Do'
            this.colorNext = 'success'
            this.colorPrev = 'warning'
        } else if (this.header === 'Done') {
            this.buttonPrev = 'Doing'
            this.colorPrev = 'info'
        }  
    }
}
</script>

<style>
    .listTask {
        margin-top: 10px;
    }
</style>
