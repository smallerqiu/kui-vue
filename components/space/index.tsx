import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { cloneVNode, defineComponent, Fragment, h, inject, provide, Text } from "vue";
import { type BooleanType, type SizeType } from "../const/types";
import { getChildren } from "../utils/vnode";
const spaceProps = {
  align: {
    type: String as PropType<"start" | "end" | "center" | "baseline">,
  },
  vertical: Boolean as BooleanType,
  direction: String as PropType<"horizontal" | "vertical">,
  wrap: { type: Boolean as BooleanType, default: false },
  block: Boolean as BooleanType,
  compact: Boolean as BooleanType,
  size: {
    type: [String, Number, Array] as PropType<SizeType | number | (number | string)[]>,
  },
};

export type SpaceProps = ExtractPropTypes<typeof spaceProps>;

const Space = defineComponent({
  name: "Space",
  inheritAttrs: false,
  props: spaceProps,
  setup(props, { slots, attrs }) {
    const parentSize = inject<SizeType | undefined>("size", undefined);
    const inheritedSize = props.size ?? parentSize;
    provide("size", typeof inheritedSize === "string" ? inheritedSize : undefined);

    const toCssLength = (value: number | string | undefined) => {
      if (typeof value === "number") return `${value}px`;
      if (typeof value === "string") return /^-?\d+(\.\d+)?$/.test(value) ? `${value}px` : value;
      return "0px";
    };

    return () => {
      const size = props.size ?? parentSize;
      const children = getChildren(slots.default?.());
      const vertical = props.direction ? props.direction === "vertical" : props.vertical;

      const align = !vertical && !props.align ? "center" : props.align;

      const style: CSSProperties = {};
      const cls = [
        "k-space",
        {
          [`k-space-vertical`]: vertical,
          [`k-space-compact`]: props.compact,
          [`k-space-wrap`]: props.wrap,
          [`k-space-block`]: props.block,
          [`k-space-align-${align}`]: align,
        },
      ];
      if (!props.compact) {
        if (Array.isArray(size)) {
          const horizontal = size[0];
          const vertical = size[1] ?? horizontal;
          style.gap = `${toCssLength(vertical)} ${toCssLength(horizontal)}`;
        } else if (typeof size === "string") {
          const sizes: Record<string, number> = { small: 8, medium: 16, large: 24, default: 16 };
          style.gap = `${sizes[size] || 16}px`;
        } else if (typeof size === "number") {
          style.gap = `${size}px`;
        } else if (!size) {
          style.gap = `8px`;
        }
      }
      const _props = {
        ...attrs,
        style: [attrs.style as CSSProperties, style],
        class: [cls, attrs.class],
      };

      const vNodes = [];
      for (let i = 0; i < children.length; i++) {
        const pre = vertical ? "vertical-" : "";
        const grouped = children.length > 1;
        const p: Record<string, unknown> = {
          key: children[i].key ?? `item-${i}`,
          class: {
            [`k-space-${pre}first-item`]: grouped && i === 0,
            [`k-space-${pre}item`]: i > 0 && i < children.length - 1,
            [`k-space-${pre}last-item`]: grouped && i === children.length - 1,
          },
        };
        if (
          props.compact &&
          typeof size === "string" &&
          typeof children[i].type !== "string" &&
          children[i].type !== Text
        ) {
          p.size = size;
        }
        const child = props.compact
          ? children[i].type === Text
            ? h("span", p, children[i])
            : cloneVNode(children[i], p, true, true)
          : children.length === 1
            ? children[i].type === Text
              ? h("span", { key: p.key }, children[i])
              : cloneVNode(children[i], { key: p.key }, true, true)
          : h("div", p, [children[i]]);
        vNodes.push(child);
        if (slots.split && i < children.length - 1) {
          vNodes.push(h(Fragment, { key: `split-${i}` }, slots.split()));
        }
      }
      return <div {..._props}>{vNodes}</div>;
    };
  },
});
export default Space;
