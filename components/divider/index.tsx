import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, DirectionType } from "../const/types";

export const dividerProps = {
  type: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  text: String,
  dashed: Boolean as BooleanType,
  orientation: {
    type: String as PropType<"left" | "right" | "center">,
    default: "center",
  },
};

export type DividerProps = ExtractPropTypes<typeof dividerProps>;

const Divider = defineComponent({
  name: "Divider",
  props: dividerProps,
  setup(props, { slots }) {
    return () => {
      const hasText = !!(slots.default || props.text);
      const textNode = slots.default ? slots.default() : props.text;

      const classes = [
        "k-divider",
        {
          [`k-divider-${props.type}`]: true,
          "k-divider-dashed": props.dashed,
          [`k-divider-with-text-${props.orientation}`]: props.type === "horizontal" && hasText,
        },
      ];

      return (
        <div class={classes} role="separator">
          {props.type === "horizontal" && hasText ? (
            <span class="k-divider-inner-text">{textNode}</span>
          ) : null}
        </div>
      );
    };
  },
});
export default Divider;
