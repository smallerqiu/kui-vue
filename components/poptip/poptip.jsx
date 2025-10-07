import BasePop from '../base/pop'
import { withInstall } from '../utils/vue'
import { placements } from '../const/var'
const Poptip = {
  name: 'Poptip',
  props: {
    dark: Boolean,
    trigger: { type: String, default: "hover" },
    transfer: { type: Boolean, default: true },
    title: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return placements.includes(value);
      },
      default: "top"
    },
    value: Boolean
  },
  render() {
    let props = {
      props: { preCls: 'poptip', ...this.$props },
      on: {
        input: (e) => this.$emit('input', e)
      }
    }
    return (
      <BasePop {...props}>
        {this.$slots.default}
        <template slot="content">{this.$slots.content}</template>
      </BasePop>
    )
  }
};
export default withInstall(Poptip);