export default {
  name:'HCol',
  componentName:'HCol',
  props:{
    span:{
      type:[Number,String], //1-24栅格
      default:'1'
    },
    offset:{
      type:[Number,String]//1-24栅格
    },
    pull:{
      type:[Number,String]//1-24栅格
    },
    push:{
      type:[Number,String]//1-24栅格
    },
    type:{
      type:String//s l xl xxl xxxl
    }
  },
  render(h){

    return h('div',{
      class:[
        'h-col',
        this.type? `h-col-${this.type}-${this.span}`:`h-col-${this.span}`,
        this.push?`h-col-push-${this.push}`:'',
        this.pull?`h-col-pull-${this.pull}`:'',
        this.offset?`h-col-offset-${this.offset}`:''

      ]
    },this.$slots.default)

  }
}