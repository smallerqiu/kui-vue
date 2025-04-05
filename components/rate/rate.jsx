import Star from "./star";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Rate",
  props: {
    value: { type: Number, default: 0 },
    allowClear: { type: Boolean, default: true },
    allowHalf: Boolean,
    character: [String, Function],
    icon: [String, Array, Function],
    count: { type: Number, default: 5 },
    disabled: Boolean,
    tooltips: Array,
    showScore: Boolean,
    size: Number,
    color: String,
  },
  setup(ps, { slots, emit }) {
    const initValue = ref(ps.value);
    const tempValue = ref(ps.value);
    const click = (index) => {
      index = index + 1;
      if (initValue.value && ps.allowClear && index == initValue.value) {
        index = 0;
      }
      if (initValue.value != index) {
        emit("change", index);
      }
      initValue.value = index;
      tempValue.value = index;

      emit("update:value", index);
    };
    const mouseEnter = (index) => {
      tempValue.value = index + 1;
    };
    const mouseLeave = (index) => {
      tempValue.value = initValue.value;
    };

    return () => {
      const tpValue = tempValue.value;
      let { count,  allowHalf, character, disabled, tooltips = [], icon, showScore, size, color } = ps;
      const stars = [];
      if (Number(count) == NaN || count <= 0) {
        count = 5;
      }
      if (count > 15) count = 15;

      for (let i = 0; i < count; i++) {
        let v = parseInt((tpValue - 1) * 100);
        let percent = tpValue > i && tpValue < i + 1 ? v : 0;
        let half = (tpValue > i && tpValue < i + 1 && allowHalf) || percent == 50;
        let sp = {
          allowHalf,
          full: tpValue > i && !half,
          half,
          icon,
          character,
          size,
          disabled,
          value: i,
          percent,
          tooltips: tooltips[i],
          index: i,
          onClick: click,
          onMouseenter: mouseEnter,
        };
        stars.push(<Star {...sp} />);
      }
      let props = {
        class: "k-rate",
        onMouseleave: mouseLeave,
      };
      if (color) {
        props.style = { color };
      }
      return (
        <div {...props}>
          {stars}
          {disabled && showScore ? <span class="k-rate-score">{ps.value}</span> : null}
        </div>
      );
    };
  },
});
