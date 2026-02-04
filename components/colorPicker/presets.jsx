import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import Color from "color";
import { Checkmark } from "kui-icons/dist/icons";
import Icon from "../icon";
export default defineComponent({
  name: "Presets",
  props: {
    color: [String, Object],
    modelValue: {
      type: Array,
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
  setup(ps, { emit }) {
    const currentColor = ref(Color(ps.color));
    watch(
      () => ps.color,
      (val) => {
        currentColor.value = Color(val);
      }
    );
    const updateColor = (color) => {
      currentColor.value = Color(color);
      emit("updateColor", Color(color).rgb());
    };
    return () => {
      if (ps.modelValue.length == 0) return null;
      let color = ps.modelValue.map((c) => (
        <span style={"background-color:" + c} onClick={(e) => updateColor(c)}>
          {currentColor.value.hexa() == Color(c).hexa() ? <Icon type={Checkmark} /> : null}
        </span>
      ));
      return <div class="k-color-picker-presets">{color}</div>;
    };
  },
});
