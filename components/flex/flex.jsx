import { defineComponent, provide } from "vue";

const Flex = defineComponent({
  name: "Flex",
  props: {
    align: {
      type: String,
      validator(value) {
        return value
          ? ["start", "flex-start", "end", "flex-end", "center", "baseline"].indexOf(value) >= 0
          : true;
      },
    },
    justify: {
      type: String,
      validator(value) {
        return value
          ? [
              "flex-start",
              "center",
              "flex-end",
              "space-between",
              "space-around",
              "space-evenly",
            ].indexOf(value) >= 0
          : true;
      },
    },
    vertical: Boolean,
    wrap: Boolean,
    size: {
      type: [String, Number, Array],
      // default: 'small',
      validator(value) {
        return typeof value == "number" || Array.isArray(value)
          ? true
          : ["small", "middle", "large"].indexOf(value) >= 0;
      },
    },
  },
  setup(props, { slots }) {
    provide("size", props.size);
    return () => {
      let { align, justify, vertical, size, wrap } = props;
      align = !vertical && !align ? "center" : align;
      const _props = {
        style: {},
        class: [
          "k-flex",
          {
            [`k-flex-vertical`]: vertical,
            [`k-flex-wrap`]: wrap,
            [`k-flex-align-${align}`]: align,
            [`k-flex-justify-${justify}`]: justify,
          },
        ],
      };
      if (Array.isArray(size)) {
        _props.style = { gap: `${size[1]}px ${size[0]}px` };
      } else if (/small|middle|large/.test(size)) {
        let sizes = { small: 8, middle: 16, large: 24 };
        _props.style.gap = sizes[size] + "px";
      } else if (size !== undefined && size !== null) {
        _props.style.gap = `${size}px`;
      }
      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});
export default Flex;
