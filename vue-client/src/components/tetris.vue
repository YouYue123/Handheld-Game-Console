<template>
  <div id="tetris">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'tetris',
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  }
}
</script>

<style>
  #tetris{
    background-color: yellow;
    width: 100%;
    height: 100%;
  }
</style>
