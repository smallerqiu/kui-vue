import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, provide } from "vue";
import { type TypeSize } from "../const/var";

export const flexProps = {
  align: {
    type: String as PropType<"start" | "flex-start" | "end" | "flex-end" | "center" | "baseline">,
  },
  justify: {
    type: String as PropType<
      "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    >,
  },
  vertical: Boolean,
  wrap: Boolean,
  size: {
    type: [String, Number, Array] as PropType<TypeSize | number | (string | number)[]>,
  },
};

export type FlexProps = ExtractPropTypes<typeof flexProps>;

const Flex = defineComponent({
  name: "Flex",
  props: flexProps,
  setup(props, { slots }) {
    provide("size", props.size as any);

    return () => {
      let { align, justify, vertical, size, wrap } = props as any;
      align = !vertical && !align ? "center" : align;

      const _props: any = {
        style: {} as CSSProperties,
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
        _props.style = { gap: `${size[1]}px ${size[0]}px` } as CSSProperties;
      } else if (/small|middle|large/.test(size)) {
        const sizes: Record<string, number> = { small: 8, middle: 16, large: 24, default: 16 };
        _props.style.gap = sizes[size] + "px";
      } else if (size !== undefined && size !== null) {
        _props.style.gap = `${size}px`;
      }

      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});

export default Flex;
