# hea-ui内置动画
----
### fade动画

<div class="demo-block">
	<template>
	  <div>
	    <hea-button @click="show = !show" type="primary">Click Me</hea-button>
	    <div>
    		<transition v-for="(f,i) in fade" :name="f.value">
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
</div>

::: demo
```html

<template>
  <div>
    <hea-button @click="show = !show" type="primary">Click Me</hea-button>
    <div>
		<transition v-for="(f,i) in fade" :name="f.value">
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




