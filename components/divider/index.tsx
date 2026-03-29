import { defineComponent, type ExtractPropTypes, type PropType } from "vue";

export const dividerProps = {
  type: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
    validator(value: string) {
      return ["horizontal", "vertical"].includes(value);
    },
  },
  text: String,
  dashed: Boolean,
  orientation: {
    type: String as PropType<"left" | "right" | "center">,
    default: "center",
    validator(value: string) {
      return ["left", "right", "center"].includes(value);
    },
  },
};

export type DividerProps = ExtractPropTypes<typeof dividerProps>;

export default defineComponent({
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
