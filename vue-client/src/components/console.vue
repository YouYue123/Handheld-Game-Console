<template>
  <div id="console">
    <div class="rect">
        <decorate />
        <screen />
    </div>
    <handle />
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
      decorate: require('./decorate.vue'),
      screen: require('./screen.vue'),
      handle: require('./handle.vue')
    }
  }
</script>

<style lang="less">

#console{
  width: 640px;
  height: 100%;
  padding-top: 42px;
  box-shadow: 0 0 10px #fff inset;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -480px 0 0 -320px;
  background: #efcc19;
}

.rect{
  width: 480px;
  padding: 45px 0 35px;
  border: #000 solid;
  border-width: 0 10px 10px;
  margin: 0 auto;
  position: relative;
  &.drop{ -webkit-transform:translateY(5px);transform:translateY(5px); }

}

</style>
