import type { CSSProperties, ExtractPropTypes, Ref } from "vue";
import { defineComponent, inject } from "vue";

export const colProps = {
  span: Number,
  offset: Number,
  flex: [String, Number],
};

export type ColProps = ExtractPropTypes<typeof colProps>;

const Col = defineComponent({
  name: "Col",
  props: colProps,
  setup(props, { slots }) {
    const parseFlex = (flex: number | string) => {
      if (typeof flex === "number") {
        return `${flex} ${flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
      return flex;
    };

    return () => {
      const gutter = inject<Ref<number[] | number>>("gutter")?.value;
      let { offset, span, flex } = props;
      let _props = {
        class: [
          `k-col`,
          {
            [`k-col-${span}`]: span,
          },
        ],
        style: {} as CSSProperties,
      };
      if (Array.isArray(gutter)) {
        let [v = 0, _h = 0] = gutter;
        if (v == _h && v > 0) {
          _props.style.padding = `${v / 2}px`;
        } else if (v > 0 && _h > 0) {
          _props.style.padding = `${_h / 2}px ${v / 2}px`;
        } else {
          if (v > 0) {
            _props.style.paddingLeft = `${v / 2}px`;
            _props.style.paddingRight = `${v / 2}px`;
          }
          if (_h > 0) {
            _props.style.paddingTop = `${v / 2}px`;
            _props.style.paddingTop = `${v / 2}px`;
          }
        }
      } else if (gutter && gutter > 0) {
        _props.style.paddingLeft = `${gutter / 2}px`;
        _props.style.paddingRight = `${gutter / 2}px`;
      }
      if (flex) {
        _props.style.flex = parseFlex(flex);
      }
      if (offset && offset > 0 && offset <= 24) {
        _props.class.push(`k-col-offset-${offset}`);
      }
      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});
export default Col;
