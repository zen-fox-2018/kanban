<template>
    <div class="row ml-3 mt-2">
        <h2 class="text-left col-2 mt-2">Vanban Board</h2>
        <div class="col-9 ml-2 text-right">
            <b-button @click="showForm" v-b-modal="'myModal'" class="mt-2" variant="primary">
                New Task
            </b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Myheader',
    methods: {
        showForm () {
            this.$emit('show-form')
        }
    }
}
</script>

<style>

</style>
