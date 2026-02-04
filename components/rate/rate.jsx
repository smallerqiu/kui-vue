import Star from "./star";
import { defineComponent, ref, watch } from "vue";
import { withInstall } from "../utils/vue";
import { sizeMap, filterSize } from "../utils/size";
const Rate = defineComponent({
  name: "Rate",
  props: {
    modelValue: { type: Number, default: 0 },
    allowClear: { type: Boolean, default: true },
    allowHalf: Boolean,
    character: [String, Function],
    icon: [String, Array, Function],
    count: { type: Number, default: 5 },
    disabled: Boolean,
    tooltips: Array,
    showScore: Boolean,
    size: [Number, String],
    color: String,
  },
  setup(ps, { slots, emit }) {
    const initValue = ref(ps.modelValue);
    const tempValue = ref();
    const cleared = ref(false);
    watch(
      () => ps.modelValue,
      (v) => {
        initValue.value = v;
      }
    );
    const update = (t, index, percent) => {
      if (t == "M") {
        if (cleared.value) return;
        // mouse move
        if (ps.allowHalf) {
          let value = index - (percent < 0.5 ? 0.5 : 0);
          tempValue.value = value;
        } else {
          tempValue.value = index;
        }
      } else {
        // click 允许清零
        let value = index - (ps.allowHalf ? (percent < 0.5 ? 0.5 : 0) : 0);
        value = parseFloat(value.toFixed(2));
        initValue.value = value == initValue.value && ps.allowClear ? 0 : value;
        if (initValue.value == 0) {
          cleared.value = true;
          tempValue.value = null;
        }
        emit("update:modelValue", initValue.value); //for 3
        emit("change", initValue.value);
      }
    };

    const mouseLeave = (index) => {
      tempValue.value = null;
      cleared.value = false;
    };

    return () => {
      const tpValue = tempValue.value || initValue.value;
      let { count, allowHalf, character, disabled, tooltips = [], icon, showScore, color } = ps;
      let size = ps.size;
      if (typeof size == "string" && filterSize(size)) {
        let sizeValue = [20, 24, 32];
        size = sizeValue[sizeMap.indexOf(size)];
      }
      const stars = [];
      if (isNaN(Number(count)) || count <= 0) {
        count = 5;
      }
      if (count > 15) count = 15;

      for (let i = 1; i <= count; i++) {
        const mod = i - tpValue;
        const percent = (1 - (i - tpValue)) * 100;
        let sp = {
          allowHalf,
          full: tpValue >= i,
          half: mod > 0 && mod < 1,
          icon,
          character,
          size,
          disabled,
          percent: percent < 100 ? percent : null,
          tooltips: tooltips[i - 1],
          index: i,
          onUpdate: update, //for 3
        };
        stars.push(<Star {...sp} />);
      }
      let props = {
        class: ["k-rate", { "k-rate-disabled": disabled }],
        onMouseleave: mouseLeave,
        style: { fontSize: size + "px" },
      };
      if (color) {
        props.style.color = color;
      }
      return (
        <div {...props}>
          {stars}
          {showScore ? <span class="k-rate-score">{initValue.value}</span> : null}
        </div>
      );
    };
  },
});
export default withInstall(Rate);
