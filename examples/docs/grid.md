# 栅格系统
----
### 基础用法
使用```hea-row```、作为父级标签 子级需要 ```hea-col``` 来进行栅格化 基本栅格布局常用属性为 ```span``` 属性 一般分 24格。

<div class="demo-block">
  <hea-row class="myclass">
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
      <hea-col span="2">span:2</hea-col>
  </hea-row>
  <hea-row class="myclass">
      <hea-col span="12">span:12</hea-col>
      <hea-col span="12">span:12</hea-col>
  </hea-row>
  <hea-row class="myclass">
      <hea-col span="6">span:6</hea-col>
      <hea-col span="12">span:12</hea-col>
      <hea-col span="6">span:6</hea-col>
  </hea-row>

  <hea-row class="myclass">
      <hea-col span="1">1</hea-col>
      <hea-col span="23">span:23</hea-col>
  </hea-row>
</div>
<style lang="less" scoped>
  .myclass{
    padding: 0px 0px;
    margin-bottom: 4px;
    background: #eee;
    border-radius: 4px;
    .hea-col{
      border-radius: 4px;
      text-align: center;
      background-color: #4CD1FF;
      &:nth-child(2n){
        background-color:#F7BA2A;
      }
    }
  }
  
</style>

::: demo
```html

<hea-row class="myclass">
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
  <hea-col span="2">span:2</hea-col>
</hea-row>
<hea-row class="myclass">
  <hea-col span="12">span:12</hea-col>
  <hea-col span="12">span:12</hea-col>
</hea-row>
<hea-row class="myclass">
  <hea-col span="6">span:6</hea-col>
  <hea-col span="12">span:12</hea-col>
  <hea-col span="6">span:6</hea-col>
</hea-row>
<hea-row class="myclass">
  <hea-col span="1">1</hea-col>
  <hea-col span="23">span:23</hea-col>
</hea-row>

```
:::

