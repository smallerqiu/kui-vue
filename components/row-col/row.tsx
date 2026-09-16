import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent } from "vue";
const rowProps = {
  gutter: [Number, Array] as PropType<number | [number, number]>,
  justify: {
    type: String as PropType<"start" | "end" | "center" | "space-around" | "space-between">,
    default: "start",
  },
  align: {
    type: String as PropType<"top" | "middle" | "bottom">,
    default: "top",
  },
};
export type RowProps = ExtractPropTypes<typeof rowProps>;

const Row = defineComponent({
  name: "Row",
  props: rowProps,
  setup(props, { slots }) {
    return () => {
      const { align, justify, gutter } = props;
      const _props = {
        class: [
          "k-row",
          {
            [`k-row-${justify}`]: justify,
            [`k-row-${align}`]: align,
          },
        ],
        style: {} as CSSProperties,
      };
      if (Array.isArray(gutter)) {
        const [columnGap = 0, rowGap = 0] = gutter;
        _props.style.columnGap = `${Math.max(0, columnGap)}px`;
        _props.style.rowGap = `${Math.max(0, rowGap)}px`;
        _props.style["--k-row-column-gap"] = `${Math.max(0, columnGap)}px`;
      } else if (gutter && gutter > 0) {
        _props.style.columnGap = `${gutter}px`;
        _props.style["--k-row-column-gap"] = `${gutter}px`;
      }
      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});
export default Row;
