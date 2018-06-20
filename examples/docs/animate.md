# hea-ui内置动画
----

hea-ui提供了丰富的动画效果，其中包括fade动画，slide动画，zoom动画，旋转动画，以及其他动画，其中使用方法简单具体用法如下

<br>


``` html
	
<transition name="slide">
	<div v-if="...">
		...
	</div>
</transition>

```

其中 ```name``` 属性是 <a href="#ani">现有动画库</a> 名称


### 一、fade动画


<script>
    export default {
    data: () => ({
      show: true,
      showslide:true,
      showzoom:true,
      showrota:true,
      showother:true,
      fade:[
		  {value:"fadeIn",label:"渐入"},
	      {value:"fadeInDown",label:"向下渐入"},
	      {value:"fadeInDownBig",label:"大型渐入"},
	      {value:"fadeInLeft",label:"左渐入"},
	      {value:"fadeInLeftBig",label:"左渐入大"},
	      {value:"fadeInRight",label:"右渐入"},
	      {value:"fadeInRightBig",label:"右渐入大"},
	      {value:"fadeInUp",label:"上渐入"},
	      {value:"fadeInUpBig",label:"上渐入大"},
	      {value:"fadeOut",label:"渐出"},
	      {value:"fadeOutDown",label:"下渐出"},
	      {value:"fadeOutDownBig",label:"下渐出大"},
	      {value:"fadeOutLeft",label:"左渐出"},
	      {value:"fadeOutLeftBig",label:"左渐出大"},
	      {value:"fadeOutRight",label:"右渐出"},
	      {value:"fadeOutRightBig",label:"右渐出大"},
	      {value:"fadeOutUp",label:"上渐出"},
	      {value:"fadeOutUpBig",label:"上渐出大"},
      ],
      slide:[
	      {value:"slideInUp",label:"上滑入"},
	      {value:"slideInDown",label:"下滑入"},
	      {value:"slideInLeft",label:"左划入"},
	      {value:"slideInRight",label:"右划入"},
	      {value:"slideOutUp",label:"上滑出"},
	      {value:"slideOutDown",label:"下滑出"},
	      {value:"slideOutLeft",label:"左滑出"},
	      {value:"slideOutRight",label:"右滑出"},
      ],
      zoom:[
		{value:"zoomIn",label:"放大进入"},
		{value:"zoomInDown",label:"下放大进入"},
		{value:"zoomInLeft",label:"左放大进入"},
		{value:"zoomInRight",label:"右放大进入"},
		{value:"zoomInUp",label:"上放大进入"},
		{value:"zoomOut",label:"放大离开"},
		{value:"zoomOutDown",label:"下放大离开"},
		{value:"zoomOutLeft",label:"左放大离开"},
		{value:"zoomOutRight",label:"右放大离开"},
		{value:"zoomOutUp",label:"上放大离开"},
      ],
      rota:[
      	{value:"rotateIn",label:"翻转进入"},
		{value:"rotateInDownLeft",label:"下左翻转I"},
		{value:"rotateInDownRight",label:"下右翻转I"},
		{value:"rotateInUpLeft",label:"上左翻转I"},
		{value:"rotateInUpRight",label:"上右翻转I"},
		{value:"rotateOut",label:"翻转离开"},
		{value:"rotateOutDownLeft",label:"下左翻转O"},
		{value:"rotateOutDownRight",label:"下右翻转O"},
		{value:"rotateOutUpLeft",label:"上左翻转O"},
		{value:"rotateOutUpRight",label:"上右翻转O"},
      ],
      othor:[
		{value:"bounce",label:"反弹"},
		{value:"flash",label:"闪光"},
		{value:"pulse",label:"脉冲"},
		{value:"rubberBand",label:"橡皮筋"},
		{value:"shake",label:"抖动"},
		{value:"swing",label:"摆动"},
		{value:"tada",label:"塔达"},
		{value:"wobble",label:"晃动"},
		{value:"jello",label:"果冻"},
		{value:"bounceIn",label:"弹跳进入"},
		{value:"bounceInDown",label:"向下弹跳进入"},
		{value:"bounceInLeft",label:"向左弹跳进入"},
		{value:"bounceInRight",label:"向右弹跳进入"},
		{value:"bounceInUp",label:"向上弹跳进入"},
		{value:"bounceOut",label:"弹跳离开"},
		{value:"bounceOutDown",label:"向下弹跳离开"},
		{value:"bounceOutLeft",label:"向左弹跳离开"},
		{value:"bounceOutRight",label:"向右弹跳离开"},
		{value:"bounceOutUp",label:"向上弹跳离开"},
		{value:"flip",label:"飞入"},
		{value:"flipInX",label:"飞入X"},
		{value:"flipInY",label:"飞入Y"},
		{value:"flipOutX",label:"飞出X"},
		{value:"flipOutY",label:"飞出Y"},
		{value:"lightSpeedIn",label:"光速进入"},
		{value:"lightSpeedOut",label:"光速出"},
		{value:"hinge",label:"转折"},
		{value:"jackInTheBox",label:"反弹"},
		{value:"rollIn",label:"卷入"},
		{value:"rollOut",label:"卷出"},
      ]
    })
  }
</script>
<style lang="less" scoped>
	.clear{
		clear:both;
	}
  .transition-box {
    margin-bottom: 10px;
    display:inline-block;
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    margin-right: 20px;
    margin-top:20px;
    line-height:100px;
  }
</style>

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="show = !show" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in fade" :name="f.value" :key="i">
				<div v-show="show" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
	</template>
</div>


::: demo

```html

 <template>
 	<div>
	    <hea-button @click="show = !show" type="primary">Click Me</hea-button>
	    <div>
			<transition v-for="(f,i) in fade" :name="f.value" :key="i">
				<div v-show="show" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
 </template>
  
<script>
    export default {
    name:fade
    data: () => ({
      show: true,
      fade:[
		{value:"fadeIn",label:"渐入"},
		{value:"fadeInDown",label:"向下渐入"},
		{value:"fadeInDownBig",label:"大型渐入"},
		{value:"fadeInLeft",label:"左渐入"},
		{value:"fadeInLeftBig",label:"左渐入大"},
		{value:"fadeInRight",label:"右渐入"},
		{value:"fadeInRightBig",label:"右渐入大"},
		{value:"fadeInUp",label:"上渐入"},
		{value:"fadeInUpBig",label:"上渐入大"},
		{value:"fadeOut",label:"渐出"},
		{value:"fadeOutDown",label:"下渐出"},
		{value:"fadeOutDownBig",label:"下渐出大"},
		{value:"fadeOutLeft",label:"左渐出"},
		{value:"fadeOutLeftBig",label:"左渐出大"},
		{value:"fadeOutRight",label:"右渐出"},
		{value:"fadeOutRightBig",label:"右渐出大"},
		{value:"fadeOutUp",label:"上渐出"},
		{value:"fadeOutUpBig",label:"上渐出大"},
      ]
    })
  }
</script>
<style lang="less" scoped>
	.clear{
		clear:both;
	}
	.transition-box {
		margin-bottom: 10px;
		display:inline-block;
		width: 100px;
		height: 100px;
		border-radius: 4px;
		background-color: #409EFF;
		text-align: center;
		color: #fff;
		box-sizing: border-box;
		margin-right: 20px;
		margin-top:20px;
		line-height:100px;
	}
</style>

```

:::

### 二、slide动画

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="showslide = !showslide" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in slide" :name="f.value" :key="i">
				<div v-show="showslide" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
	</template>
</div>



### zoom动画

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="showzoom = !showzoom" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in zoom" :name="f.value" :key="i">
				<div v-show="showzoom" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
	</template>
</div>



### 三、旋转动画

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="showrota = !showrota" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in rota" :name="f.value" :key="i">
				<div v-show="showrota" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
	</template>
</div>


### 四、其他动画

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="showother = !showother" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in othor" :name="f.value" :key="i">
				<div v-show="showother" class="transition-box" :key="i">
					{{f.label}}
				</div>
				<div class="clear"></div>
			</transition>
	    </div>
	  </div>
	</template>
</div>


### 五、现有动画库

0.fade类型
<table class="table" style="width:100%; text-align:center">
	<tr>
		<th>序号</th>
		<th>名称</th>
		<th>描述</th>
	</tr>
	<tr v-for="(item,index) in fade" :key="index">
		<td>{{index+1}}</td>
		<td width="200">{{item.value}}</td>
		<td width="200">{{item.label}}</td>
	</tr>
</table>

1. slide类型
<table class="table" style="width:100%; text-align:center">
	<tr>
		<th>序号</th>
		<th>名称</th>
		<th>描述</th>
	</tr>
	<tr v-for="(item,index) in slide" :key="index">
		<td>{{index+1}}</td>
		<td width="200">{{item.value}}</td>
		<td width="200">{{item.label}}</td>
	</tr>
</table>

2 .zoom类型
<table class="table" style="width:100%; text-align:center">
	<tr>
		<th>序号</th>
		<th>名称</th>
		<th>描述</th>
	</tr>
	<tr v-for="(item,index) in zoom" :key="index">
		<td>{{index+1}}</td>
		<td width="200">{{item.value}}</td>
		<td width="200">{{item.label}}</td>
	</tr>
</table>

3 .rota类型
<table class="table" style="width:100%; text-align:center">
	<tr>
		<th>序号</th>
		<th>名称</th>
		<th>描述</th>
	</tr>
	<tr v-for="(item,index) in rota" :key="index">
		<td>{{index+1}}</td>
		<td width="200">{{item.value}}</td>
		<td width="200">{{item.label}}</td>
	</tr>
</table>

4 .其他类型
<table class="table" style="width:100%; text-align:center">
	<tr>
		<th>序号</th>
		<th>名称</th>
		<th>描述</th>
	</tr>
	<tr v-for="(item,index) in othor" :key="index">
		<td>{{index+1}}</td>
		<td width="200">{{item.value}}</td>
		<td width="200">{{item.label}}</td>
	</tr>
</table>












