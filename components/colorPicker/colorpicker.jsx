import transfer from "../directives/transfer";
import resize from "../directives/resize";
import { setPlacement } from "../utils/placement";
const modes = ["rgb", "hex", "hsl"];
import Mode from "./mode";
import Hue from "./hue";
import Alpha from "./alpha";
import Paint from "./paint";
import Color from "color";
import Presets from "./presets";
import { cloneNodes } from "../utils/vnode";
import { withInstall } from '../utils/vue';
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  // Transition,
} from "vue";
const ColorPicker = defineComponent({
  name: "ColorPicker",
  directives: {
    transfer, resize
  },
  props: {
    value: String,
    transfer: { type: Boolean, default: true },
    disabled: Boolean,
    disabledAlpha: Boolean,
    showText: Boolean,
    arrow: Boolean,
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
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["hover", "click"].indexOf(value) >= 0;
      },
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
    show: Boolean,
    presets: {
      type: Array,
    },
  },

  setup(ps, { emit, slots }) {
    // todo 编码格式 时, 要双击 才能先中.
    const currentMode = ref(ps.mode);
    const currentColor = ref(ps.value || "#000000ff");
    const visible = ref(ps.show);
    const refPopper = ref();
    const refCtx = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const rendered = ref(false);
    const currentAlpha = ref(1);
    const currentHue = ref(0);
    const hideTimer = ref();

    watch(
      () => ps.value,
      (v) => {
        currentColor.value = v;
        // currentAlpha.value = Color(v).alpha();
        // currentHue.value = Color(v).hue();
      }
    );
    onMounted(() => {
      if (ps.value) {
        currentAlpha.value = Color(ps.value).alpha();
        currentHue.value = Color(ps.value).hue();
      }
    });
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
          visible.value = true;
          updatePopPosition();
        }
      } else {
        visible.value = false;
      }
      // currentColor = value || "#000"; ??
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
        <div class="k-color-picker-trigger-text">{text}</div>
      ) : null;
    };
    const onUpdate = (color) => {
      currentColor.value = color;
      const value = getColor();
      // emit("update:value", value);
      emit("input", value);
      emit("change", value);
    };

    const onUpdateRGB = ({ r, g, b }) => {
      const color = Color({ r, g, b, alpha: currentAlpha.value });
      onUpdate(color.rgb());
    };
    const onUpdateHue = (hue) => {
      // console.log("hue", hue);
      currentHue.value = hue;
      // currentColor.value = color;
      // const value = getColor();
      const value = Color(currentColor.value).hue(hue).rgb();
      onUpdate(value);
    };

    const onUpdateAlpha = (a) => {
      currentAlpha.value = a;
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
    const updateColorValue = (color) => {
      // console.log(color.string(), currentAlpha.value);
      currentAlpha.value = color.alpha();
      currentColor.value = color;
      currentHue.value = color.hue();
      onUpdate(color);
    };
    const updateColor = (color) => {
      currentAlpha.value = color.alpha();
      currentHue.value = color.hue();
      updateColorValue(color.rgb());
    };
    const renderDrop = () => {
      if (!rendered.value) return null;
      const props = {
        ref: refPopper,
        // "k-placement": currentPlacement.value,
        attrs: { "k-placement": currentPlacement.value, },
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
        // onMouseenter: () => {
        //   clearTimeout(hideTimer.value);
        // },
        on: {
          mouseenter: () => {
            clearTimeout(hideTimer.value);
          },
        },
      };

      // let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      return (
        <transition name="k-color-picker">
          <div v-transfer={true} v-show={visible.value} {...props}>
            <div class="k-color-picker-body">
              <Paint
                hue={currentHue.value}
                value={currentColor.value}
                onUpdateRGB={onUpdateRGB}
              />
              <div class="k-color-picker-bar">
                <div class="k-color-picker-avatar">
                  <div
                    class="k-color-picker-avatar-inner"
                    style={`background-color:${currentColor.value}`}></div>
                </div>
                <div class="k-color-picker-bar-box">
                  <Hue hue={currentHue.value} onUpdateHue={onUpdateHue} />
                  {!ps.disabledAlpha ? (
                    <Alpha
                      value={currentColor.value}
                      onUpdateAlpha={onUpdateAlpha}
                    />
                  ) : null}
                </div>
              </div>
              <Mode
                mode={currentMode.value}
                value={currentColor.value}
                disabledAlpha={ps.disabledAlpha}
                onUpdateMode={onUpdateMode}
                onUpdateColorValue={updateColorValue}
              />
              <Presets
                onUpdateColor={updateColor}
                value={ps.presets}
                color={currentColor.value}
              />
            </div>
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
        </transition>
      );
    };

    const onMouseleave = (e) => {
      if (ps.disabled) {
        return;
      }
      if (ps.trigger == "hover") {
        hideTimer.value = setTimeout(() => {
          toggle(false);
        }, 300);
      }
    };

    return () => {
      let drop = renderDrop();
      let style = [
        "k-color-picker",
        {
          "k-color-picker-opened": visible.value,
          "k-color-picker-disabled": ps.disabled,
          "k-color-picker-sm": ps.size == "small",
          "k-color-picker-lg": ps.size == "large",
        },
      ];
      const triggerClick = ps.trigger == "click";
      return slots.default ? (
        <span>
          {cloneNodes(slots.default(), {
            ref: refCtx,
            on: {
              click: () => triggerClick && toggle(!visible.value),
              mouseenter: () => !triggerClick && toggle(true),
              mouseleave: onMouseleave,
            },
            // onClick: () => triggerClick && toggle(!visible.value), //for 3
            // onMouseenter: () => !triggerClick && toggle(true),
            // onMouseleave: onMouseleave,
          }, true)}
          {drop}
        </span>
      ) : (
        <div class={style} ref={refCtx} v-resize={updatePopPosition}>
          <div
            class="k-color-picker-selection"
            onMouseenter={() => !triggerClick && toggle(true)}
            onMouseleave={onMouseleave}
            onClick={() => triggerClick && toggle(!visible.value)}>
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
export default withInstall(ColorPicker);
