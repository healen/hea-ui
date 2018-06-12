<style lang="less" type="text/less" scoped>
  .page-footer {
    padding: 30px 0 30px;
    color: #6190E8;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.8);
    .footer-container{
      width: 90%;
      margin: 0 auto;
    }
    .text-left {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #5e6d82;
      img{
        border-radius: 100%;
        margin-right: 10px;
      }
      a {
        color: #6190E8;
      }
    }
  }

</style>

<template>
  <div class="page-footer">
    <div class="footer-container">
      <div type="flex" justify="space-between">
        <div class="text-left">
          <a href="https://healen.github.io/heaUi">
            <img src="../assets/img/avater.png" width="80">
          </a>
          <div>
            <p>author: healen</p>
            <p>email: live_web@126.com </p>
            <p>github: <a href="https://github.com/healen/hea-ui">https://github.com/healen/hea-ui</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
