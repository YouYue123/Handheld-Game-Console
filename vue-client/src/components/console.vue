<template>
  <div id="console">
    <decorate />
  </div>

</template>

<script>
  export default {
    name: 'console',
    data: function(){
      return{
        gameMode : 1,
        volumn : 1,
        level : 0,
        score: 0,
        speed: 0
      }
    },
    components: {
      decorate: require('./decorate.vue')
    }
  }
</script>

<style>
  #console{
    background: #009688;
    padding: 0;
    margin: 0;
    height: 100%;
  }


</style>
