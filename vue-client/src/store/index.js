import Vue from 'vue'
import Vuex from 'vuex'
import {GENERATE} from './mutationType.js'
Vue.use(Vuex)
const height = 22
const width = 11
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
    staticMatrix: initializeMatrix(),
    resultMatrix: initializeMatrix(),
    nextOne: true
  },
  mutations:{
    [GENERATE](state,payload){
      const x = payload.position[0]
      const y = payload.position[1]
      const matrix = payload.matrix
      let setStatic = false
      for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
          if( (matrix[i][j] == 1 && state.staticMatrix[i+x][j+y] == 1) || x>=height){
              setStatic = true
          }
        }
      }
      if(setStatic == true){
        setMatrix(state.staticMatrix,matrix,x,y)
        nextOne = true
      }
      setMatrix(state.resultMatrix,state.staticMatrix,0,0)
      setMatrix(state.resultMatrix,matrix,x,y)
      // for(let i=0;i<matrix.length;i++){
      //   for(let j=0;j<matrix[i].length;j++){
      //     Vue.set(state.resultMatrix[i+x],j+y,matrix[i][j])
      //   }
      // }

    }
  }
})

function setMatrix(ori,target,x,y){
  for(let i=0;i<target.length;i++){
    for(let j=0;j<target[i].length;j++){
      Vue.set(ori[i+x],j+y,target[i][j])
    }
  }
}

export default store
