<template>
  <div v-bind:class="buttonClass" v-bind:style="buttonStyle">
    <i  v-bind:style="{height:this.size,width:this.size}"/>
    <span v-bind:style="msgStyle"> {{this.msg}}</span>
    <span v-bind:class="arrowClass" v-bind:style="arrowStyle" />
  </div>
</template>

<script>
  const Direction = ["top","right","bottom","left"]
  export default{
    props:{
      size:{
        type: String,
        default: '100px'
      },
      btnColor: {
        type: String,
        default: 'blue'
      },
      arrowDirection:{
        type: String,
        default: 'top'
      },
      msg: {
        type: String,
        default: 'top'
      },
      msgPosition:{
        type: String,
        default: 'right'
      },
      arrowPosition:{
        type: String,
        default: 'bottom'
      },
      top:{
        type: String,
        default: '100px'
      },
      left:{
        type: String,
        default: '20px'
      }
    },
    computed: {
      buttonClass: function(){
        return "controlButton s1 " + this.btnColor
      },
      msgClass: function(){
        return this.msgPosition
      },
      arrowClass: function(){
        return this.arrowPosition + " " + this.arrowDirection + "Arrow"
      },
      buttonStyle: function(){
        return {
          top: this.top,
          left: this.left,
          heigth: this.size,
          width: this.size
        }
      },
      msgStyle: function(){
        const pos = Direction.indexOf(this.msgPosition)
        return {
          position: "absolute",
          fontWeight: "bold",
          top: pos===2?this.size+'px':"35px",
          left: pos===1?"120px":"15px"
        }
      },
      arrowStyle: function(){
        const pos = Direction.indexOf(this.arrowPosition)
        return{
          position: "absolute",
          top: pos===1 || pos===3?"40px":pos===0?"-40px":"125px",
          left: pos===0 || pos===2?"40px":pos===1?"100px":"-15px"
        }
      }
    }
  }
</script>

<style lang="less">
  @arrowSize: 10px;
  .background(@from, @to){
    background: (@from + @to)/2;
    background: -webkit-gradient(linear, left top, left bottom, from(@from), to(@to));
    background: -moz-linear-gradient(top,  @from,  @from);
    // IE9使用filter背景渐变, 但因为使用了borader-radius, 所以不兼容, IE9使用中和的背景色即可
    //filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='@{from}', endColorstr='@{to}');
  }

  .controlButton{
    position: absolute;
    text-align: center;
    color: #111;
    position: absolute;
    white-space: nowrap;
    line-height: 1.6;
    span.topArrow{
      width: 0;
      height: 0;
      border-left: @arrowSize solid transparent;
      border-right: @arrowSize solid transparent;
      border-bottom: 2*@arrowSize*0.866 solid black;
    }
    span.bottomArrow{
      width: 0;
      height: 0;
      border-left: @arrowSize solid transparent;
      border-right: @arrowSize solid transparent;
      border-top: 2*@arrowSize*0.866 solid black;
    }
    span.leftArrow{
      width: 0;
      height: 0;
      border-top: @arrowSize solid transparent;
      border-bottom: @arrowSize solid transparent;
      border-right: 2*@arrowSize*0.866 solid black;
    }
    span.rightArrow{
      width: 0;
      height: 0;
      border-top: @arrowSize solid transparent;
      border-bottom: @arrowSize solid transparent;
      border-left: 2*@arrowSize*0.866 solid black;
    }
    i{
      display: block;
      position: relative;
      border: 1px solid #000;
      border-radius: 50%;
      height: 100%;
      width: 100%;
      &:before, &:after{
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-radius:50%;
        box-shadow: 0 5px 10px rgba(255, 255, 255, .8) inset;
      }
      &:after{
        box-shadow: 0 -5px 10px rgba(0, 0, 0, .8) inset;
      }
      &.active{
        &:before{
          box-shadow: 0 -3px 6px rgba(255, 255, 255, .6) inset;
        }
        &:after{
          box-shadow: 0 5px 5px rgba(0, 0, 0, .6) inset;
        }
      }
      box-shadow: 0 3px 3px rgba(0, 0, 0, .2);

    }
    &.blue i{
      .background(#6e77ef, #4652f3);
    }
    &.green i{
      .background(#4bc441, #0ec400);
    }
    &.red i{
      .background(#dc3333, #de0000);
    }
    //3 types of button sizes definition
    &.s0 i{
      width: 160px;
      height: 160px;

    }
    &.s1 i{
      width: 100px;
      height: 100px;
    }
    &.s2 i{
      font-size: 16px;
      width: 52px;
      height: 52px;
      &:before, &:after{
        box-shadow: 0px 3px 6px rgba(255, 255, 255, .8) inset;
      }
      &:after{
        box-shadow: 0px -3px 6px rgba(0, 0, 0, .8) inset;
      }
      &.active{
        &:before{
          box-shadow: 0px -1px 2px rgba(255, 255, 255, .6) inset;
        }
        &:after{
          box-shadow: 0px 3px 3px rgba(0, 0, 0, .7) inset;
        }
      }
      box-shadow: 1px 1px 1px rgba(0, 0, 0, .2);
    }
    &.s1{
      em{
          display: block;
          width: 0;
          height: 0;
          border: 8px solid;
          border-color: transparent transparent #111;
          position: absolute;
          top: 50%;
          left: 50%;
          margin: -12px 0 0 -8px;
      }
    }
  }

</style>
