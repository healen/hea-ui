<style type="text/less" lang="less">
  @import "../assets/less/index";
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29,29,31,0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
    .header-container{
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      height: 80px;
      justify-content: space-between;
    }
  }
</style>
<template>
  <header class="page-header" :style="$route.name === 'index' ? 'box-shadow:none' : 'box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)'">
    <div class="header-container">
      <router-link :to="{name: 'index'}">
        <span class="logo">
          <span>Hea</span><span>-ui</span>
        </span>
      </router-link>

      <router-link :to="{name: 'giud'}">组件</router-link>
    </div>
  </header>
</template>
<style lang="less" scoped>
  .logo{
    font-size: 30px;
    font-weight: bold;
    span{
      &:first-child{
        color: #00aeff;
      }
      &:last-child{
        color: #ff0000;
      }
    }
  }
</style>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>
