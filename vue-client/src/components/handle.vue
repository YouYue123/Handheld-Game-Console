<template>
    <div id="handle">
      <controlButton btnColor='blue' msg='QUICK LEVELS+' msgPosition='right' arrowPosition='bottom' arrowDirection='top' top='70px' left='80px'/>
      <controlButton btnColor='blue' msg='QUICK LEVELS-' msgPosition='bottom' arrowPosition='top' arrowDirection='bottom' top='280px' left='80px'/>
      <controlButton btnColor='blue' msg='SPEED-' msgPosition='bottom' arrowPosition='right' arrowDirection='left' top='175px' left='0px'/>
      <controlButton btnColor='blue' msg='SPEED+' msgPosition='bottom' arrowPosition='left' arrowDirection='right' top='175px' left='160px'/>

      <controlButton btnColor='blue' msg='Rotate Direction' msgPosition='bottom' arrowDirection='none' top='155px' left='400px' size='160px'/>
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
