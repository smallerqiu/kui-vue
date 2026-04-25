import { defineComponent, onMounted, ref, watch, type PropType } from "vue";
import { CountUp, type CountUpOptions } from "./utils/countup";
import { Odometer } from "./utils/odometer";
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
    type: {
      type: String as PropType<"rollup" | "countup">,
      default: "countup",
    },
    autoAnimate: Boolean,
    autoAnimateOnce: Boolean,
  },
  setup(props) {
    const el = ref<HTMLElement>();
    let countUp: CountUp;
    onMounted(() => {
      if (el.value) {
        const options: CountUpOptions = {
          duration: props.duration,
          separator: props.separator,
          decimalPlaces: props.precision,
          autoAnimate: props.autoAnimate,
          autoAnimateOnce: props.autoAnimateOnce,
        };
        if (props.type === "rollup") {
          options.plugin = new Odometer({ duration: props.duration, lastDigitDelay: 0 });
        }
        countUp = new CountUp(el.value, props.modelValue, options);
        countUp.start();
      }
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
