# Button 按钮
----
### 基础用法
使用```type```、```plain``` 和 ```round``` 属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <h-button>默认按钮</h-button>
    <h-button type="primary">主要按钮</h-button>
    <h-button type="success">成功按钮</h-button>
    <h-button type="info">信息按钮</h-button>
    <h-button type="warning">警告按钮</h-button>
    <h-button type="danger">危险按钮</h-button>
  </div>
  <div class="m-10">
    <h-button plain>朴素按钮</h-button>
    <h-button type="primary" plain>主要按钮</h-button>
    <h-button type="success" plain>成功按钮</h-button>
    <h-button type="info" plain>信息按钮</h-button>
    <h-button type="warning" plain>警告按钮</h-button>
    <h-button type="danger" plain>危险按钮</h-button>
  </div>
  <div class="m-10">
    <h-button round>圆形按钮</h-button>
    <h-button type="primary" round>主要按钮</h-button>
    <h-button type="success" round>成功按钮</h-button>
    <h-button type="info" round>信息按钮</h-button>
    <h-button type="warning" round>警告按钮</h-button>
    <h-button type="danger" round>危险按钮</h-button>
  </div>
</div>

::: demo
```html

<div>
  <h-button>默认按钮</h-button>
  <h-button type="primary">主要按钮</h-button>
  <h-button type="success">成功按钮</h-button>
  <h-button type="info">信息按钮</h-button>
  <h-button type="warning">警告按钮</h-button>
  <h-button type="danger">危险按钮</h-button>
</div>
<div>
  <h-button plain>朴素按钮</h-button>
  <h-button type="primary" plain>主要按钮</h-button>
  <h-button type="success" plain>成功按钮</h-button>
  <h-button type="info" plain>信息按钮</h-button>
  <h-button type="warning" plain>警告按钮</h-button>
  <h-button type="danger" plain>危险按钮</h-button>
</div>
<div>
  <h-button round>圆形按钮</h-button>
  <h-button type="primary" round>主要按钮</h-button>
  <h-button type="success" round>成功按钮</h-button>
  <h-button type="info" round>信息按钮</h-button>
  <h-button type="warning" round>警告按钮</h-button>
  <h-button type="danger" round>危险按钮</h-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <h-button disabled>默认按钮</h-button>
    <h-button type="primary" disabled>主要按钮</h-button>
    <h-button type="success" disabled>成功按钮</h-button>
    <h-button type="info" disabled>信息按钮</h-button>
    <h-button type="warning" disabled>警告按钮</h-button>
    <h-button type="danger" disabled>危险按钮</h-button>
  </div>
  <div class="m-10">
    <h-button plain disabled>朴素按钮</h-button>
    <h-button type="primary" plain disabled>主要按钮</h-button>
    <h-button type="success" plain disabled>成功按钮</h-button>
    <h-button type="info" plain disabled>信息按钮</h-button>
    <h-button type="warning" plain disabled>警告按钮</h-button>
    <h-button type="danger" plain disabled>危险按钮</h-button>
  </div>
</div>

::: demo
```html

<div>
  <h-button disabled>默认按钮</h-button>
  <h-button type="primary" disabled>主要按钮</h-button>
  <h-button type="success" disabled>成功按钮</h-button>
  <h-button type="info" disabled>信息按钮</h-button>
  <h-button type="warning" disabled>警告按钮</h-button>
  <h-button type="danger" disabled>危险按钮</h-button>
</div>
<div class="m-10">
  <h-button plain disabled>朴素按钮</h-button>
  <h-button type="primary" plain disabled>主要按钮</h-button>
  <h-button type="success" plain disabled>成功按钮</h-button>
  <h-button type="info" plain disabled>信息按钮</h-button>
  <h-button type="warning" plain disabled>警告按钮</h-button>
  <h-button type="danger" plain disabled>危险按钮</h-button>
</div>
  
```
:::


### 带loading按钮

<div class="demo-block">
  <h-button loading>默认按钮</h-button>
  <h-button type="primary" loading>主要按钮</h-button>
  <h-button type="success" loading>成功按钮</h-button>
  <h-button type="info" loading>信息按钮</h-button>
  <h-button type="warning" loading>警告按钮</h-button>
  <h-button type="danger" loading>危险按钮</h-button>
</div>

::: demo
```html

<h-button loading>默认按钮</h-button>
<h-button type="primary" loading>主要按钮</h-button>
<h-button type="success" loading>成功按钮</h-button>
<h-button type="info" loading>信息按钮</h-button>
<h-button type="warning" loading>警告按钮</h-button>
<h-button type="danger" loading>危险按钮</h-button>

```
:::



### 按钮组合

<div class="demo-block">
  <h-button-group>
    <h-button type="primary">1</h-button>
    <h-button type="primary">2</h-button>
    <h-button type="primary">3</h-button>
    <h-button type="primary">4</h-button>
    <h-button type="primary">4</h-button>
  </h-button-group>
  
</div>

::: demo
```html

<h-button-group>
  <h-button type="primary">1</h-button>
  <h-button type="primary">2</h-button>
  <h-button type="primary">3</h-button>
  <h-button type="primary">4</h-button>
  <h-button type="primary">4</h-button>
</h-button-group>

```
:::







### 带icon的按钮

按钮中加入属性 ```icon``` 值为 ```现有图标库``` 就是带icon的按钮

<div class="demo-block">
  <div>
    <h-button icon="heart1" type="danger">小姐姐给我个爱心吧</h-button>
    <h-button type="primary" icon="clouddownload-o">下载</h-button>
    <h-button type="success" icon="cloudupload-o">上传</h-button>
    <h-button type="info" icon="eye-o">睁开眼</h-button>
    <h-button type="warning" icon="eye-close">闭上眼</h-button>
    <h-button type="danger" icon="angular">Angular</h-button>
  </div>
</div>

::: demo
```html

<div>
  <h-button icon="heart1" type="danger">小姐姐给我个爱心吧</h-button>
  <h-button type="primary" icon="clouddownload-o">下载</h-button>
  <h-button type="success" icon="cloudupload-o">上传</h-button>
  <h-button type="info" icon="eye-o">睁开眼</h-button>
  <h-button type="warning" icon="eye-close">闭上眼</h-button>
  <h-button type="danger" icon="angular">Angular</h-button>
</div>


  
```
:::




### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <h-button>默认尺寸</h-button>
  <h-button size="medium">中等按钮</h-button>
  <h-button size="small">小型按钮</h-button>
</div>

::: demo
```html

<h-button>默认尺寸</h-button>
<h-button size="medium">中等按钮</h-button>
<h-button size="small">小型按钮</h-button>

```
:::





### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
