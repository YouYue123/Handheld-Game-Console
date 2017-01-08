<template>
    <div class="gamingScreen">
        <p v-for="subMatrix in matrix">
          <brick v-for="item in subMatrix" v-bind:class="item===1?'none':'c'"/>
        </p>
    </div>
</template>

<script>
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
      generate: function(type){
        this.$store.commit('GENERATE',{type:type})
      }
    },
    mounted: function(){
       this.generate('I1');
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
