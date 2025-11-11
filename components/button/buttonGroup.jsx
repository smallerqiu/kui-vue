import { getChildren } from '../utils/element'
import { withInstall } from '../utils/vue'
const ButtonGroup = {
  name: "ButtonGroup",
  props: {
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    shape: String
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      const { size, shape } = this
      return [
        "k-btn-group",
        {
          ["k-btn-group-sm"]: size == 'small',
          ["k-btn-group-lg"]: size == 'large',
          ["k-btn-group-circle"]: shape == 'circle'
        }
      ];
    }
  },
  render() {
    return (
      <div class={this.classes}>
        {getChildren(this.$slots.default)}
      </div>
    )
  }
};

export default withInstall(ButtonGroup);