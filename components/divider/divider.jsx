import { defineComponent } from "vue";

import { withInstall } from "../utils/vue";
const Divider = defineComponent({
  name: "Divider",
  props: {
    type: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      },
    },
    text: String,
    dashed: Boolean,
    orientation: {
      type: String,
      default: "center",
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
    },
  },
  setup(props, { slots }) {
    return () => {
      const textNode = slots.default?.() || props.text;

      const classes = [
        "k-divider",
        {
          [`k-divider-${props.type}`]: props.type,
          "k-divider-dashed": props.dashed,
          [`k-divider-with-text-${props.orientation}`]: props.orientation && textNode,
        },
      ];
      return (
        <div class={classes}>
          {textNode ? <span class="k-divider-inner-text">{textNode}</span> : null}
        </div>
      );
    };
  },
});
export default withInstall(Divider);
