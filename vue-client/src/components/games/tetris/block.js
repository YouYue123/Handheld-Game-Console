
import {blockType,blockShape} from './const.js'
export default class Block {
  constructor(){
    this.generateProps()
  }
  moveLeft(){
    console.log('moveLeft')
  }
  moveRight(){
    console.log('moveRight')
  }
  fall(){
    this.position[0] += 1
    return {
      position: [this.position[0],this.position[1]],
      matrix: this.shape,
      rotationIndex: this.rotationIndex
    }
  }
  generateProps(){
    // const props = {
    //   shape: blockShape.I1,
    //   position:[-1,0],
    //   rotationIndex:0
    // }
    //const shapeIndex = Math.floor(Math)
    this.shape = blockShape.I1
    this.position = [-1,Math.floor(Math.random()* (11-this.shape[0].length))]
    this.rotationIndex = Math.floor(Math.random()*2)
  }
}
