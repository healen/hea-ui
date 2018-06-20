export default {
  name:'HeaCol',
  componentName:'HeaCol',
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
    return (
      <div class={[
        'hea-col',
        this.type? `hea-col-${this.type}-${this.span}`:`hea-col-${this.span}`,
        this.push?`hea-col-push-${this.push}`:'',
        this.pull?`hea-col-pull-${this.pull}`:'',
        this.offset?`hea-col-offset-${this.offset}`:''
      ]}>
        {this.$slots.default}

      </div>
    )
  }
}