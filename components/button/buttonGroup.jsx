import { getChild } from '../_tool/utils'
export default {
  name: "ButtonGroup",
  props: {
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large","default"].indexOf(value) >= 0;
      }
    },
    circle: Boolean
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      const { size, circle } = this
      return [
        "k-btn-group",
        {
          ["k-btn-group-sm"]: size=='small',
          ["k-btn-group-lg"]: size=='large',
          ["k-btn-group-circle"]: circle
        }
      ];
    }
  },
  render() {
    return (
      <div class={this.classes}>
        {getChild(this.$slots.default)}
      </div>
    )
  }
};

