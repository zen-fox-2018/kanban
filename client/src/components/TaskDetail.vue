<template>
    <v-card>
        <v-card-title>
            <h2> {{task.title}} </h2>
        </v-card-title>
        <v-card-text>
            <span>
            <h4> Task Detail: </h4>{{task.description}}
            </span>
            <br>
            <span>
            <h4> Point: </h4>{{task.point}}
            </span>
            <br>
            <span>
            <h4> Status: </h4>{{task.status}}
            </span>
        </v-card-text>
        <v-card-actions>
            <v-container grid-list-md text-xs-center>
                <v-layout>
                    <v-flex xs4>
                        <v-btn color="warning" v-if="prev !== ''" @click="updateData(prev)">{{prev}}</v-btn>
                    </v-flex>
                    <v-flex xs4>
                        <v-btn color="error" @click="deleteData">Delete</v-btn>
                    </v-flex>
                    <v-flex xs4>
                        <v-btn color="success" v-if="next !== ''" @click="updateData(next)">{{next}}</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: ['task'],
    data() {
        return {
            prev: '',
            next: ''
        }
    },
    methods: {
        defineBtn() {
            if (this.task.status === 'Back-Log') {
                this.next = "To-Do"
            } else if (this.task.status === 'To-Do') {
                this.prev = "Back-Log"
                this.next = "Doing"
            } else if (this.task.status === 'Doing') {
                this.prev = "To-Do"
                this.next = "Done"
            } else if (this.task.status === 'Done') {
                this.prev = "Doing"
            }
        },
        updateData(input) {
            // console.log(input);
            // console.log(this.task.id);
            this.task.status = input
            let task = this.$db.collection('tasks').doc(this.task.id)
            return task.update(this.task)
                .then(() => {
                    this.$emit("close_modal")
                })
                .catch(err => {
                    console.log(err);
                })
        },
        deleteData() {
            let task = this.$db.collection('tasks').doc(this.task.id)
            task.delete()
                .then(() => {
                    this.$emit("close_modal")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    },
    mounted() {
        this.defineBtn()
    }
}
</script>