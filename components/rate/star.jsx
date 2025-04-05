import Icon from "../icon";
import Tooltip from "../tooltip";
import { Star } from "kui-icons";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Star",
  props: {
    value: { type: Number },
    character: [String, Function],
    tooltips: String,
    percent: Number,
    full: Boolean,
    half: Boolean,
    allowHalf: Boolean,
    disabled: Boolean,
    icon: [String, Function, Array],
    size: Number,
    index: Number,
  },
  setup(ps, { slots, emit }) {
    const checked = ref(false);
    // const tempValue = ref(0);
    // const click = () => {
    //   if (ps.disabled) return;
    //   emit("click", tempValue.value || ps.value);
    // };
    // const mouseEnter = () => {
    //   if (ps.disabled) return;
    //   checked.value = true;
    //   emit("mouseenter", tempValue.value || ps.value);
    // };
    // const mouseLeave = () => {
    //   if (ps.disabled) return;
    //   checked.value = false;
    //   emit("mouseleave", tempValue.value || ps.value);
    // };
    const mouseMove = (e) => {
      if (ps.disabled || !ps.allowHalf) return;
      let num = ps.index;
      let { target, clientX } = e;
      if (target) {
        let { left, width } = target.getBoundingClientRect();
        let center = parseInt(left) + parseInt(width) / 2;
        if (clientX < center) {
          num -= 0.5;
        }
      }
      // tempValue.value = num;
      emit("mouseenter", num);
    };

    return () => {
      let { full, half, allowHalf, tooltips, icon, percent, disabled, size } = ps;
      const props = {
        class: [
          "k-star",
          {
            // "k-star-checked": checked.value,
            "k-star-full": full,
            "k-star-half": half,
          },
        ],
        // onMouseenter: mouseEnter,
        // onMouseleave: mouseLeave,
        // onClick: click,
      };
      const show_percent = disabled && percent != 50 && percent;
      if (allowHalf) {
        props.onMousemove = mouseMove;
      }
      // if (typeof character == "function") {
      //   character = character(ps.value);
      // }
      // if (typeof icon == "function") {
      //   icon = icon(ps.value);
      // }
      // character = character ? <span>{character}</span> : null;
      const character = null;
      const node = (
        <span {...props}>
          <span class={["k-star-front", {}]} style={{ width: show_percent ? percent + "%" : null }}>
            {character || <Icon type={icon || Star} size={size} />}
          </span>
          <span class="k-star-back">{character || <Icon type={icon || Star} size={size} />}</span>
        </span>
      );
      return tooltips ? <Tooltip title={tooltips}>{node}</Tooltip> : node;
    };
  },
});
