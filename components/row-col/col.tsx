import type { CSSProperties, ExtractPropTypes, PropType, Ref } from "vue";
import { defineComponent, inject } from "vue";

export interface ColSize {
  span?: number;
  offset?: number;
  order?: number;
  push?: number;
  pull?: number;
}

export type ColResponsiveSize = number | ColSize;

const responsiveProp = [Number, Object] as PropType<ColResponsiveSize>;

const colProps = {
  span: Number,
  offset: Number,
  order: Number,
  push: Number,
  pull: Number,
  flex: [String, Number],
  xs: responsiveProp,
  sm: responsiveProp,
  md: responsiveProp,
  lg: responsiveProp,
  xl: responsiveProp,
  xxl: responsiveProp,
};

export type ColProps = ExtractPropTypes<typeof colProps>;

const Col = defineComponent({
  name: "Col",
  props: colProps,
  setup(props, { slots }) {
    const gutter = inject<Ref<number | [number, number] | undefined>>("gutter");

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
      const gutterValue = gutter?.value;
      const { offset, span, order, push, pull, flex } = props;
      const classes: string[] = ["k-col"];

      const addGridClasses = (value: ColResponsiveSize | undefined, breakpoint?: string) => {
        if (value === undefined) return;
        const prefix = breakpoint ? `k-col-${breakpoint}` : "k-col";
        if (typeof value === "number") {
          if (value >= 0 && value <= 24) classes.push(`${prefix}-${value}`);
          return;
        }
        (["span", "offset", "order", "push", "pull"] as const).forEach((key) => {
          const current = value[key];
          if (current !== undefined && current >= 0 && current <= 24) {
            classes.push(key === "span" ? `${prefix}-${current}` : `${prefix}-${key}-${current}`);
          }
        });
      };

      addGridClasses(span);
      addGridClasses({ offset, order, push, pull });
      (["xs", "sm", "md", "lg", "xl", "xxl"] as const).forEach((breakpoint) => {
        addGridClasses(props[breakpoint], breakpoint);
      });

      const _props = {
        class: classes,
        style: {} as CSSProperties,
      };
      if (Array.isArray(gutterValue)) {
        const [v = 0, _h = 0] = gutterValue;
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
            _props.style.paddingTop = `${_h / 2}px`;
            _props.style.paddingBottom = `${_h / 2}px`;
          }
        }
      } else if (gutterValue && gutterValue > 0) {
        _props.style.paddingLeft = `${gutterValue / 2}px`;
        _props.style.paddingRight = `${gutterValue / 2}px`;
      }
      if (flex !== undefined) {
        _props.style.flex = parseFlex(flex);
      }
      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});
export default Col;
