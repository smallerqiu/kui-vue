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
        {this.$slots.default}
      </div>
    )
  }
};

