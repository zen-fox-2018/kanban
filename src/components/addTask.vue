<template>
  <v-card>
    <v-card-title>
      <span class="headline">Create New Task</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="Title" required v-model="title"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Description" required v-model="description"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="$emit('close-dialog')">Cancel</v-btn>
      <v-btn color="blue darken-1" flat @click="$emit('add-task', {title, description})">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "addTask",
  data: () => ({
    title: "",
    description: ""
  })
};
</script>

<style>
</style>
