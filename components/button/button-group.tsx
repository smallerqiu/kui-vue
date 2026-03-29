import {
  defineComponent,
  inject,
  provide,
  toRefs,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { filterSize, sizeMap } from "../utils/size";

export const buttonGroupProps = {
  size: {
    type: String as PropType<typeof sizeMap[number]>,
  },
  shape: String as PropType<"circle" | string>,
};

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;

export default defineComponent({
  name: "ButtonGroup",
  props: buttonGroupProps,
  setup(props, { slots }) {
    const { size, shape } = toRefs(props);
    const parentSize = inject<string | null>("size", null);

    provide("KButtonGroup", {
      size: props.size || filterSize(parentSize),
      shape,
    });

    return () => {
      const groupProps = {
        class: [
          "k-btn-group",
          {
            ["k-btn-group-sm"]: size.value === "small",
            ["k-btn-group-lg"]: size.value === "large",
            ["k-btn-group-circle"]: shape.value === "circle",
          },
        ],
      };
      return <div {...groupProps}>{slots.default?.()}</div>;
    };
  },
});