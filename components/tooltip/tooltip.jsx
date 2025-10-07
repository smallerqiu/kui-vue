import BasePop from '../base/pop'
import { withInstall } from '../utils/vue'
import { placements } from '../const/var'
const Tooltip = {
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
        return placements.includes(value);
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

export default withInstall(Tooltip);