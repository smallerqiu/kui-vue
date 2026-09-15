import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent } from "vue";
import type { BooleanType } from "../const/types";
import { toCssLength } from "../utils/css";
import type { FlexAlignType, FlexJustifyType, FlexSizeType } from "./types";
const flexProps = {
  align: {
    type: String as PropType<FlexAlignType>,
  },
  justify: {
    type: String as PropType<FlexJustifyType>,
  },
  vertical: Boolean as BooleanType,
  wrap: Boolean as BooleanType,
  size: {
    type: [String, Number, Array] as PropType<FlexSizeType>,
  },
};

export type FlexProps = ExtractPropTypes<typeof flexProps>;

const Flex = defineComponent({
  name: "Flex",
  props: flexProps,
  setup(props, { slots }) {
    return () => {
      const { justify, vertical, size, wrap } = props;
      let { align } = props;
      align = !vertical && !align ? "center" : align;

      const style: CSSProperties = {};
      const className = [
        "k-flex",
        {
          [`k-flex-vertical`]: vertical,
          [`k-flex-wrap`]: wrap,
          [`k-flex-align-${align}`]: align,
          [`k-flex-justify-${justify}`]: justify,
        },
      ];

      if (Array.isArray(size)) {
        const horizontal = size[0];
        const vertical = size[1] ?? horizontal;
        style.gap = `${toCssLength(vertical) ?? "0px"} ${toCssLength(horizontal) ?? "0px"}`;
      } else if (typeof size === "string" && /small|medium|large/.test(size)) {
        const sizes: Record<string, number> = { small: 8, medium: 16, large: 24, default: 16 };
        style.gap = sizes[size] + "px";
      } else if (size !== undefined && size !== null) {
        style.gap = toCssLength(size);
      }

      return (
        <div class={className} style={style}>
          {slots.default?.()}
        </div>
      );
    };
  },
});

export default Flex;

export type { FlexAlignType, FlexJustifyType, FlexSizeType } from "./types";
