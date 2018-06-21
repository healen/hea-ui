<template>
  <button @click="clickfn"
          class="hea-button"
          :disabled="disabled||loading"
          :class="['hea-button-'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round},'hea-button-size-'+size]">
    <i v-if="icon !== ''" :class="['hea-ico',`hea-ico-${icon}`]"></i>
    <i v-if="loading" :class="['hea-ico',`hea-loading-1`,`hea-ico-loading`]"></i>
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
    name: 'HeaButton',
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
