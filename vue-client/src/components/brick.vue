<template>
  <b />
</template>

<style lang="less">
  b {
    display: block;
    padding: 2px;
    border: 2px solid #879372;
    margin: 0 1px 0 1px;
    float: left;
    &:after{
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      background: #879372;
      overflow: hidden;
    }
    &.c{
      border-color: #000;
      &:after{
        background: #000;
      }
    }
    &.d{
      border-color: #560000;
      &:after{
        background: #560000;
      }
    }
  }
</style>
