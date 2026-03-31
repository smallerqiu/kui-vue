import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { CountUp } from "./utils/countup";
const CountUpNumber = defineComponent({
  name: "CountUpNumber",
  props: {
    modelValue: {
      type: [Number],
      required: true,
    },
    separator: { type: String, default: "," },
    duration: {
      type: Number,
      default: 1.2,
    },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const el = ref<HTMLElement>();
    let countUp: CountUp | null = null;
    onMounted(() => {
      if (el.value) {
        countUp = new CountUp(el.value, props.modelValue, {
          duration: props.duration,
          separator: props.separator || ",",
          decimalPlaces: props.precision,
        });
        countUp.start();
      }
    });
    onUnmounted(() => {
      countUp = null;
    });
    watch(
      () => props.modelValue,
      (newVal) => {
        if (countUp) {
          countUp.update(newVal);
        }
      }
    );
    watch(
      () => props.precision,
      (newVal) => {
        if (countUp) {
          countUp.options.decimalPlaces = newVal;
        }
      }
    );

    return () => <span class="k-stat-countup-number" ref={el}></span>;
  },
});

export default CountUpNumber;
