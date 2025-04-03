import { defineComponent } from "vue";
import BasePop from "../base/pop";

export default defineComponent({
  name: "Tooltip",
  props: {
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    title: [String, Number, Object, Array],
    color: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value);
      },
      default: "top",
    },
    show: Boolean,
  },
  setup(ps, { slots }) {
    return () => {
      const title = slots.title?.() || ps.title;
      const props = {
        preCls: "tooltip",
        ...ps,
      };
      return (
        <BasePop {...props}>
          {slots.default?.()}
          {title ? <template v-slot:title>{title}</template> : null}
        </BasePop>
      );
    };
  },
});
