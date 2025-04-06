import { ref, computed, defineComponent } from "vue";

export default defineComponent({
  name: "ButtonGroup",
  props: {
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    shape: String,
  },
  setup(ps, { slots }) {
    return () => {
      const { size, shape } = ps;
      const classes = [
        "k-btn-group",
        {
          ["k-btn-group-sm"]: size == "small",
          ["k-btn-group-lg"]: size == "large",
          ["k-btn-group-circle"]: shape == "circle",
        },
      ];
      return <div class={classes}>{slots.default?.()}</div>;
    };
  },
});
