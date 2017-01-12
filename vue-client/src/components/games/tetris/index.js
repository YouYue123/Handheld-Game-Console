import {blockShape,blockType} from './const.js'
import Block from './block.js'

export default class Tetris{
    constructor(props){
      this.$store = props
    }
    run(){
      const props = {
        shape: blockShape.I1,
        position:[-1,0],
        rotationIndex:0
      }
      const block = new Block(props)
      const refreshIntervalID = setInterval(()=>{
        this.$store.commit('GENERATE',block.fall())
      },500)
      setTimeout(()=>{
        clearInterval(refreshIntervalID)
      },5000)
    }
}
