import PopBase from '../base/pop'
export default {
  name: 'Tooltip',
  props: {
    dark: { type: Boolean, default: false },
    transfer: { type: Boolean, default: true },
    title: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].indexOf(value) >= 0
        );
      },
      default: "top"
    },
  },
  render() {
    let props = {
      props: { preCls: 'tooltip', ...this.$props },
    }
    const title = this.$slots.title || this.title
    return (title ?
      <PopBase {...props}>
        {this.$slots.default}
        <template slot="title">{title}</template>
      </PopBase> : this.$slots.default
    )
  }
};