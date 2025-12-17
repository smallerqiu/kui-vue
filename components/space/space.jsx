import { defineComponent, h, /*cloneVNode*/ provide } from "vue";
import { getChildren } from "../utils/vnode";
import { withInstall, cloneVNode } from "../utils/vue";
const Space = defineComponent({
  name: "Space",
  props: {
    align: {
      type: String,
      validator(value) {
        return value
          ? ["start", "end", "center", "baseline"].includes(value)
          : true;
      },
    },
    vertical: Boolean,
    wrap: { type: Boolean, default: false },
    block: Boolean,
    compact: Boolean,
    size: {
      type: [String, Number, Array],
      validator(value) {
        return typeof value === "number" || Array.isArray(value)
          ? true
          : ["small", "middle", "large"].includes(value);
      },
    },
  },
  setup(ps, { slots, attrs }) {
    provide("size", ps.size);
    return () => {
      let children = getChildren(slots.default?.());

      // console.log(children);
      const split = slots.split?.();

      const align = !ps.vertical && !ps.align ? "center" : ps.align;

      const style = {};
      const cls = [
        "k-space",
        {
          [`k-space-vertical`]: ps.vertical,
          [`k-space-compact`]: ps.compact,
          [`k-space-wrap`]: ps.wrap,
          [`k-space-block`]: ps.block,
          [`k-space-align-${align}`]: align,
        },
      ];

      if (!ps.size && !ps.compact) {
        style.gap = "8px";
      }
      if (!ps.compact) {
        if (Array.isArray(ps.size)) {
          style.gap = `${ps.size[1]}px ${ps.size[0]}px`;
        } else if (/small|middle|large/.test(ps.size)) {
          const sizes = { small: 8, middle: 16, large: 24 };
          style.gap = `${sizes[ps.size]}px`;
        } else if (ps.size !== undefined && ps.size !== null) {
          style.gap = `${ps.size}px`;
        }
      }
      // const _attrs = { ...attrs }
      // delete _attrs.size;
      const props = {
        ...attrs,
        style,
        class: cls,
      };

      const vNodes = [];
      for (let i = 0; i < children.length; i++) {
        const pre = ps.vertical ? "vertical-" : "";
        const p = {
          props: {},
          class: {
            [`k-space-${pre}first-item`]: i === 0,
            [`k-space-${pre}item`]: i > 0 && i < children.length - 1,
            [`k-space-${pre}last-item`]: i === children.length - 1,
          },
        };
        if (
          typeof ps.size === "string" &&
          ["large", "small"].includes(ps.size)
        ) {
          p.props.size = ps.size;
        }
        const child = ps.compact
          ? cloneVNode(children[i], p, true, true)
          : h("div", p, [children[i]]);
        vNodes.push(child);
        if (split && i < children.length - 1) {
          vNodes.push(split);
        }
      }
      // console.log(vNodes);
      return <div {...props}>{...vNodes}</div>;
    };
  },
});
export default withInstall(Space);
