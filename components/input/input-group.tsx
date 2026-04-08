import {
  cloneVNode,
  defineComponent,
  inject,
  provide,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { type TypeBoolean, type TypeSize } from "../const/var";
import { getChildren } from "../utils/vnode";

export const inputGroupProps = {
  block: { type: Boolean as PropType<boolean | undefined>, default: false },
  compact: Boolean as TypeBoolean,
  theme: { type: String, default: "light" },
  size: {
    type: [String, Array, Number] as PropType<TypeSize | number | number[]>,
  },
};

export type InputGroupProps = ExtractPropTypes<typeof inputGroupProps>;

export default defineComponent({
  name: "InputGroup",
  props: inputGroupProps,
  setup(props, { slots }) {
    const parentSize = inject<string>("size");
    provide("size", props.size || parentSize);

    return () => {
      const { size, compact, block, theme } = props;
      const styles: CSSProperties = {};

      const rootProps = {
        style: styles,
        class: [
          "k-input-group",
          {
            "k-input-group-compact": compact,
            "k-input-group-block": block,
            "k-input-group-light": theme === "light",
            "k-input-group-lg": size === "large",
            "k-input-group-sm": size === "small",
          },
        ],
      };

      if (!compact && size !== undefined) {
        if (typeof size === "number") {
          styles.gap = `${size}px`;
        }
      }

      let children = getChildren(slots.default?.());
      if (compact && children) {
        children = children.map((child, i) => {
          return cloneVNode(
            child,
            {
              class: {
                "k-input-group-first-item": i === 0,
                "k-input-group-item": i > 0 && i < children!.length - 1,
                "k-input-group-last-item": i === children!.length - 1,
              },
            },
            true,
            true
          );
        });
      }
      return <div {...rootProps}>{children}</div>;
    };
  },
}); //as DefineComponent<InputGroupProps>;
