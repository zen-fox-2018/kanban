<template>
    <v-layout fill-height>
            <v-btn 
            flat
            @click="dialog = true" 
            color="brown"
            offset-x
            >
            New Task</v-btn>

        <v-dialog  hide-overlay v-model="dialog" fullscreen  offset-x>
            <v-card>
                <v-card-title>
                <span class="headline" color="amber">New Task</span>
                </v-card-title>
                <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>

                    <v-flex xs12>
                        <v-text-field label=" Task Title*" required></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                        <v-textarea  label="Task Description" ></v-textarea>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field label="Task Point*" required></v-text-field>
                    </v-flex>

                    <v-flex xs12>
                        <v-text-field label="Assigned To*" required></v-text-field>
                    </v-flex>

                    </v-layout>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="amber darken-1"  flat @click="dialog = false">Cancel</v-btn>
                <v-btn color="amber darken-1" flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>


</template>

<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>