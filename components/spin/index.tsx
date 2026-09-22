import { useInitialValue } from "../utils/model-value";
import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, onBeforeUnmount, ref, watch } from "vue";
import type { SizeType, SpinModeType } from "../const/types";
import { useConfigAppearance } from "../config/context";

const spinProps = {
  modelValue: { type: Boolean, default: undefined },
  value: { type: Boolean, default: true },
  delay: { type: Number, default: 0 },
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
    const initialModel = useInitialValue(props);
    const appearance = useConfigAppearance(props);
    const spinning = ref(initialModel.value);
    let timer: ReturnType<typeof setTimeout> | undefined;
    watch(
      () => [initialModel.value, props.delay] as const,
      ([nv]) => {
        clearTimeout(timer);
        if (!nv) {
          spinning.value = false;
        } else if (props.delay > 0) {
          timer = setTimeout(() => {
            spinning.value = true;
            timer = undefined;
          }, props.delay);
        } else {
          spinning.value = true;
        }
      },
    );
    onBeforeUnmount(() => clearTimeout(timer));
    return () => {
      const { mode } = props;
      const size = appearance.size.value;
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
