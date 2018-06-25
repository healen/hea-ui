# Input 输入框
----
### 基础用法

<div class="demo-block">
  <div>
    <hea-input v-model="value"></hea-button>
  </div>
</div>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
::: demo
```html

<div>
    <hea-input v-model="value"></hea-button>
  </div>
<div>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <hea-button disabled>默认按钮</hea-button>
    <hea-button type="primary" disabled>主要按钮</hea-button>
    <hea-button type="success" disabled>成功按钮</hea-button>
    <hea-button type="info" disabled>信息按钮</hea-button>
    <hea-button type="warning" disabled>警告按钮</hea-button>
    <hea-button type="danger" disabled>危险按钮</hea-button>
  </div>
  <div class="m-10">
    <hea-button plain disabled>朴素按钮</hea-button>
    <hea-button type="primary" plain disabled>主要按钮</hea-button>
    <hea-button type="success" plain disabled>成功按钮</hea-button>
    <hea-button type="info" plain disabled>信息按钮</hea-button>
    <hea-button type="warning" plain disabled>警告按钮</hea-button>
    <hea-button type="danger" plain disabled>危险按钮</hea-button>
  </div>
</div>

::: demo
```html

<div>
  <hea-button disabled>默认按钮</hea-button>
  <hea-button type="primary" disabled>主要按钮</hea-button>
  <hea-button type="success" disabled>成功按钮</hea-button>
  <hea-button type="info" disabled>信息按钮</hea-button>
  <hea-button type="warning" disabled>警告按钮</hea-button>
  <hea-button type="danger" disabled>危险按钮</hea-button>
</div>
<div class="m-10">
  <hea-button plain disabled>朴素按钮</hea-button>
  <hea-button type="primary" plain disabled>主要按钮</hea-button>
  <hea-button type="success" plain disabled>成功按钮</hea-button>
  <hea-button type="info" plain disabled>信息按钮</hea-button>
  <hea-button type="warning" plain disabled>警告按钮</hea-button>
  <hea-button type="danger" plain disabled>危险按钮</hea-button>
</div>
  
```
:::


### 带loading按钮

<div class="demo-block">
  <hea-button loading>默认按钮</hea-button>
  <hea-button type="primary" loading>主要按钮</hea-button>
  <hea-button type="success" loading>成功按钮</hea-button>
  <hea-button type="info" loading>信息按钮</hea-button>
  <hea-button type="warning" loading>警告按钮</hea-button>
  <hea-button type="danger" loading>危险按钮</hea-button>
</div>

::: demo
```html

<hea-button loading>默认按钮</hea-button>
<hea-button type="primary" loading>主要按钮</hea-button>
<hea-button type="success" loading>成功按钮</hea-button>
<hea-button type="info" loading>信息按钮</hea-button>
<hea-button type="warning" loading>警告按钮</hea-button>
<hea-button type="danger" loading>危险按钮</hea-button>

```
:::



### 按钮组合

<div class="demo-block">
  <hea-button-group>
    <hea-button type="primary">1</hea-button>
    <hea-button type="primary">2</hea-button>
    <hea-button type="primary">3</hea-button>
    <hea-button type="primary">4</hea-button>
    <hea-button type="primary">4</hea-button>
  </hea-button-group>
  
</div>

::: demo
```html

<hea-button-group>
  <hea-button type="primary">1</hea-button>
  <hea-button type="primary">2</hea-button>
  <hea-button type="primary">3</hea-button>
  <hea-button type="primary">4</hea-button>
  <hea-button type="primary">4</hea-button>
</hea-button-group>

```
:::







### 带icon的按钮

按钮中加入属性 ```icon``` 值为 ```现有图标库``` 就是带icon的按钮

<div class="demo-block">
  <div>
    <hea-button icon="heart1" type="danger">小姐姐给我个爱心吧</hea-button>
    <hea-button type="primary" icon="clouddownload-o">下载</hea-button>
    <hea-button type="success" icon="cloudupload-o">上传</hea-button>
    <hea-button type="info" icon="eye-o">睁开眼</hea-button>
    <hea-button type="warning" icon="eye-close">闭上眼</hea-button>
    <hea-button type="danger" icon="angular">Angular</hea-button>
  </div>
</div>

::: demo
```html

<div>
  <hea-button icon="heart1" type="danger">小姐姐给我个爱心吧</hea-button>
  <hea-button type="primary" icon="clouddownload-o">下载</hea-button>
  <hea-button type="success" icon="cloudupload-o">上传</hea-button>
  <hea-button type="info" icon="eye-o">睁开眼</hea-button>
  <hea-button type="warning" icon="eye-close">闭上眼</hea-button>
  <hea-button type="danger" icon="angular">Angular</hea-button>
</div>


  
```
:::




### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <hea-button>默认尺寸</hea-button>
  <hea-button size="medium">中等按钮</hea-button>
  <hea-button size="small">小型按钮</hea-button>
</div>

::: demo
```html

<hea-button>默认尺寸</hea-button>
<hea-button size="medium">中等按钮</hea-button>
<hea-button size="small">小型按钮</hea-button>

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
