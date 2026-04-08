import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { cloneVNode, defineComponent, h, provide } from "vue";
import { type TypeBoolean, type TypeSize } from "../const/var";
import { getChildren } from "../utils/vnode";
export const spaceProps = {
  align: {
    type: String as PropType<"start" | "end" | "center" | "baseline">,
  },
  vertical: Boolean as TypeBoolean,
  wrap: { type: Boolean as TypeBoolean, default: false },
  block: Boolean as TypeBoolean,
  compact: Boolean as TypeBoolean,
  size: {
    type: [String, Number, Array] as PropType<TypeSize | number | number[]>,
  },
};

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;

const Space = defineComponent({
  name: "Space",
  props: spaceProps,
  setup(props, { slots, attrs }) {
    const size = props.size;
    provide("size", size);
    return () => {
      let children = getChildren(slots.default?.());

      // console.log(children);
      const split = slots.split?.();

      const align = !props.vertical && !props.align ? "center" : props.align;

      const style: CSSProperties = {};
      const cls = [
        "k-space",
        {
          [`k-space-vertical`]: props.vertical,
          [`k-space-compact`]: props.compact,
          [`k-space-wrap`]: props.wrap,
          [`k-space-block`]: props.block,
          [`k-space-align-${align}`]: align,
        },
      ];

      if (size === undefined && !props.compact) {
        style.gap = "8px";
      }
      if (!props.compact) {
        if (Array.isArray(size)) {
          style.gap = `${size[1]}px ${size[0]}px`;
        } else if (typeof size === "string") {
          const sizes = { small: 8, middle: 16, large: 24, default: 16 };
          style.gap = `${sizes[size]}px`;
        } else if (typeof size !== "number") {
          style.gap = `${size}px`;
        }
      }
      // const _attrs = { ...attrs }
      // delete _attrs.size;
      const _props = {
        ...attrs,
        style,
        class: cls,
      };

      const vNodes = [];
      for (let i = 0; i < children.length; i++) {
        const pre = props.vertical ? "vertical-" : "";
        const p: Record<string, any> = {
          class: {
            [`k-space-${pre}first-item`]: i === 0,
            [`k-space-${pre}item`]: i > 0 && i < children.length - 1,
            [`k-space-${pre}last-item`]: i === children.length - 1,
          },
        };
        if (typeof size === "string" && ["large", "small"].includes(size)) {
          p.size = size;
        }
        const child = props.compact
          ? cloneVNode(children[i], p, true, true)
          : h("div", p, [children[i]]);
        vNodes.push(child);
        if (split && i < children.length - 1) {
          vNodes.push(split);
        }
      }
      // console.log(vNodes);
      return <div {..._props}>{...vNodes}</div>;
    };
  },
});
export default Space;
