<template>
  <div>
    <div>
     <card v-bind:state="state" v-for="(item, index) in data" :key="index" v-bind:item="item"></card>
    </div>
  </div>
</template>

<script>
import card from './Card';

export default {
  props: ["data", "state"],
  components: {
    card
  },
  data() {
    return {
      //
    };
  },
};
</script>
