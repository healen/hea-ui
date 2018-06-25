<template>
    <div class="hea-input" :class="[
    size ? `hea-input-size-${size}` : '',


    ]">
        <input type="text"
               :placeholder="placeholder"
               v-model="currentValue"
               @input="handleInput"
               class="hea-input-inner">
    </div>
</template>
<style lang="less" scoped="">
    .hea__ico{
        font-size: 18px;
        line-height: 18px;
    }
</style>
<script>
    export default{
        name: 'HeaInput',
        props: {
            size: String,
            value: [Number, String],
            icon: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: '请输入'
            },
            disabled: Boolean,
            round: Boolean
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        methods: {
            handleInput() {
                this.$emit('input', this.currentValue)
            }
        }
    }
</script>
