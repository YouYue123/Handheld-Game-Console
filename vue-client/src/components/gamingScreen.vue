<template>
    <div class="gamingScreen">
        <p v-for="subMatrix in matrix">
          <brick v-for="item in subMatrix" v-bind:class="item===0?'none':'c'"/>
        </p>
    </div>
</template>

<script>
  import {blockType,blockShape} from './const.js'
  import Block from './block.js'
  export default{
    name: 'gamingScreen',
    components:{
      brick: require('./brick.vue')
    },
    computed: {
      matrix: function(){
        return this.$store.state.matrix
      }
    },
    methods: {
      generate: function(metaDescription){
        this.$store.commit('GENERATE',metaDescription)
      }
    },
    mounted: function(){
       const option = {
         shape: blockType[0],
         position: [-1,0],
         rotationIndex: 0
       }
       const block = new Block(option)
      //  setInterval(()=>{
      //    this.generate(block.fall())
      //  },1000)
    }
  }
</script>

<style lang='less'>
  .gamingScreen{
    border: 2px solid #000;
    padding: 3px 1px 1px 3px;
    width: 250px;
    height: 450px;
    p{
      width: 250px;
      heigth: 22px;
    }
  }
</style>
