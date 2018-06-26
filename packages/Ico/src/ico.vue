
<template>

  <i class="h-ico" :class="[`h-ico-${name}`]" :style="{color}" @click="$emit('click')" >

    <div v-if="info" class="info">{{info}}</div>

  </i>

</template>

<script>
  export default {
    name:'HIco',
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