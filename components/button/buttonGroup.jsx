import { getChild } from '../_tool/utils'
export default {
  name: "ButtonGroup",
  props: {
    mini: Boolean,
    large: Boolean,
    circle: Boolean
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      const { mini, large, circle } = this
      return [
        "k-btn-group",
        {
          ["k-btn-group-mini"]: mini,
          ["k-btn-group-lg"]: large && !mini,
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

