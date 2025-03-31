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
  setup(props, { slots }) {
    const classes = computed(() => {
      const { size, shape } = props;
      return [
        "k-btn-group",
        {
          ["k-btn-group-sm"]: size == "small",
          ["k-btn-group-lg"]: size == "large",
          ["k-btn-group-circle"]: shape == "circle",
        },
      ];
    });

    return () => {
      return <div class={classes.value}>{slots.default?.()}</div>;
    };
  },
});
