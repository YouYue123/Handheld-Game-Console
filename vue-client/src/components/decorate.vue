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
      <h1>Game Name</h1>
      <div class="view">
      </div>
    </div>
</template>

<script>
  export default{
    name: 'decorate',

  }
</script>

<style lang="less">

  .l {
    float: left;
  }
  .r{
    float: right;
  }
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
