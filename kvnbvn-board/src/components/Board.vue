<template>
    <b-card-group deck>
        <b-card 
            header-tag="header"
            :header-bg-variant="cardColor"
        >
            <h6 slot="header" class="mb-0">{{header}}</h6>
            <TaskList v-for="(list, index) in lists" :key="index" :header="header" :list="list"></TaskList>
        </b-card>
    </b-card-group>
</template>

<script>
import TaskList from '@/components/TaskList.vue'

export default {
    name: 'KanbanBoard',
    props: {
        cardColor: String,
        header: String,
        lists: Array
    },
    components: {
        TaskList
    }
}
</script>
