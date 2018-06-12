<template>
  <button @click="$emit('click')"
          class="hea__button"
          :disabled="disabled"
          :class="[
           'hea__button--'+type,
            {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
            'hea__button--size-'+size
    ]">
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
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
