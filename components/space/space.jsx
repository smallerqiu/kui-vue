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
  setup(props, { slots, attrs }) {
    const align = computed(() => (!props.vertical && !props.align ? "center" : props.align));

    const propsObj = computed(() => {
      const style = {};
      const cls = [
        "k-space",
        {
          [`k-space-vertical`]: props.vertical,
          [`k-space-compact`]: props.compact,
          [`k-space-wrap`]: props.wrap,
          [`k-space-block`]: props.block,
          [`k-space-align-${align.value}`]: align.value,
        },
      ];

      if (!props.size && !props.compact) {
        style.gap = "8px";
      }
      if (!props.compact) {
        if (Array.isArray(props.size)) {
          style.gap = `${props.size[1]}px ${props.size[0]}px`;
        } else if (/small|middle|large/.test(props.size)) {
          const sizes = { small: 8, middle: 16, large: 24 };
          style.gap = `${sizes[props.size]}px`;
        } else if (props.size !== undefined && props.size !== null) {
          style.gap = `${props.size}px`;
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
        const pre = props.vertical ? "vertical-" : "";
        const p = {
          size: props.size,
          class: {
            [`k-space-${pre}first-item`]: i === 0,
            [`k-space-${pre}item`]: i > 0 && i < childs.length - 1,
            [`k-space-${pre}last-item`]: i === childs.length - 1,
          },
        };
        const child = props.compact ? cloneVNode(childs[i], p, true, true) : h("div", p, childs[i]);
        vnodes.push(child);
        if (split && i < childs.length - 1) {
          vnodes.push(split);
        }
      }
      return <div {...propsObj.value}>{vnodes}</div>;
    };
  },
});
