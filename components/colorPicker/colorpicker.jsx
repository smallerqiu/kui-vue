import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";
const modes = ["rgb", "hex", "hsl"];
import Mode from "./mode";
import Hue from "./hue";
import Alpha from "./alpha";
import Paint from "./paint";
import Color from "color";
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  reactive,
  toRaw,
  Transition,
} from "vue";
export default defineComponent({
  name: "ColorPicker",
  directives: {
    transfer,
  },
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    disabled: Boolean,
    disabledAlpha: Boolean,
    showText: Boolean,
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
    },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    mode: {
      type: String,
      default: "hex",
      validator: function (value) {
        return modes.indexOf(value) !== -1;
      },
    },
    shape: String,
    show: Boolean,
    icon: [String, Array],
    presets: {
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
      validator: function (value) {
        return value.length <= 20;
      },
    },
  },

  setup(ps, { emit }) {
    const currentMode = ref(ps.mode);
    const currentColor = ref(ps.value || "#000000ff");
    const visible = ref(ps.show);
    const refPopper = ref(null);
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const rendered = ref(false);
    const alpha = ref(1);
    const hideTimer = ref(null);

    watch(
      () => ps.value,
      (v) => {
        currentColor.value = v;
        alpha.value = Color(v).alpha();
      }
    );
    onBeforeUnmount(() => {
      document.removeEventListener("click", outsideClick);
    });
    const updatePopPosition = () => {
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          3
        );
      });
    };
    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        clearTimeout(hideTimer.value);
        hideTimer.value = setTimeout(() => (visible.value = false), 200);
      }
    };
    const toggle = (open) => {
      if (ps.disabled) {
        return false;
      }
      if (open) {
        if (!rendered.value) {
          rendered.value = true;
          document.addEventListener("click", outsideClick);
          nextTick(() => {
            visible.value = true;
            updatePopPosition();
          });
        } else {
          updatePopPosition();
          visible.value = true;
        }
      } else {
        visible.value = false;
      }
      // currentColor = value || "#000"; ??
    };

    const renderDefaultColor = () => {
      let color = ps.presets.map((c) => (
        <span
          style={"background-color:" + c}
          onClick={(e) => updatePainter("COLOR", c)}></span>
      ));
      return <div class="k-coclor-picker-defaults">{[color]}</div>;
    };
    const getColor = () => {
      let text = "";
      const color = Color(currentColor.value);
      if (currentMode.value == "hex") {
        text = color.alpha() < 1 ? color.hexa() : color.hex();
      } else if (currentMode.value == "rgb") {
        text = color.rgb().string(0);
      } else if (currentMode.value == "hsl") {
        text = color.hsl().string(0);
      }
      return text;
    };
    const renderTriggerText = () => {
      let text = getColor();
      return ps.showText ? (
        <div class="k-coclor-picker-trigger-text">{text}</div>
      ) : null;
    };
    const onUpdate = (color) => {
      currentColor.value = color;
      const value = getColor();
      emit("update:value", value);
    };

    const onUpdateRGB = ({ r, g, b }) => {
      const color = Color({ r, g, b, alpha: alpha.value });
      onUpdate(color.rgb());
    };
    const onUpdateHue = (hue) => {
      console.log("hue", hue);
      // currentColor.value = color;
      // const value = getColor();
      const value = Color(currentColor.value).hue(hue).rgb();
      onUpdate(value);
    };

    const onUpdateAlpha = (a) => {
      alpha.value = a;
      const value = Color(currentColor.value).alpha(a).rgb();
      onUpdate(value);
    };
    const onUpdateMode = (mode) => {
      currentMode.value = mode;
      onUpdate(currentColor.value);
      emit("update:mode", mode);
      setTimeout(() => {
        clearTimeout(hideTimer.value);
      }, 0);
    };
    const renderDrop = () => {
      if (!rendered.value) return null;
      const props = {
        ref: refPopper,
        placement: "bottom-left",
        class: [
          "k-color-picker-dropdown",
          {
            "k-color-picker-disabled-alpha": ps.disabledAlpha,
          },
        ],
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
      };

      // let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      return (
        <Transition name="k-color-picker">
          <div v-transfer={true} v-show={visible.value} {...props}>
            <Paint value={currentColor.value} onUpdateRGB={onUpdateRGB} />
            <div class="k-color-picker-bar">
              <div class="k-color-picker-avatar">
                <div
                  class="k-color-picker-avatar-inner"
                  style={`background-color:${currentColor.value}`}></div>
              </div>
              <div class="k-color-picker-bar-box">
                <Hue value={currentColor.value} onUpdateHue={onUpdateHue} />
                <Alpha
                  value={currentColor.value}
                  show={!ps.disabledAlpha}
                  onUpdateAlpha={onUpdateAlpha}
                />
              </div>
            </div>
            <Mode
              mode={currentMode.value}
              value={currentColor.value}
              disabledAlpha={ps.disabledAlpha}
              onUpdateMode={onUpdateMode}
            />
            {renderDefaultColor()}
          </div>
        </Transition>
      );
    };

    return () => {
      let drop = renderDrop();
      let style = [
        "k-color-picker",
        {
          "k-color-picker-opened": visible.value,
          "k-color-picker-disabled": ps.disabled,
          "k-color-picker-sm": ps.size == "small",
          "k-color-picker-circle": ps.shape == "circle",
          "k-color-picker-lg": ps.size == "large",
        },
      ];

      return (
        <div class={style} ref={refCtx}>
          <div
            class="k-color-picker-selection"
            onClick={() => toggle(!visible.value)}>
            <div class="k-color-picker-color">
              <div
                class="k-color-picker-color-inner"
                style={`background-color:${currentColor.value}`}></div>
            </div>
            {renderTriggerText()}
          </div>
          {drop}
        </div>
      );
    };
  },
});
