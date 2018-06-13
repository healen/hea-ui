<template>
    <div :class="[`${name}-enter-active`]">
      <slot></slot>
    </div>
</template>
<script>
  export default {
    name:'HeaAnimate',
    props:{
      name:{
        type:String,
        required:true,
      }
    }
  }
</script>