
<template>

  <i class="hea-ico" :class="[`hea-ico-${name}`]" :style="{color}" @click="$emit('click')" >

    <div v-if="info" class="info">{{info}}</div>

  </i>

</template>

<script>
  export default {
    name:'HeaIco',
    props:{
      name:{
        type:String,
        default: 'default'
      },
      info:{
        type:String
      },
      color:{
        type:String
      }
    }

  }

</script>