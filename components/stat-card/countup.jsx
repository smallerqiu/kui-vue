import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { CountUp } from "./countup.js";
const CountUpNumber = defineComponent({
  name: "CountUpNumber",
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    separator: String,
    duration: {
      type: Number,
      default: 1.2,
    },
    precision: { type: Number, default: 0 },
  },
  setup(props) {
    const el = ref(null);
    let countUp;
    onMounted(() => {
      countUp = new CountUp(el.value, props.modelValue, {
        duration: props.duration,
        separator: props.separator || ",",
        decimalPlaces: props.precision,
      });
      countUp.start();
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
