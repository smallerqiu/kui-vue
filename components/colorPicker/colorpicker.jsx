import Drop from '../base/drop'
import { withInstall } from '../utils/vue'
import Mode from "./mode";
import Hue from "./hue";
import Alpha from "./alpha";
import Paint from "./paint";
import Color from "color";
import Presets from "./presets";
import { getChildren } from '../utils/element';
import cloneVNode from '../utils/clone';
const modes = ["rgb", "hex", "hsl"];

const ColorPicker = {
  name: 'ColorPicker',
  props: {
    value: String,
    showMode: Boolean,
    disabled: Boolean,
    disabledAlpha: Boolean,
    showText: Boolean,
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["hover", "click"].indexOf(value) >= 0;
      },
    },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    mode: {
      type: String, default: 'hex',
      validator: function (value) {
        return modes.includes(value)
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
      opened: false,
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
      this.$emit("input", value);
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
    delayHide() {
      this.hideTimer = setTimeout(() => {
        this.opened = false;
      }, 300);
    },
    renderDrop() {
      const props = {
        props: {
          placement: this.placement,
          transfer: true,
          value: this.opened,
          selection: this.$el,
          className: 'k-color-picker-dropdown',
          transitionName: 'k-color-picker',
          extendWidth: false,
          trigger: this.trigger
        },
        on: {
          hide: this.delayHide,
        }
      }
      return (<Drop {...props}>
        <div class='k-color-picker-body' onMouseenter={()=>clearTimeout(this.hideTimer)}>
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
          <div class={`k-color-picker-arrow`}>
            <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
              <path
                id="ot"
                d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
              />
              <path
                stroke="currentcolor"
                id="in"
                d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
              />
            </svg>
          </div>
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
    const defaultNode = getChildren(this.$slots.default)
    if (defaultNode.length > 0) {
      const props = { on: {} }
      if (this.trigger == 'click') {
        props.on.click = this.toggleDrop
      } else if (this.trigger == 'hover') {
        props.on.mouseenter = this.toggleDrop
        props.on.mouseleave = this.delayHide
      }
      return cloneVNode(defaultNode[0], props, drop)
    } else {
      return (<div class={style} onClick={this.toggleDrop}>
        <div class="k-color-picker-selection">
          <div class="k-color-picker-color">
            <div class="k-color-picker-color-inner" style={`background-color:${this.currentColor}`}></div>
          </div>
          {this.renderTriggerText()}
        </div>
        {drop}
      </div>)
    }
  }
}

export default withInstall(ColorPicker)