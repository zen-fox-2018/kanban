<template>
    <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text" width="200">
            <v-card-title primary-title>
                <div class="title text-truncate">{{card_info.title}}<hr> </div>
            </v-card-title>

            <v-card-text>
                Point : {{card_info.point}} <br><br>
                Assigned To : {{card_info.assignedto}}
            </v-card-text>

            <v-card-actions>
                <DetailCard :card_info="card_info" :index="index" />
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
import DetailCard from '@/components/DetailCard.vue'

export default {
    name: 'Card',
    props: ['card_info', 'index'],
    components: {
        DetailCard
    }
}
</script>

<style>

</style>
