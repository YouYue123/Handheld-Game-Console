import {blockShape,blockType} from './const.js'
import Block from './block.js'

export default class Tetris{
    constructor(props){
      this.$store = props
    }
    run(){
      const block = new Block()
      const gameRunTime = setInterval(()=>{
          if(this.$store.state.nextOne == false){
            this.$store.commit('GENERATE',this.block.fall())
          }
          else{
            this.block = new Block()
            this.$store.commit('GENERATE',this.block.fall())
          }
      },30)
    }

    pause(gameRunTime){
      clearInterval(gameRunTime)
    }
    // isConflict(next){
    //   const state = this.$store.state.staticMatrix
    //   const xOffset = block.position[0]
    //   const yOffset = block.position[1]
    //   for(let i=0;i<next.matrix.length;i++)
    //     for(let j=0;j<next.matrix[i].length;j++){
    //       if(state[i+xOffset][j+yOffset]==1 && next.matrix[i][j] == 1){
    //         return true
    //       }
    //     }
    //   return false
    // }
    // updateStaticMatrix(block){
    //   const state = this.$store.state.staticMatrix
    //   for(let i=0;i<block.matrix.length;i++)
    //     for(let j=0;j<block.matrix.length;j++){
    //       if(block.matrix[i][j] == 1){
    //           state[]
    //       }
    //     }
    // }
}
