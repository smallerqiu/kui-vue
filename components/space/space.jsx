import { defineComponent, computed, h, cloneVNode } from "vue";

export default defineComponent({
  name: "Space",
  props: {
    align: {
      type: String,
      validator(value) {
        return value ? ["start", "end", "center", "baseline"].includes(value) : true;
      },
    },
    vertical: Boolean,
    wrap: Boolean,
    block: Boolean,
    compact: Boolean,
    size: {
      type: [String, Number, Array],
      validator(value) {
        return typeof value === "number" || Array.isArray(value) ? true : ["small", "middle", "large"].includes(value);
      },
    },
  },
  setup(ps, { slots, attrs }) {
    const align = computed(() => (!ps.vertical && !ps.align ? "center" : ps.align));

    const props = computed(() => {
      const style = {};
      const cls = [
        "k-space",
        {
          [`k-space-vertical`]: ps.vertical,
          [`k-space-compact`]: ps.compact,
          [`k-space-wrap`]: ps.wrap,
          [`k-space-block`]: ps.block,
          [`k-space-align-${align.value}`]: align.value,
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

      return {
        ...attrs,
        style,
        class: cls,
      };
    });

    return () => { 
      const childs = slots.default?.();
      const split = slots.split?.();

      const vnodes = [];
      for (let i = 0; i < childs.length; i++) {
        const pre = ps.vertical ? "vertical-" : "";
        const p = {
          size: ps.size,
          class: {
            [`k-space-${pre}first-item`]: i === 0,
            [`k-space-${pre}item`]: i > 0 && i < childs.length - 1,
            [`k-space-${pre}last-item`]: i === childs.length - 1,
          },
        };
        const child = ps.compact ? cloneVNode(childs[i], p, true, true) : h("div", p, childs[i]);
        vnodes.push(child);
        if (split && i < childs.length - 1) {
          vnodes.push(split);
        }
      }
      return <div {...props.value}>{vnodes}</div>;
    };
  },
});
