import { defineComponent, provide, inject, toRefs } from "vue";
import { withInstall } from "../utils/vue";
import { sizeMap, filterSize } from "../utils/size";

const ButtonGroup = defineComponent({
  name: "ButtonGroup",
  props: {
    size: {
      type: String,
      validator(value) {
        return sizeMap.indexOf(value) >= 0;
      },
    },
    shape: String,
  },
  setup(props, { slots }) {
    const { size, shape } = toRefs(props);
    const parentSize = inject("size", null);

    provide("KButtonGroup", {
      size: props.size || filterSize(parentSize),
      shape,
    });

    return () => {
      const classes = [
        "k-btn-group",
        {
          ["k-btn-group-sm"]: size.value == "small",
          ["k-btn-group-lg"]: size.value == "large",
          ["k-btn-group-circle"]: shape.value == "circle",
        },
      ];
      return <div class={classes}>{slots.default?.()}</div>;
    };
  },
});
export default withInstall(ButtonGroup);
