<template>
    <v-flex xs12>
        <v-card color="blue-grey darken-2" class="white--text">
            <v-card-title primary-title>
            <div>
                <div class="headline">{{card_info.title}} <hr></div>
            </div>
            </v-card-title>

            <v-card-text>
                Point : {{card_info.point}} <br><br>
                Assigned To : {{card_info.assignedto}}
            </v-card-text>

            <v-card-actions>
            <v-btn flat color="orange" dark>Show Detail</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'Card',
    props: ['card_info']
}
</script>

<style>

</style>
