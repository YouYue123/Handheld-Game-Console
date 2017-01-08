<template>
  <div class="block" />
</template>

<script>
  export default {
    name: 'block'
    components:{
      brick: require('./block.vue')
    }
    method:{
        rotate: function(){
          console.log('rotate')
        },
        moveLeft: funtion(){
          console.log('moveLeft')
        },
        moveRight: function(){
          console.log('moveRight')
        },
        fall: function(){
          console.log('fall')
        }
    }
  }
</script>

<style lang="less">
</style>
