import { defineComponent, ref, watch } from "vue";
import InputNumber from "../inputNumber";
import { Input } from "../input";
import { Select } from "../select";
import Color from "color";
import { isColor } from "../utils/color";
export default defineComponent({
  name: "Mode",
  props: {
    value: [String, Object],
    mode: String,
    disabledAlpha: Boolean,
  },
  setup(ps, { emit }) {
    const currentMode = ref(ps.mode || "hex");
    const currentColor = ref(ps.value || "#000000");
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
    watch(
      () => ps.mode,
      (val) => {
        currentMode.value = val;
      }
    );
    watch(
      () => ps.value,
      (val) => {
        currentColor.value = val;
      }
    );
    const updateHex = (e) => {
      const hex = `#${e.target.value}`;
      if (!isColor(hex)) return;
      const color = Color(hex).rgb();
      emit("updateColorValue", color);
    };
    const valueChange = (e, type) => {
      // console.log(e.target.value, type);
      const value = parseInt(e);
      let color = Color(currentColor.value);
      switch (type) {
        case "r":
          color = color.red(value);
          break;
        case "g":
          color = color.green(value);
          break;
        case "b":
          color = color.blue(value);
          break;
        case "a":
          color = color.alpha(value / 100);
          break;
        case "h":
          color = color.hue(value);
          break;
        case "s":
          color = color.saturationl(value);
          break;
        case "l":
          color = color.lightness(value);
          break;
      }
      currentColor.value = color.rgb();
      emit("updateColorValue", currentColor.value);
    };

    const changeMode = (v) => {
      currentMode.value = v;
      emit("updateMode", v);
    };
    return () => {
      const nodes = [];
      const color = Color(currentColor.value);
      const alpha = color.alpha();

      if (currentMode.value === "hex") {
        const hex = color.hex().slice(1);
        nodes.push(
          <Input
            prefix="#"
            size="small"
            value={hex}
            onChange={(e) => updateHex(e)}
          />
        );
      } else if (currentMode.value === "rgb") {
        const [r, g, b] = color.rgb().array();
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            value={Math.round(r)}
            onChange={(e) => valueChange(e, "r")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            value={Math.round(g)}
            onChange={(e) => valueChange(e, "g")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            value={Math.round(b)}
            onChange={(e) => valueChange(e, "b")}
          />
        );
      } else if (currentMode.value === "hsl") {
        const [_h, s, l] = color.hsl().array();
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={359}
            value={Math.round(_h)}
            onChange={(e) => valueChange(e, "h")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            // suffix="%"
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            min={0}
            max={100}
            value={Math.round(s)}
            onChange={(e) => valueChange(e, "s")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            // suffix="%"
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            min={0}
            max={100}
            value={Math.round(l)}
            onChange={(e) => valueChange(e, "l")}
          />
        );
      }

      if (!ps.disabledAlpha) {
        nodes.push(
          <InputNumber
            // suffix="%"
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            value={Math.round(alpha * 100)}
            size="small"
            min={0}
            max={100}
            class="k-color-picker-alpha-input"
            onChange={(e) => valueChange(e, "a")}
          />
        );
      }

      return (
        <div class={`k-color-picker-mode k-color-picker-${currentMode.value}`}>
          <Select
            clearable={false}
            bordered={false}
            size="small"
            modelValue={currentMode.value}
            options={options}
            onChange={changeMode}
          />
          <div class="k-color-picker-val">{[...nodes]}</div>
        </div>
      );
    };
  },
});
