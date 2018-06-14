export default {
  name:"HeaRow",
  componentName:"HeaRow",
  props: {
    tag: {
      type: String,
      default: 'div'
    },
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
    return h(this.tag, {
      class: [
        'hea-row',
        this.pack !== 'start' ? `pack-${this.pack}` : '',
        this.align !== 'start' ? `align-${this.align}` : '',
        { 'hea-row-flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default);
  }
}
