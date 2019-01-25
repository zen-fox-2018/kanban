<template>
    <v-card>
        <v-card-title :class="card.color" class="font-weight-black white--text">
            {{card.title}}
        </v-card-title>

        <v-container fluid grid-list-lg>
            <v-layout wrap>
                <Card v-for="(task, i) in filteredTasks" :key="i" :task="task"/>
            </v-layout>
        </v-container>

    </v-card>
</template>
<script>
import Card from '@/components/Card'

export default {
    props: ['card_id', 'tasks', 'card'],
    components: {
        Card
    },
    created() {
        this.filterData()
    },
    data() {
        return {
            filteredTasks: []
        }
    },
    watch: {
        tasks: {
            handler() {
                this.filterData()
            },
            deep: true
        }
    },
    methods: {
        filterData() {
            this.filteredTasks = this.tasks.filter(task => {
                return task.status === this.card_id
            })
        }
    }
}
</script>
