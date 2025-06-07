import { defineComponent, reactive, ref, onMounted, watch } from "vue";
import InputNumber from "../inputNumber";
import Select from "../select";
import {
  canvasHelper,
  limit,
  hslToRgb,
  rgbToHsl,
  parseColor,
  rgbToHex,
  cssColorToRgba,
} from "./canvasHelper";
export default defineComponent({
  name: "Alpha",
  props: {
    value: String,
    mode: String,
  },
  setup(ps, { emit }) {
    const currentHex = ref(ps.value, "hex");
    const currentMode = ref(ps.mode);
    const currentColor = ref(ps.value, "#000000");
    const options = [
      {
        label: "HEX",
        value: "hex",
      },
      {
        label: "RGB",
        value: "rgb",
      },
      {
        label: "HSL",
        value: "hsl",
      },
    ];
    return () => {
      const nodes = [];
      const a = parseColor(currentColor.value, "rgba");
      console.log(a)
      let [r, g, b, alpha] = a

      if (currentHex === "hex") {
        const hex = parseColor(ps.value, "hex");
        nodes.push(<InputNumber prefix="#" size="small" v-model:value={hex} />);
      } else if (currentHex === "rgb") {
        nodes.push(<InputNumber size="small" v-model:value={r} />);
        nodes.push(<InputNumber size="small" v-model:value={g} />);
        nodes.push(<InputNumber size="small" v-model:value={b} />);
      } else if (currentHex === "hsl") {
        const [h, s, l, a] = parseColor(currentColor.value, "hsla");
        nodes.push(<InputNumber size="small" v-model:value={h} />);
        nodes.push(<InputNumber size="small" v-model:value={s} />);
        nodes.push(<InputNumber size="small" v-model:value={l} />);
        alpha = a;
      }

      <div class={`k-color-picker-mode k-color-picker-${currentMode}`}>
        <Select
          size="small"
          v-model:value={currentMode.value}
          options={options}
        />
        <div class="k-color-picker-val">
          {node}
          <InputNumber
            suffix="%"
            v-model:value={alpha}
            size="small"
            class="k-color-picker-alpha-input"
          />
        </div>
      </div>;
    };
  },
});
