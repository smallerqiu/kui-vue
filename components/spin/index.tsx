import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, onBeforeUnmount, ref, watch } from "vue";
import type { SizeType, SpinModeType } from "../const/types";

const spinProps = {
  modelValue: { type: Boolean, default: true },
  delay: { type: Number, default: 500 },
  size: {
    type: String as PropType<SizeType>,
  },
  mode: {
    type: String as PropType<SpinModeType>,
    default: "rotate",
  },
};

export type SpinProps = ExtractPropTypes<typeof spinProps>;

const Spin = defineComponent({
  name: "Spin",
  props: spinProps,
  setup(props, { slots }) {
    const spinning = ref(props.modelValue);
    let timer: ReturnType<typeof setTimeout> | undefined;
    watch(
      () => [props.modelValue, props.delay] as const,
      ([nv]) => {
        clearTimeout(timer);
        if (nv) {
          spinning.value = nv;
        } else {
          timer = setTimeout(() => {
            spinning.value = nv;
            timer = undefined;
          }, props.delay);
        }
      },
    );
    onBeforeUnmount(() => clearTimeout(timer));
    return () => {
      const { mode, size } = props;
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
