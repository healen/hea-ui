export default {
  name:"HeaRow",
  componentName:"HeaRow",
  props: {

    gutter: Number,
    type: String,
    pack: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'start'
    }
  },
  computed: {
    style() {
      const ret = {};
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }
      return ret;
    }
  },
  render(h) {

    return h('div',{
      class:[
        'hea-row',
        this.pack !== 'start' ? `pack-${this.pack}` : '',
        this.align !== 'start' ? `align-${this.align}` : '',
        { 'hea-row-flex': this.type === 'flex' }

      ]
    },this.$slots.default)

  }
}



