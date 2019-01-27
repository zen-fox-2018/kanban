<template>
  <div class="row">
     <!-- modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" >Detail Task : {{$store.state.selectedDetails.title}} </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="createTask"  >
              <strong>
              Task Description:{{$store.state.selectedDetails.description}}
              </strong> <br>
              <br>
              <strong>
              Points:{{$store.state.selectedDetails.points}}
              </strong> <br>
              <strong>
              Status:{{$store.state.selectedDetails.status}}
              </strong> <br>
            </form>
          </div>
          <div class="modal-footer">
            <!--conditionally show kanban buttons -->
            <span id="Back-Log"  @click="$store.commit('moveTask', $event.target)" v-if="eventType !=='Doing' && eventType !=='Done' && eventType !=='Back-Log'" class=" btn btn-sm btn-warning"> Back-Log </span>
            <span  @click="$store.commit('deleteTask', $event.target)" class=" btn btn-sm btn-danger" > Delete </span>
            <span id="To-Do"   @click="$store.commit('moveTask', $event.target.id)" v-if="eventType !=='Done' && eventType !=='To-Do' " class=" btn btn-sm btn-info"> To-Do </span>
            <span id="Doing"   @click="$store.commit('moveTask', $event.target.id)" v-if="eventType !=='Back-Log' && eventType !=='Doing'" class=" btn btn-sm btn-success"> Doing </span>
            <span id="Done"   @click="$store.commit('moveTask', $event.target.id)" v-if="eventType !=='Back-Log' && eventType !=='To-Do' && eventType !=='Done'" class=" btn btn-sm btn-primary"> Done </span>
          </div>
        </div>
      </div>
    </div>
    <!--cards -->
    <div class="col-6 col-lg-2 m-2">
      <div class="card-head" style="background-color:red">
        Back-Log
      </div>
      <div  v-for="(val,key) in backLog" :key="key" class="card-bordered m-2 pb-2" style="background-color:whitesmoke">
        <div class="card-head" style="background-color:red">
        {{val.title}}
        <hr>
        </div>
        <p>Points: {{val.points}}</p>
        <p>Assigned To: {{val.assigned}}</p>
        <span :id=key @click="setSelected('/Back-Log/'+$event.target.id)" class=" btn btn-primary" data-toggle="modal" data-target="#detailModal"> Show Detail </span>
      </div>
    </div>
     
     <div class="col-6 col-lg-2 m-2">
      <div class="card-head" style="background-color:orange">
        To-Do
      </div>
      <div v-for="(val,key) in toDo" :key="key"  class="card-bordered m-2 pb-2" style="background-color:whitesmoke">
        <div class="card-head" style="background-color:orange">
          {{val.title}}
        <hr>
        </div>
        <p>Points: {{val.points}} </p>
        <p>Assigned To: {{val.assigned}} </p>
        <span :id=key @click="setSelected('/To-Do/'+$event.target.id)" class=" btn btn-primary" data-toggle="modal" data-target="#detailModal"> Show Detail </span>
      </div>
    </div>
     <div class="col-6 col-lg-2 m-2">
      <div class="card-head" style="background-color:limegreen">
        Doing
      </div>
      <div v-for="(val,key) in doing" :key="key"  class="card-bordered m-2 pb-2" style="background-color:whitesmoke">
        <div class="card-head" style="background-color:limegreen">
         {{val.title}}
        <hr>
        </div>
        <p>Points: {{val.points}} </p>
        <p>Assigned To: {{val.assigned}} </p>
        <span :id=key @click="setSelected('/Doing/'+$event.target.id)" class=" btn btn-primary" data-toggle="modal" data-target="#detailModal"> Show Detail </span>
      </div>
    </div>
    <div class="col-6 col-lg-2 m-2">
      <div class="card-head" style="background-color:navy">
        Done
      </div>
      <div v-for="(val,key) in done" :key="key"  class="card-bordered m-2 pb-2" style="background-color:whitesmoke">
        <div class="card-head" style="background-color:navy">
         {{val.title}}
        <hr>
        </div>
        <p>Points: {{val.points}} </p>
        <p>Assigned To: {{val.assigned}} </p>
        <span :id=key @click="setSelected('/Done/'+$event.target.id)" class=" btn btn-primary" data-toggle="modal" data-target="#detailModal"> Show Detail </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Main',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      setSelected(path) {
        this.$store.commit('getSelectedDetails', path);
        this.$store.state.selected.id= path.split('/')[2];
        this.$store.state.selected.type= path.split('/')[1];
        this.$store.state.selected.path= path;
      
      }
    },
    computed: {
      eventType() {
        console.log('store selected', this.$store.state.selected.type )
        return this.$store.state.selected.type
      },
      backLog() {
        return this.$store.state.backLog
      },
      toDo() {
        return this.$store.state.toDo
      },
      doing() {
        return this.$store.state.doing
      },
      done() {
        return this.$store.state.done
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
