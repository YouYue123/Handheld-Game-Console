
import {blockType,blockShape} from './const.js'
export default class Block {
  constructor(props){
    this.shape = props.shape
    this.position = props.position
    this.rotationIndex = props.rotationIndex
  }
  moveLeft(){
    console.log('moveLeft')
  }
  moveRight(){
    console.log('moveRight')
  }
  fall(){
    this.position[0] += 1
    return{
      position: [this.position[0],this.position[1]],
      matrix: this.shape,
      rotationIndex: this.rotationIndex
    }
  }
}