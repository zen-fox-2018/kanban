<template>
  <div>
    <div class="card my-5" style="width: 18rem;">
      <br>
      <h5 class="card-title mb-3">{{ title }}</h5>
      <!-- loop from this -->
      <div v-for="(task, index) in tasks" :key="`task-${index}`" class="card-body mb-1">
        <div class="card">
          <h5 class="card-title my-3">{{ task.title }}</h5>
          <hr>
          <div class="card-body">
              <h6>Point: {{ task.point }}</h6>
              <h6>Assigned To: {{ task.assigned_to }}</h6>
              <h6>Description: {{ task.description }}</h6>
              <h6>Point: {{ task.point }}</h6>
              <h6>Status: {{ task.status }}</h6>
              <br>
              <div class="row">
                  <a class="ml-4" @click="before(task)"><i class="fas fa-arrow-left fa-2x"></i></a>
                  <a class="mx-5" @click="hapus(task)"><i class="fas fa-trash fa-2x"></i></a>
                  <a class="" @click="after(task)"><i class="fas fa-arrow-right fa-2x"></i></a>
              </div>
              <br>
          </div>
        </div> 
      </div>
      <!-- to this -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['payload', 'title'],
  data() {
    return {
     tasks: [],
     modal: {},
    };
  },
  methods: {
    changeModal(val) {
      this.modal = val;
      if (val.status == 'BackLog') {
        this.show_left = false;
        this.show_right = true;
        this.after_button = 'To-Do';
      } 
      else if (val.status == 'ToDo') {
        this.show_left = true;
        this.show_right = true;
        this.before_button = 'BackLog';
        this.after_button = 'Doing';
      } 
      else if (val.status == 'Doing') {
        this.show_left = true;
        this.show_right = true;
        this.before_button = 'To-Do';
        this.after_button = 'Done';
      }
      else if (val.status == 'Done') {
        this.show_right = false;
        this.show_left = true;
        this.before_button = 'Doing';
      }
    },
    after(val) {
      this.$emit('next', val);
      console.log('masuk afterr')
      console.log(val, 'ini val dari after')
    },
    hapus(val) {
      console.log(val, 'masuk hapusm ini val dari hapus')
      this.$emit('hapusini', val);
    },
    before(val) { 
      console.log('masuk before ini val dari before', val)
      this.$emit('previous', val);
    }
  },
  watch: {
    payload(val) {
      console.log('masuk PAYLOAD NIH')
      this.tasks = val;

    },
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
