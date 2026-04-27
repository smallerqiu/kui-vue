import {
  defineComponent,
  inject,
  provide,
  toRefs,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { type ShapeType, type SizeType } from "../const/types";

const buttonGroupProps = {
  size: {
    type: String as PropType<SizeType>,
  },
  shape: String as PropType<ShapeType>,
};

export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;

const ButtonGroup = defineComponent({
  name: "ButtonGroup",
  props: buttonGroupProps,
  setup(props, { slots }) {
    const { size, shape } = toRefs(props);
    const parentSize = inject<string | null>("size", null);

    provide("KButtonGroup", {
      size: props.size || parentSize,
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
            ["k-btn-group-square"]: shape.value === "square",
          },
        ],
      };
      return <div {...groupProps}>{slots.default?.()}</div>;
    };
  },
});
export default ButtonGroup;
