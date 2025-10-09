import Color from "color";
import InputNumber from "../inputNumber";
import { Input } from "../input";
import { Select } from "../select";
import { isColor } from "../utils/color";

export default {
  name: "Mode",
  props: {
    value: [String, Object],
    mode: String,
    disabledAlpha: Boolean,
  },
  data() {
    return {
      currentMode: this.mode || "hex",
      currentColor: this.value || "#000000",
      options: [
        { label: "HEX", value: "hex" },
        { label: "RGB", value: "rgb" },
        { label: "HSL", value: "hsl" },
      ],
    };
  },
  watch: {
    mode(val) {
      this.currentMode = val;
    },
    value(val) {
      this.currentColor = val;
    },
  },
  methods: {
    updateHex(e) {
      const hex = `#${e.target.value}`;
      if (!isColor(hex)) return;
      const color = Color(hex).rgb();
      this.$emit("updateColorValue", color);
    },
    valueChange(e, type) {
      const value = parseInt(e.target.value);
      let color = Color(this.currentColor);

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
      this.currentColor = color.rgb();
      this.$emit("updateColorValue", this.currentColor);
    },
    changeMode({ value }) {
      // console.log(v);
      this.currentMode = value;
      this.$emit("updateMode", value);
    },
  },
  render() {
    const nodes = [];
    const color = Color(this.currentColor);
    const alpha = color.alpha();

    if (this.currentMode === "hex") {
      const hex = color.hex().slice(1);
      nodes.push(
        <Input
          prefix="#"
          size="small"
          value={hex}
          onChange={(e) => this.updateHex(e)}
        />
      );
    } else if (this.currentMode === "rgb") {
      const [r, g, b] = color.rgb().array();
      nodes.push(
        <InputNumber
          size="small"
          min={0}
          max={255}
          value={Math.round(r)}
          onChange={(e) => this.valueChange(e, "r")}
        />,
        <InputNumber
          size="small"
          min={0}
          max={255}
          value={Math.round(g)}
          onChange={(e) => this.valueChange(e, "g")}
        />,
        <InputNumber
          size="small"
          min={0}
          max={255}
          value={Math.round(b)}
          onChange={(e) => this.valueChange(e, "b")}
        />
      );
    } else if (this.currentMode === "hsl") {
      const [hh, s, l] = color.hsl().array();
      nodes.push(
        <InputNumber
          size="small"
          min={0}
          max={359}
          value={Math.round(hh)}
          onChange={(e) => this.valueChange(e, "h")}
        />,
        <InputNumber
          size="small"
          formatter={(v) => `${v}%`}
          parser={(v) => v.replace("%", "")}
          min={0}
          max={100}
          value={Math.round(s)}
          onChange={(e) => this.valueChange(e, "s")}
        />,
        <InputNumber
          size="small"
          formatter={(v) => `${v}%`}
          parser={(v) => v.replace("%", "")}
          min={0}
          max={100}
          value={Math.round(l)}
          onChange={(e) => this.valueChange(e, "l")}
        />
      );
    }

    if (!this.disabledAlpha) {
      nodes.push(
        <InputNumber
          formatter={(v) => `${v}%`}
          parser={(v) => v.replace("%", "")}
          value={Math.round(alpha * 100)}
          size="small"
          min={0}
          max={100}
          class="k-color-picker-alpha-input"
          onChange={(e) => this.valueChange(e, "a")}
        />
      );
    }

    return (
      <div class={`k-color-picker-mode k-color-picker-${this.currentMode}`}>
        <Select
          bordered={false}
          size="small"
          value={this.currentMode}
          options={this.options}
          onChange={this.changeMode}
        />
        <div class="k-color-picker-val">{nodes}</div>
      </div>
    );
  },
};