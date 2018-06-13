<template>
  <button @click="$emit('click')"
          class="hea-button"
          :disabled="disabled"
          :class="['hea-button-'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round},'hea-button-size-'+size]">
    <i v-if="icon !== ''" :class="['hea-ico',`hea-ico-${icon}`]"></i>
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
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
