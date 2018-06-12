<template>
  <div  class="pg-index">
    <div class="index-container">
      <img src="../assets/img/logo.png">
      <p style="text-align: left">
        dj-ui 是一款比较成熟的前端组件和解决方案，基于vue开发，后续会发展成vue react任选的方案; 完美的解决了业务与视图之间的耦合关系组件化开发，效率更高，速度更快，无缝对接数据接口
      </p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{name: 'giud'}">开始使用</router-link>
        <a target="_blank" class="btn-github" href="https://github.com/healen/hea-ui">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        height: document.documentElement.clientHeight
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .pg-index {
    .index-container {
      width: 960px;
      margin: 0 auto;
      text-align: center;
      padding: 100px 0;
      p{
        margin-top: 56px;
        color: #8994C6;
        font-size: 32px;
      }
    }
    .separate-panel{
      position: relative;
      .about{
        position: absolute;
        width: 100%;
        height: 200px;
        top: 20px;
        z-index: 9;
        background: #fff;
        text-align: center;
        a {
          color: #fff;
          background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
          box-shadow: 0 2px 6px 0 rgba(51,105,231,0.4);
          display: inline-block;
          width: 190px;
          height: 56px;
          margin: 0 35px;
          font-size: 18px;
          line-height: 56px;
          border-radius: 28px;
          transition: all .3s;
          cursor: pointer;
        }
        .btn-github{
          color: #316DE9;
          border: 1px solid #2F6EE9;
          background: #fff;
          box-shadow: none;
        }
      }
    }
    .separate-panel:after{
      content: '';
      display: block;
      position: absolute;
      top: -80px;
      width: 100%;
      height: 250px;
      background: #fff;
      box-shadow: 0 -4px 30px 0 #DFE1E6;
      transform: skewY(-4deg);
    }
  }
</style>
