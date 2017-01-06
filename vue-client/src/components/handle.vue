<template>
    <div id="handle">
      <controlButton btnColor='blue' msg='QUICK LEVELS+' direction='left'/>
    </div>
</template>

<script>
  export default{
    components:{
      controlButton: require('./controlButton.vue')
    }
  }
</script>
<style lang="less">
  #handle{
    width: 580px;
    height: 330px;
    margin: 20px auto 0;
    position:relative;
  }
</style>
