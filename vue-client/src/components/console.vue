<template>
  <div id="console">
  </div>

</template>

<script>
  export default {
    name: 'console',
    data(){
      return{
        gameMode : 1,
        volumn : 1,
        level : 0,
        score: 0,
        speed: 0
      }
    }
  }
</script>

<style>
  #console{
    background-color:yellow;
    height: 100%;
    width:100%;
  }
</style>
