import BasePop from '../base/pop'
export default {
  name: 'Tooltip',
  props: {
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    title: [String, Number, Object, Array],
    color: String,
    trigger: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].indexOf(value) >= 0
        );
      },
      default: "top"
    },
    value: Boolean,
    show: Boolean
  },
  render() {
    const title = this.$slots.title || this.title
    let props = {
      props: { preCls: 'tooltip', ...this.$props, updateKey: title },
    }
    return (
      <BasePop {...props}>
        {this.$slots.default}
        {title ? <template slot="title">{title}</template> : null}
      </BasePop>
    )
  }
};