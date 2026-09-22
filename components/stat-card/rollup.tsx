import { defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { Odometer } from "./utils/odometer";

export default defineComponent({
  name: "RollUp",
  props: {
    modelValue: { type: Number, default: 0 },
    text: String,
    duration: { type: Number, default: 0.3 },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const element = ref<HTMLSpanElement>();
    const initialText =
      props.text ??
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: props.precision,
        maximumFractionDigits: props.precision,
      }).format(props.modelValue);
    let odometer: Odometer | undefined;
    const render = () => {
      const formatted =
        props.text ??
        new Intl.NumberFormat("en-US", {
          minimumFractionDigits: props.precision,
          maximumFractionDigits: props.precision,
        }).format(props.modelValue);
      if (element.value) odometer?.render(element.value, formatted, props.modelValue);
    };
    const create = () => {
      odometer?.destroy();
      odometer = new Odometer({ duration: props.duration });
      render();
    };
    onMounted(create);
    watch(() => [props.modelValue, props.text, props.precision], render);
    watch(() => props.duration, create);
    onBeforeUnmount(() => odometer?.destroy());
    return () => (
      <span class="k-roll-number" ref={element}>
        {initialText}
      </span>
    );
  },
});
