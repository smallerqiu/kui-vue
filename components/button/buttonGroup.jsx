import { defineComponent } from "vue";
import { withInstall } from "../utils/vue";

const ButtonGroup = defineComponent({
  name: "ButtonGroup",
  props: {
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "middle", "default"].indexOf(value) >= 0;
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
export default withInstall(ButtonGroup);
