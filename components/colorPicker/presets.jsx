import Color from "color";
import Icon from "../icon";
import { Checkmark } from "kui-icons";

export default {
  name: "Presets",
  props: {
    color: [String, Object],
    value: {
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
  data() {
    return {
      currentColor: Color(this.color || "#000000"),
    };
  },
  watch: {
    color(val) {
      this.currentColor = Color(val);
    },
  },
  methods: {
    updateColor(color) {
      this.currentColor = Color(color);
      this.$emit("updateColor", Color(color).rgb());
    },
  },
  render() {
    if (!this.value.length) return null;

    const colors = this.value.map((c) => {
      const isActive = this.currentColor.hexa() === Color(c).hexa();
      return (
        <span
          class={["k-color-picker-preset"]}
          style={{ backgroundColor: c }}
          onClick={() => this.updateColor(c)}
        >
          {isActive ? <Icon type={Checkmark} /> : null}
        </span>
      );
    });

    return <div class="k-color-picker-presets">{colors}</div>;
  },
};