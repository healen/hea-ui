<template>
    <div :class="[`${name}-enter-active`]">
      <slot></slot>
    </div>
</template>
<script>
  export default {
    name:'HAnimate',
    props:{
      name:{
        type:String,
        required:true,
      }
    }
  }
</script>