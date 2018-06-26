<template>
  <button @click="clickfn"
          class="h-button"
          :disabled="disabled||loading"
          :class="['h-button-'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round},'h-button-size-'+size]">
    <i v-if="icon !== ''" :class="['h-ico',`h-ico-${icon}`]"></i>
    <i v-if="loading" :class="['h-ico',`h-loading-1`,`h-ico-loading`]"></i>
    <slot></slot>
  </button>
</template>
<style lang="less" scoped="">
  .hea__ico{
    font-size: 18px;
    line-height: 18px;
  }
</style>
<script>
  export default{
    name: 'HButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
      loading:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      clickfn(){
        if(this.loading==false){
          this.$emit('click')
        }
      }
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
