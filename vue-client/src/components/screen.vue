
<template>
    <div class="screen">
      <div class="panel">
         <gamingScreen />
         <statScreen />
         <timingScreen />
      </div>
    </div>
</template>

<script>
  export default{
    components: {
      gamingScreen: require('./gamingScreen.vue'),
      statScreen: require('./statScreen.vue'),
      timingScreen: require('./timingScreen.vue')
    }
  }
</script>

<style lang="less">
.screen{
  width: 390px;
  height: 478px;
  border: solid 5px;
  border-color: #987f0f #fae36c #fae36c #987f0f;
  margin: 0 auto;
  position: relative;
  .panel{
    width: 380px;
    height: 468px;
    margin: 0 auto;
    background: #9ead86;
    padding: 8px;
    border: 2px solid #494536;
  }
}
</style>
