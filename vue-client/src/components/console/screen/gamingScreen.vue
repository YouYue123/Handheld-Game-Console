<template>
    <div class="gamingScreen">
        <p v-for="subMatrix in matrix">
          <brick v-for="item in subMatrix" v-bind:class="item===0?'none':'c'"/>
        </p>
    </div>
</template>

<script>
  import Tetris from '../../games/tetris'
  export default{
    name: 'gamingScreen',
    components:{
      brick: require('../../helpers/brick.vue')
    },
    computed: {
      matrix: function(){
        return this.$store.state.resultMatrix
      }
    },
    mounted: function(){
      const game = new Tetris(this.$store)
      game.run()
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
