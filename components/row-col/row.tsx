import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, provide, ref, watch } from "vue";
export const rowProps = {
  gutter: [Number, Array] as PropType<number | [number, number]>,
  type: { type: String, default: "flex" },
  justify: {
    type: String as PropType<"start" | "end" | "center" | "space-around" | "space-between">,
  },
  align: {
    type: String as PropType<"top" | "middle" | "bottom">,
  },
};
export type RowProps = ExtractPropTypes<typeof rowProps>;

const Row = defineComponent({
  name: "Row",
  props: rowProps,
  setup(props, { slots }) {
    const gutter = ref(props.gutter);
    provide("gutter", gutter);

    watch(
      () => props.gutter,
      (nv) => {
        gutter.value = nv;
      }
    );

    return () => {
      const { align, justify, gutter } = props;
      let _props = {
        class: [
          "k-row",
          {
            "k-row-flex": props.type == "flex",
            [`k-row-flex-${justify}`]: justify,
            [`k-row-flex-${align}`]: align,
          },
        ],
        style: {} as CSSProperties,
      };
      if (Array.isArray(gutter)) {
        let [v = 0, _h = 0] = gutter;
        if (v == _h && v > 0) {
          _props.style.margin = `-${v / 2}px`;
        } else if (v > 0 && _h > 0) {
          _props.style.margin = `-${_h / 2}px -${v / 2}px`;
        } else {
          if (v > 0) {
            _props.style.marginLeft = `-${v / 2}px`;
            _props.style.marginRight = `-${v / 2}px`;
          }
          if (_h > 0) {
            _props.style.marginTop = `-${v / 2}px`;
            _props.style.marginTop = `-${v / 2}px`;
          }
        }
      } else if (gutter && gutter > 0) {
        _props.style.marginLeft = `-${gutter / 2}px`;
        _props.style.marginRight = `-${gutter / 2}px`;
      }
      return <div {..._props}>{slots.default?.()}</div>;
    };
  },
});
export default Row;
