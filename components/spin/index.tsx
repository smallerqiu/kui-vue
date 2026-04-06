import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, ref, watch } from "vue";

export const spinProps = {
  modelValue: { type: Boolean, default: true },
  delay: { type: Number, default: 500 },
  size: {
    type: String as PropType<"large" | "default" | "small">,
    default: "default",
  },
  mode: {
    type: String as PropType<"bounce" | "flip" | "rotate" | "zoom">,
    default: "rotate",
  },
};

export type SpinProps = ExtractPropTypes<typeof spinProps>;

const Spin = defineComponent({
  name: "Spin",
  props: spinProps,
  setup(props, { slots }) {
    const spinning = ref(props.modelValue);
    let timer: NodeJS.Timeout;
    watch(
      () => props.modelValue,
      (nv) => {
        if (nv) {
          spinning.value = nv;
        } else {
          clearTimeout(timer);
          timer = setTimeout(() => {
            spinning.value = nv;
          }, props.delay);
        }
      }
    );
    return () => {
      let { mode, size } = props;
      const classes = [
        {
          [`k-spin-loading`]: spinning.value,

          [`k-spin-${mode}`]: mode && spinning.value,
        },
      ];
      const children = slots.default?.();
      const root = [
        "k-spin",
        {
          [`k-spin-lg`]: size == "large",
          [`k-spin-sm`]: size == "small",
          [`k-spin-only`]: children == null,
        },
      ];
      const spin = <div class={classes} />;
      return <div class={root}>{[spin, children]}</div>;
    };
  },
});
export default Spin;
