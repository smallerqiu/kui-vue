import { Star as StarIcon } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import Tooltip from "../tooltip";

export const starProps = {
  character: [String, Function] as PropType<string | ((index: number) => any)>,
  tooltips: String,
  percent: Number,
  full: Boolean as BooleanType,
  half: Boolean as BooleanType,
  allowHalf: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  icon: [String, Function, Array] as PropType<any>,
  size: [Number, String] as PropType<number | string>,
  index: { type: Number, required: true as const },
};

export type StarProps = ExtractPropTypes<typeof starProps>;

export default defineComponent({
  name: "Star",
  props: starProps,
  emits: ['update'],
  setup(props, { emit }) {
    const onUpdate = (e: MouseEvent, t: "C" | "M") => {
      if (props.disabled) return;
      const target = e.currentTarget as HTMLElement;
      const { clientX } = e;
      let percent = 0;
      if (target) {
        const { left, width } = target.getBoundingClientRect();
        percent = (clientX - left) / width;
      }
      emit("update", t, props.index, percent);
    };

    return () => {
      const { full, half, character, tooltips, icon, percent, disabled, size, index } = props;
      const starClasses = {
        class: [
          "k-star",
          {
            "k-star-full": full,
            "k-star-half": half,
          },
        ],
        onClick: (e: MouseEvent) => onUpdate(e, "C"),
        onMousemove: (e: MouseEvent) => onUpdate(e, "M"),
      };

      const characterNode = typeof character === "function" ? character(index) : character;
      const iconType = typeof icon === "function" ? icon(index) : icon;
      const startProps ={
        class:['k-star-front'],
        style:{ width: disabled && percent !== undefined ? `${percent}%` : undefined }
      }
      const node = (
        <span {...starClasses}>
          <span {...startProps}>
            {characterNode || <Icon type={iconType || StarIcon} size={size} />}
          </span>
          <span class="k-star-back">
            {characterNode || <Icon type={iconType || StarIcon} size={size} />}
          </span>
        </span>
      );
      return tooltips ? <Tooltip title={tooltips}>{node}</Tooltip> : node;
    };
  },
});
