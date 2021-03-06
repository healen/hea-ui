# 栅格系统
----
### heaCol基础用法
使用```h-row```、作为父级标签 子级需要 ```h-col``` 来进行栅格化 基本栅格布局常用属性为 ```span``` 属性 一般分 24格。

<div class="demo-block">
  <h-row class="myclass">
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
      <h-col span="2">span:2</h-col>
  </h-row>
  <h-row class="myclass">
      <h-col span="12">span:12</h-col>
      <h-col span="12">span:12</h-col>
  </h-row>
  <h-row class="myclass">
      <h-col span="6">span:6</h-col>
      <h-col span="12">span:12</h-col>
      <h-col span="6">span:6</h-col>
  </h-row>

  <h-row class="myclass">
      <h-col span="1">1</h-col>
      <h-col span="23">span:23</h-col>
  </h-row>
</div>
<style lang="less" scoped>
  .myclass{
    padding: 0px 0px;
    margin-bottom: 4px;
    background: #eee;
    border-radius: 4px;
    .h-col{
      border-radius: 4px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      background-color: #4CD1FF;
      &:nth-child(2n){
        background-color:#F7BA2A;
      }
    }
  }
  
</style>

::: demo
```html

<h-row class="myclass">
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
  <h-col span="2">span:2</h-col>
</h-row>
<h-row class="myclass">
  <h-col span="12">span:12</h-col>
  <h-col span="12">span:12</h-col>
</h-row>
<h-row class="myclass">
  <h-col span="6">span:6</h-col>
  <h-col span="12">span:12</h-col>
  <h-col span="6">span:6</h-col>
</h-row>
<h-row class="myclass">
  <h-col span="1">1</h-col>
  <h-col span="23">span:23</h-col>
</h-row>

```
:::



### heaRow基础用法

使用```h-row```的```gutter``` 两侧拉伸偏移单位像素

<div class="demo-block">
  <h-row class="myclass">
      <h-col span="12">1</h-col>
      <h-col span="12">gutter:0</h-col>
  </h-row>
  <h-row class="myclass" gutter="20">
      <h-col span="12">1</h-col>
      <h-col span="12">gutter:20</h-col>
  </h-row>
   <h-row class="myclass" gutter="40">
      <h-col span="12">1</h-col>
      <h-col span="12">gutter:40</h-col>
  </h-row>
</div>



::: demo
```html

<h-row class="myclass">
    <h-col span="2">1</h-col>
    <h-col span="22">gutter:0</h-col>
</h-row>
<h-row class="myclass" gutter="20">
    <h-col span="2">1</h-col>
    <h-col span="22">gutter:20</h-col>
</h-row>
 <h-row class="myclass" gutter="40">
    <h-col span="2">1</h-col>
    <h-col span="22">gutter:40</h-col>
</h-row>

```
:::



<br />

使用```h-row```的```type=flex``` 改变布局模式，变成css3弹性盒子布局同时配合 ```pack``` 横向对其方式以及 ```align```  纵向对齐方式调整对齐

<div class="demo-block">
  
  <h-row class="myclass" type="flex" pack="center" align="center" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>

  <h-row class="myclass" type="flex" pack="start" align="center" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>


  <h-row class="myclass" type="flex" pack="end" align="end" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>

   <h-row class="myclass" type="flex" pack="between">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>

  </h-row>

  <h-row class="myclass" type="flex" pack="around">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>
   
</div>



::: demo
```html

<h-row class="myclass" type="flex" pack="center" align="center" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>
  <h-row class="myclass" type="flex" pack="start" align="center" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>
  <h-row class="myclass" type="flex" pack="end" align="end" style="height:100px">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>
  <h-row class="myclass" type="flex" pack="between">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>
  <h-row class="myclass" type="flex" pack="around">
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
      <h-col span="4">box</h-col>
  </h-row>

```
:::



## API 

### row Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| gutter     | 两边偏移量   | string  |   -  |    -    |
| type     | 布局类型   | string  |   flex  |    -    |
| align     | 垂直排布方式   | string  | start,center,end,between,around |    -     |
| pack     | 水平排布方式   | string  | start,center,end,stretch,baseline |    -     |



### col Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| span     | 栅格多少格 1=1/24   | string  |   -  |    -    |
| offset     | 左偏移量 以栅格为单位   | string  |     |    -    |
| push     | 左移 以栅格为单位   | -  | - |    -     |
| pull     | 左移 以栅格为单位   | -  | - |    -     |









