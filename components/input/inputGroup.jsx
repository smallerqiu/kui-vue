import { getChildren } from "../utils/vnode";
import { defineComponent /*cloneVNode*/, provide, inject } from "vue";
import { withInstall, cloneVNode } from "../utils/vue";
import { sizeMap, filterSize } from "../utils/size";
const InputGroup = defineComponent({
  name: "InputGroup",
  props: {
    block: Boolean,
    compact: {
      type: Boolean,
      default: true,
    },
    theme: { type: String, default: "light" },
    size: {
      type: String,
      validator(value) {
        return sizeMap.indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { slots }) {
    const parentSize = inject("size", null);

    provide("size", ps.size || filterSize(parentSize));

    return () => {
      let { size, compact, block } = ps;
      const props = {
        style: {},
        class: [
          "k-input-group",
          {
            [`k-input-group-compact`]: compact,
            [`k-input-group-block`]: block,
            [`k-input-group-light`]: ps.theme === "light",
            [`k-input-group-lg`]: size == "large",
            [`k-input-group-sm`]: size == "small",
          },
        ],
      };
      if (!size && !compact) {
        props.style.gap = "8px";
      }
      if (!compact) {
        if (Array.isArray(size)) {
          props.style = { gap: `${size[1]}px ${size[0]}px` };
        } else if (/small|middle|large/.test(size)) {
          let sizes = { small: 8, middle: 16, large: 24 };
          props.style.gap = sizes[size] + "px";
        } else if (size !== undefined && size !== null) {
          props.style.gap = `${size}px`;
        }
      }
      let children = getChildren(slots.default?.());
      if (compact) {
        children = children.map((child, i) => {
          return cloneVNode(
            child,
            {
              class: {
                [`k-input-group-first-item`]: i == 0,
                [`k-input-group-item`]: i > 0 && i < children.length - 1,
                [`k-input-group-last-item`]: i == children.length - 1,
              },
            },
            true
          );
        });
      }
      return <div {...props}>{children}</div>;
    };
  },
});
export default withInstall(InputGroup);
