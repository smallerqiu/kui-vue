import { defineComponent, onBeforeUnmount, onMounted, ref, watch, type PropType } from "vue";
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
    let countUp: CountUp | undefined;
    const createCountUp = () => {
      if (el.value) {
        countUp?.onDestroy();
        const observeVisibility = props.autoAnimate && typeof IntersectionObserver !== "undefined";
        const duration = Number.isFinite(props.duration) ? Math.max(0, props.duration) : 0;
        const precision = Number.isFinite(props.precision)
          ? Math.min(100, Math.max(0, Math.floor(props.precision)))
          : 0;
        const options: CountUpOptions = {
          duration,
          separator: props.separator,
          decimalPlaces: precision,
          autoAnimate: observeVisibility,
          autoAnimateOnce: props.autoAnimateOnce,
        };
        if (props.type === "rollup") {
          options.plugin = new Odometer({ duration, lastDigitDelay: 0 });
        }
        countUp = new CountUp(el.value, props.modelValue, options);
        if (!observeVisibility) countUp.start();
      }
    };
    onMounted(createCountUp);
    watch(
      () => props.modelValue,
      (newVal) => {
        if (countUp) {
          countUp.update(newVal);
        }
      },
    );
    watch(
      () => [
        props.duration,
        props.separator,
        props.precision,
        props.type,
        props.autoAnimate,
        props.autoAnimateOnce,
      ],
      createCountUp,
    );
    onBeforeUnmount(() => countUp?.onDestroy());

    return () => <span class="k-stat-countup-number" ref={el}></span>;
  },
});

export default CountUpNumber;
