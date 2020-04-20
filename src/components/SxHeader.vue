<template>
  <header class="mint-header " :class="{'is-fixed':fixed }">
    <div class="mint-header-button is-left"></div>
    <h1 class="mint-header-title">{{title}}</h1>
    <div class="mint-header-button is-right">
      <slot name="right"></slot>
    </div>

  </header>
</template>
<script>
    export default{
        name: '',
        props:{
            fixed:{
                type:Boolean,
                default:false
            },
          title:{
                type:String,
            default:''
          }
        },

    }
</script>
<style  lang = "less" scoped >

  .mint-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #ffffff;
    box-sizing: border-box;
    color: #222;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }
  .mint-header .mint-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit
  }
  .mint-header .mint-button::after {
    content: none;
  }
  .mint-header.is-fixed {
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
  }
  .mint-header-button {
    -webkit-box-flex: .5;
    -ms-flex: .5;
    flex: .5;
  }
  .mint-header-button > a {
    color: inherit;
  }
  .mint-header-button.is-right {
    text-align: right;
  }
  .mint-header-button.is-left {
    text-align: left;
  }
  .mint-header-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: inherit;
    font-weight: 400;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }


</style>
<style>
  .mint-header+div{
    margin-top: 50px;}
</style>
