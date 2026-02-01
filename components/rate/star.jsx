import Icon from "../icon";
import Tooltip from "../tooltip";
import { Star } from "kui-icons/dist/icons";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Star",
  props: {
    character: [String, Function],
    tooltips: String,
    percent: Number,
    full: Boolean,
    half: Boolean,
    allowHalf: Boolean,
    disabled: Boolean,
    icon: [String, Function, Array],
    size: [Number, String],
    index: Number,
  },
  emits: ["update"],
  setup(ps, { slots, emit }) {
    const update = (e, t) => {
      if (ps.disabled) return;
      let { target, clientX } = e;
      let percent = 0;
      if (target) {
        let { left, width } = target.getBoundingClientRect();
        percent = (clientX - left) / width;
      }
      emit("update", t, ps.index, percent);
    };

    return () => {
      let {
        full,
        half,
        character,
        tooltips,
        icon,
        percent,
        disabled,
        size,
      } = ps;
      const props = {
        class: [
          "k-star",
          {
            "k-star-full": full,
            "k-star-half": half,
          },
        ],
        on: {
          click: (e) => update(e, "C"),
          mousemove: (e) => update(e, "M"),
        },
        // onClick: (e) => update(e, "C"), //for 3
        // onMousemove: (e) => update(e, "M"),
      };
      const characterNode =
        typeof character == "function" ? character(ps.index) : character;
      const iconType = typeof icon == "function" ? icon(ps.index) : icon;
      // if (typeof character == "function") {
      //   character = character(ps.value);
      // }
      // if (typeof icon == "function") {
      //   icon = icon(ps.value);
      // }
      // character = character ? <span>{character}</span> : null;
      const node = (
        <span {...props}>
          <span
            class={["k-star-front", {}]}
            style={{ width: disabled ? percent + "%" : null }}
          >
            {characterNode || <Icon type={iconType || Star} size={size} />}
          </span>
          <span class="k-star-back">
            {characterNode || <Icon type={iconType || Star} size={size} />}
          </span>
        </span>
      );
      return tooltips ? <Tooltip title={tooltips}>{node}</Tooltip> : node;
    };
  },
});
