import Vue from 'vue'
import Vuex from 'vuex'
import {GENERATE} from './mutationType.js'
Vue.use(Vuex)

function initializeMatrix(){
  const initMatrix = []
  for(var i=0; i< 22;i++){
    const tempMatrix = []
    for(var j=0; j<11;j++){
        tempMatrix.push(0)
    }
    initMatrix.push(tempMatrix)
  }
  return initMatrix
}


const store = new Vuex.Store({
  strict: true,
  state:{
    matrix: initializeMatrix(),
    staticMatrix: initializeMatrix()
  },
  getters:{

  },
  mutations:{
    [GENERATE](state,payload){
      const x = payload.position[0]
      const y = payload.position[1]
      state.matrix = initializeMatrix()
      for(var i=0;i<payload.matrix.length;i++){
        state.matrix[x+i].splice.apply(state.matrix[x+i],[y,payload.matrix[i].length].concat(payload.matrix[i]))
      }
    }
  }
})

export default store
