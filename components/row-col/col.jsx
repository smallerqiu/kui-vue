import { defineComponent, inject } from "vue";

const Col = defineComponent({
  name: "Col",
  props: {
    span: Number,
    offset: Number,
    flex: [String, Number],
  },

  setup(ps, { slots }) {
    const parseFlex = (flex) => {
      if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
      return flex;
    };

    return () => {
      const gutter = inject("gutter")?.value;
      let { offset, span, flex } = ps;
      let props = {
        class: [
          `k-col`,
          {
            [`k-col-${span}`]: span,
          },
        ],
        style: {},
      };
      if (Array.isArray(gutter)) {
        let [v = 0, _h = 0] = gutter;
        if (v == _h && v > 0) {
          props.style.padding = `${v / 2}px`;
        } else if (v > 0 && _h > 0) {
          props.style.padding = `${_h / 2}px ${v / 2}px`;
        } else {
          if (v > 0) {
            props.style.paddingLeft = `${v / 2}px`;
            props.style.paddingRight = `${v / 2}px`;
          }
          if (_h > 0) {
            props.style.paddingTop = `${v / 2}px`;
            props.style.paddingTop = `${v / 2}px`;
          }
        }
      } else if (!isNaN(Number(gutter)) && gutter > 0) {
        props.style.paddingLeft = `${gutter / 2}px`;
        props.style.paddingRight = `${gutter / 2}px`;
      }
      if (flex) {
        props.style.flex = parseFlex(flex);
      }
      if (offset > 0 && offset <= 24) {
        props.class.push(`k-col-offset-${offset}`);
      }
      return <div {...props}>{slots.default?.()}</div>;
    };
  },
});
export default Col;
