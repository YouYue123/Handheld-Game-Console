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
    nextOne: true,
    gameOver: false
  },
  mutations:{
    [GENERATE](state,payload){
      const x = payload.position[0]
      const y = payload.position[1]
      const matrix = payload.matrix
      console.log(payload)
      let setStatic = isConflict(state.staticMatrix,matrix,x,y)
      if(setStatic == true){
        if( isGameOver(matrix,x-1) == true){
          console.log('fucking gameOver Stupid Pig')
        }
        else{
          setMatrix(state.staticMatrix,matrix,x-1,y)
          // setMatrix(state.resultMatrix,state.staticMatrix,0,0)
          state.nextOne = true
        }
      }
      else{
        setMatrix(state.resultMatrix,state.staticMatrix,0,0)
        setMatrix(state.resultMatrix,matrix,x,y)
        state.nextOne = false
      }

    }
  }
})

function isGameOver(matrix,x){
  const height = matrix.length
  if(x + height == 0){
    return true
  }
  else{
    return false
  }
}

function isConflict(ori,target,x,y){
  for(let i=0;i<target.length;i++){
    for(let j=0;j<target[i].length;j++){
      if( x >= height || (target[i][j] == 1 && ori[i+x][j+y] == 1)){
          return true
      }
    }
  }
  return false
}

function setMatrix(ori,target,x,y){
  for(let i=0;i<target.length;i++){
    for(let j=0;j<target[i].length;j++){
      Vue.set(ori[i+x],j+y,target[i][j])
    }
  }
}

export default store
