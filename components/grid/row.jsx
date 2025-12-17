import { defineComponent, provide, ref, watch } from "vue";
import { withInstall } from '../utils/vue';
const Row = defineComponent({
  name: "Row",
  props: {
    gutter: [Number, Array],
    type: { type: String, default: "flex" },
    justify: {
      type: String,
      validator: (value) => {
        return ["start", "end", "center", "space-around", "space-between"].indexOf(value) > -1;
      },
    },
    align: {
      type: String,
      validator: (value) => {
        return ["top", "middle", "bottom"].indexOf(value) > -1;
      },
    },
  },
  setup(ps, { slots }) {
    const gutter = ref(ps.gutter);
    provide("gutter", gutter);

    watch(
      () => ps.gutter,
      (nv, no) => {
        gutter.value = ps.gutter;
      }
    );

    return () => {
      const { align, justify, gutter } = ps;
      let props = {
        class: [
          "k-row",
          {
            "k-row-flex": ps.type == "flex",
            [`k-row-flex-${justify}`]: justify,
            [`k-row-flex-${align}`]: align,
          },
        ],
        style: {},
      };
      if (Array.isArray(gutter)) {
        let [v = 0, _h = 0] = gutter;
        if (v == _h && v > 0) {
          props.style.margin = `-${v / 2}px`;
        } else if (v > 0 && _h > 0) {
          props.style.margin = `-${_h / 2}px -${v / 2}px`;
        } else {
          if (v > 0) {
            props.style.marginLeft = `-${v / 2}px`;
            props.style.marginRight = `-${v / 2}px`;
          }
          if (_h > 0) {
            props.style.marginTop = `-${v / 2}px`;
            props.style.marginTop = `-${v / 2}px`;
          }
        }
      } else if (!isNaN(Number(gutter)) && gutter > 0) {
        props.style.marginLeft = `-${gutter / 2}px`;
        props.style.marginRight = `-${gutter / 2}px`;
      }
      return <div {...props}>{slots.default?.()}</div>;
    };
  },
});
export default withInstall(Row);
