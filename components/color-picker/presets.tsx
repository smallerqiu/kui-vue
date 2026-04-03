import Color from "color";
import { Checkmark } from "kui-icons";
import { defineComponent, type PropType } from "vue";
import Icon from "../icon";
export default defineComponent({
  name: "Presets",
  props: {
    color: [String, Object],
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#673ab7",
        "#3f51b5",
        "#2196f3",
        "#03a9f4",
        "#00bcd4",
        "#009688",
        "#4caf50",
        "#8bc34a",
        "#cddc39",
        "#ffeb3b",
        "#ffc107",
        "#ff9800",
        "#ff5722",
        "#795548",
        "#9e9e9e",
        "#607d8b",
        "#000",
      ],
    },
  },
  emits: ["updateColor"],
  setup(props, { emit }) {
    return () => {
      if (props.modelValue.length == 0) return null;
      let color = props.modelValue.map((hex) => (
        <span style={{backgroundColor : hex}} onClick={()=>emit("updateColor", Color(hex))}>
          {Color(props.color) == Color(hex)? <Icon type={Checkmark} /> : null}
        </span>
      ));
      return <div class="k-color-picker-presets">{color}</div>;
    };
  },
});
