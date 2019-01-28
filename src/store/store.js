import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex);
import firebaseApp from '../../config/app.js'
const db = firebaseApp.database()
const dbRef = db.ref('/');
export const store = new Vuex.Store({
  state: {
    backLog :{},
    toDo: {},
    doing: {},
    done: {},
    selected:{
      id:'',
      type:'',
      path:''
    },
    selectedDetails:{},
    newTask:{
      title:'',
      description:'',
      points: 0,
      assigned:'',
      status:'backlog'
    }
  }, 
  mutations: {
    deleteTask(state) {
      $('#detailModal').modal('hide');
      let taskRef=db.ref(state.selected.path);
      taskRef.remove();
    },
    moveTask(state, moveTo) {
      $('#detailModal').modal('hide');
      let taskRef=db.ref(state.selected.path);
      let movedTask;
      taskRef.update({
        "status":moveTo
      })
      taskRef.once('value', function(snapshot) {
        movedTask=snapshot.val();
      })
      taskRef.remove();
      let newKey = db
          .ref()
          .child('/'+moveTo+'/')
          .push().key;
      db.ref('/'+moveTo+'/'+newKey).set(movedTask);
    },
    createTask() {
      let newKey = db
          .ref()
          .child(`/Back-Log/`)
          .push().key;
      db.ref('/Back-Log/'+newKey).set(this.state.newTask);
    },
    getSelectedDetails(state,path) {
      db.ref(path).once('value', function(snapshot) {
        state.selectedDetails= snapshot.val()
      })
    }
  } 
})

dbRef.on('value', function(snapshot) {
  Object.values(snapshot.val()['Back-Log']) !== undefined ? store.state.backLog = snapshot.val()["Back-Log"] : null
  Object.values(snapshot.val()["To-Do"])   !== undefined ? store.state.toDo = snapshot.val()["To-Do"] : null
  Object.values(snapshot.val().Doing) !== undefined ?  store.state.doing = snapshot.val().Doing : null
  Object.values(snapshot.val().Done)   !== undefined ? store.state.done = snapshot.val().Done : null
  }, function(err) {
    console.log(err)
})
