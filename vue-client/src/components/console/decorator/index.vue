<template>
    <div class="decorate">
      <div class="topBorder">
        <span class="first l mr" />
        <span class="l mr" />
        <span class="l mr" />
        <span class="l mr" />
        <span class="l mr" />
        <span class="first r ml"/>
        <span class="r ml" />
        <span class="r ml" />
        <span class="r ml" />
        <span class="r ml" />
      </div>
      <h1>{{gameName}}</h1>
      <div class="view">
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <p />
        <em />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <p />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <p />
        <block class="c" />
        <em />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <p />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <em />
        <div class="clear" />
        <block class="c" />
        <p />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
      </div>
      <div class="l view">
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <p />
        <em />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <p />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <p />
        <block class="c" />
        <em />
        <div class="clear" />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <p />
        <block class="c" />
        <block class="c" />
        <div class="clear" />
        <block class="c" />
        <em />
        <div class="clear" />
        <block class="c" />
        <p />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
        <em />
        <block class="c" />
        <div class="clear" />
      </div>
    </div>
</template>

<script>
  export default{
    name: 'decorate',
    data: function(){
      return {
        gameName: 'BRICK GAME'
      }
    },
    components:{
      block: require('../../helpers/brick.vue')
    }
  }
</script>

<style lang="less">
  .decorate{
    h1{
      position: absolute;
      width: 100%;
      text-align: center;
      font-weight: normal;
      top: -12px;
      left: 0;
      margin: 0;
      padding: 0;
      font-size: 30px;
    }
    .topBorder{
      position:absolute;
      height:10px;
      width:100%;
      position:absolute;
      top:0px;
      left:0px;
      overflow:hidden;
      span{
        display:block;
        width:10px;
        height:10px;
        overflow:hidden;
        background:#000;
        &.first{
          width: 40px;
        }
        &.mr{
          margin-right:10px;
        }
        &.ml{
          margin-left:10px;
        }
      }
    }
    .view{
      position: absolute;
      right: -70px;
      top: 20px;
      width: 44px;
      em {
        display: block;
        width: 22px;
        height: 22px;
        overflow: hidden;
        float: left;
      }
      p {
        height: 22px;
        clear: both;
      }
      &.l{
        right: auto;
        left: -70px;
      }
    }
  }
</style>
