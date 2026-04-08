import Color from "color";
import { defineComponent, type PropType, ref, watch } from "vue";
import type { TypeBoolean } from "../const/var";
import { Input } from "../input";
import InputNumber from "../input-number";
import { Select } from "../select";
import { isColor } from "../utils/color";
export default defineComponent({
  name: "Mode",
  props: {
    modelValue: [String, Object],
    mode: { type: String as PropType<"hex" | "rgb" | "hsl">, default: "hex" },
    disabledAlpha: Boolean as TypeBoolean,
  },
  emits: ["updateColorValue", "updateMode"],
  setup(props, { emit }) {
    const currentMode = ref<string>(props.mode);
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
      () => props.mode,
      (val) => {
        currentMode.value = val;
      }
    );
    const updateHex = (hex: string) => {
      if (!isColor(hex)) return;
      const color = Color(hex).rgb();
      emit("updateColorValue", color);
    };
    const valueChange = (value: number, type: string) => {
      let color = Color(props.modelValue);
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
      emit("updateColorValue", color);
    };

    const changeMode = (v: string) => {
      currentMode.value = v;
      emit("updateMode", v);
    };
    return () => {
      const nodes = [];
      const color = Color(props.modelValue);
      const alpha = color.alpha();

      if (currentMode.value === "hex") {
        const hex = color.hex().slice(1);
        nodes.push(
          <Input prefix="#" size="small" modelValue={hex} onChange={(e) => updateHex(e)} />
        );
      } else if (currentMode.value === "rgb") {
        const [r, g, b] = color.rgb().array();
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            modelValue={Math.round(r)}
            onChange={(e) => valueChange(e, "r")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            modelValue={Math.round(g)}
            onChange={(e) => valueChange(e, "g")}
          />
        );
        nodes.push(
          <InputNumber
            size="small"
            min={0}
            max={255}
            modelValue={Math.round(b)}
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
            modelValue={Math.round(_h)}
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
            modelValue={Math.round(s)}
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
            modelValue={Math.round(l)}
            onChange={(e) => valueChange(e, "l")}
          />
        );
      }

      if (!props.disabledAlpha) {
        nodes.push(
          <InputNumber
            // suffix="%"
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
            modelValue={Math.round(alpha * 100)}
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
