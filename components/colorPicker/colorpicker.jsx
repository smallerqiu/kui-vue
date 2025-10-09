import Drop from '../base/drop'
import { withInstall } from '../utils/vue'
import Mode from "./mode";
import Hue from "./hue";
import Alpha from "./alpha";
import Paint from "./paint";
import Color from "color";
import Presets from "./presets";
const modes = ['rgba', 'hex', 'hsla']

const ColorPicker = {
  name: 'ColorPicker',
  props: {
    value: String,
    showMode: Boolean,
    disabled: Boolean,
    disabledAlpha: Boolean,
    showText: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    mode: {
      type: String, default: 'hex', validator: function (value) {
        return modes.indexOf(value) !== -1
      }
    },
    presets: {
      type: Array,
    },
    placement: {
      validator(value) {
        return [
          "top",
          "top-left",
          "top-right",
          "bottom",
          "bottom-left",
          "bottom-right",
        ].includes(value);
      },
      default: "bottom-left",
    }
  },
  watch: {
    value(v1) {
      this.currentColor = v1
    }
  },
  data() {
    return {
      currentMode: this.mode,
      currentColor: this.value || '#000',
      paintHelper: null,
      hueHelper: null,
      H: 0, S: 0, L: 0, A: 1,
      R: 0, G: 0, B: 0,
      HEX: '',
      huePointer: {
        x: 0
      },
      alphaPointer: {
        x: 0,
      },
      paintPointer: {
        x: 0, y: 0
      },
      opened: false,
      isMouseDown: false,




      currentAlpha: 1,
      currentHue: 0,
      currentPlacement: this.placement,
    }
  },
  methods: {

    toggleDrop() {
      if (this.disabled) {
        return false;
      }
      this.opened = !this.opened
    },
    getColor() {
      let text = "";
      const color = Color(this.currentColor);
      if (this.currentMode == "hex") {
        text = color.alpha() < 1 ? color.hexa() : color.hex();
      } else if (this.currentMode == "rgb") {
        text = color.rgb().string(0);
      } else if (this.currentMode == "hsl") {
        text = color.hsl().string(0);
      }
      return text;
    },
    renderTriggerText() {
      let text = this.getColor();
      return this.showText ? (
        <div class="k-color-picker-trigger-text">{text}</div>
      ) : null;
    },
    updateColor(color) {
      this.currentAlpha = color.alpha();
      this.currentHue = color.hue();
      this.updateColorValue(color.rgb());
    },
    updateColorValue(color) {
      this.currentAlpha = color.alpha();
      this.currentColor = color;
      this.currentHue = color.hue();
      this.onUpdate(color);
    },
    onUpdate(color) {
      this.currentColor = color;
      const value = this.getColor();
      this.$emit("update", value);
      this.$emit("change", value);
    },
    onUpdateRGB({ r, g, b }) {
      const color = Color({ r, g, b, alpha: this.currentAlpha });
      this.onUpdate(color.rgb());
    },
    onUpdateHue(hue) {
      // console.log("hue", hue);
      this.currentHue = hue;
      // currentColor.value = color;
      // const value = getColor();
      const value = Color(this.currentColor).hue(hue).rgb();
      this.onUpdate(value);
    },
    onUpdateAlpha(a) {
      this.currentAlpha = a;
      const value = Color(this.currentColor).alpha(a).rgb();
      this.onUpdate(value);
    },
    onUpdateMode(mode) {
      this.currentMode = mode;
      this.onUpdate(this.currentColor);
      this.$emit("update:mode", mode);
      setTimeout(() => {
        clearTimeout(this.hideTimer);
      }, 0);
    },
    renderDrop() {
      const props = {
        ref: 'overlay',
        props: {
          placement: this.placement,
          transfer: true,
          value: this.opened,
          selection: this.$el,
          className: 'k-color-picker-dropdown',
          transitionName: 'k-color-picker'
        },
        on: {
          input: e => {
            this.opened = e
            this.currentColor = this.value || '#000'
          },
          hide: () => {
            // this.opened = false
            // this.currentColor = this.value || '#000'
          },
          render: () => {
            this.$nextTick(() => {
              // let { paint, hue, alpha } = this.$refs
              // this.paintHelper = canvasHelper(paint);
              // this.initHueCanvas(hue);
              // (!this.noAlpha && this.initAlphaCanvas(alpha));
              // this.initPaintCanvas(paint)
              // this.valueChange('COLOR', this.value)
            })
          },
        }
      }
      return (<Drop {...props}>
        <div class='k-color-picker-body'>
          <Paint
            hue={this.currentHue}
            value={this.currentColor}
            onUpdateRGB={this.onUpdateRGB}
          />
          <div class="k-color-picker-bar">
            <div class="k-color-picker-avatar">
              <div
                class="k-color-picker-avatar-inner"
                style={`background-color:${this.currentColor}`}></div>
            </div>
            <div class="k-color-picker-bar-box">
              <Hue hue={this.currentHue} onUpdateHue={this.onUpdateHue} />
              {!this.disabledAlpha ? (
                <Alpha
                  value={this.currentColor}
                  onUpdateAlpha={this.onUpdateAlpha}
                />
              ) : null}
            </div>
          </div>

          <Mode
            mode={this.currentMode}
            value={this.currentColor}
            disabledAlpha={this.disabledAlpha}
            onUpdateMode={this.onUpdateMode}
            onUpdateColorValue={this.updateColorValue}
          />
          <Presets
            onUpdateColor={this.updateColor}
            value={this.presets}
            color={this.currentColor}
          />
        </div>
      </Drop>
      )
    }
  },
  mounted() {
    if (this.value) {
      this.currentAlpha = Color(this.value).alpha();
      this.currentHue = Color(this.value).hue();
    }
  },
  render() {
    let drop = this.renderDrop()
    let style = [
      'k-color-picker',
      {
        'k-color-picker-opened': this.opened,
        'k-color-picker-disabled': this.disabled,
        'k-color-picker-sm': this.size == 'small',
        'k-color-picker-lg': this.size == 'large'
      },
    ]

    return (<div class={style} >
      <div class="k-color-picker-selection" onClick={this.toggleDrop}>
        <div class="k-color-picker-color">
          <div class="k-color-picker-color-inner" style={`background-color:${this.currentColor}`}></div>
        </div>
        {this.renderTriggerText()}
      </div>
      {drop}
    </div >)
  }
}

export default withInstall(ColorPicker)