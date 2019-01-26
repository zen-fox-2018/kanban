<template>
<v-card>
  <v-card-title
    class="headline grey lighten-2"
    primary-title
  >
    {{ task.title }}
  </v-card-title>

    <v-card-text>
          <v-text-field
            :value="task.points"
            label="Point"
            disabled
          ></v-text-field>
          <v-text-field
            :value="task.to"
            label="Assigned To"
            disabled
          ></v-text-field>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        flat
        @click=detail(task)
      >
        Detail
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    detail (task) {
      this.$emit('detail', task)
    }
  }
}
</script>
