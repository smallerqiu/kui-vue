import BasePop from '../base/pop'
export default {
  name: 'Poptip',
  props: {
    dark: Boolean,
    trigger: { type: String, default: "hover" },
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
      props: { preCls: 'poptip', ...this.$props }
    }
    return (
      <BasePop {...props}>
        {this.$slots.default}
        <template slot="content">{this.$slots.content}</template>
      </BasePop>
    )
  }
};