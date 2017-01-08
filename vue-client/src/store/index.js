import Vue from 'vue'
import Vuex from 'vuex'
import {GENERATE} from './mutationType.js'
Vue.use(Vuex)

const initMatrix = []

for(var i=0; i< 11;i++){
  const tempMatrix = []
  for(var j=0; j<22;j++){
      tempMatrix.push(1)
  }
  initMatrix.push(tempMatrix)
}


const store = new Vuex.Store({
  strict: true,
  state:{
    matrix: initMatrix
  },
  getters:{

  },
  mutations:{
    [GENERATE](state,payload){
      switch(payload.type){
        case 'I1':
          console.log('generate I1')
          const rand = Math.floor(Math.random()*7)
          for(var i =0;i<4;i++){
            state.matrix[0].splice(rand+i,1,0)
          }
      }
    }
  }
})

export default store
