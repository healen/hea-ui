<template>
    <div class="hea-input">

        <input type="text" :placeholder="placeholder">
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
            type: {
                type: String,
                default: 'default'
            },
            value: {
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
                msg: ''
            }
        }
    }
</script>
