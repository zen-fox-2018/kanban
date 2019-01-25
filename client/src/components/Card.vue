<template>
    <v-flex xs12>
        <v-card>
            <v-card-title class="blue-grey lighten-2">
                <p class="font-weight-bold">
                {{task.title}}
                </p>
            </v-card-title>
            <v-card-text>
                Point: {{task.point}} <br>
                Assigned-To: {{task.assignedto}}
            </v-card-text>
            <v-card-actions>
                <v-btn flat @click="dialog = true">Show Detail</v-btn>
                <v-dialog v-model="dialog" max-width="500">
                    <TaskDetail :task="task" @close_modal="dialog = false"/>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
import TaskDetail from '@/components/TaskDetail'

export default {
    props: ["task"],
    components: {
        TaskDetail
    },
    data() {
        return {
            dialog: false
        }
    }

}
</script>
