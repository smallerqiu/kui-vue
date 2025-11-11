import BasePop from '../base/pop'
import { withInstall } from '../utils/vue'
import { placements } from '../const/var'
const Popconfirm = {
  name: 'Popconfirm',
  props: {
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    title: [String, Number, Object, Array],
    width: [Number, String],
    okText: String,
    cancelText: String,
    placement: {
      validator(value) {
        return placements.includes(value);
      },
      default: "top"
    },
  },
  render() {
    let props = {
      props: { preCls: 'popconfirm', ...this.$props, confirm: true, extendWidth: false },
      on: {
        'ok': () => this.$emit('ok'),
        'cancel': () => this.$emit('cancel')
      }
    }
    return (
      <BasePop {...props}>
        {this.$slots.default}
        <template slot="title">{this.$slots.title}</template>
      </BasePop>
    )
  }
};
export default withInstall(Popconfirm);