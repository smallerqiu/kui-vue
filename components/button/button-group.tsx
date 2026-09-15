import {
  defineComponent,
  inject,
  provide,
  toRefs,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { type ShapeType, type SizeType } from "../const/types";
import { useConfigAppearance } from "../config/context";

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
    const appearance = useConfigAppearance(props);
    const { size } = toRefs(props);
    const parentSize = inject<string | null>("size", null);

    provide("KButtonGroup", {
      size: props.size || parentSize || appearance.size.value,
      shape: appearance.shape,
    });

    return () => {
      const groupProps = {
        class: [
          "k-btn-group",
          {
            ["k-btn-group-sm"]: (size.value || appearance.size.value) === "small",
            ["k-btn-group-lg"]: (size.value || appearance.size.value) === "large",
            ["k-btn-group-circle"]: appearance.shape.value === "circle",
            ["k-btn-group-square"]: appearance.shape.value === "square",
          },
        ],
      };
      return <div {...groupProps}>{slots.default?.()}</div>;
    };
  },
});
export default ButtonGroup;
