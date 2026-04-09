import Color, { type ColorObject } from "color";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { cloneNodes } from "../utils/vnode";
import Alpha from "./alpha";
import Hue from "./hue";
import Mode from "./mode";
import Paint from "./paint";
import Presets from "./presets";

import {
  defineComponent,
  type ExtractPropTypes,
  nextTick,
  onBeforeUnmount,
  onMounted,
  type PropType,
  ref,
  Transition,
  watch,
} from "vue";
import type { BooleanType, DropPlacementsType, SizeType } from "../const/types";
type ColorMode = "hex" | "rgb" | "hsl";
export const colorPickerProps = {
  modelValue: String,
  value: String,
  transfer: { type: Boolean as BooleanType, default: true },
  disabled: Boolean as BooleanType,
  disabledAlpha: Boolean as BooleanType,
  showText: Boolean as BooleanType,
  arrow: Boolean as BooleanType,
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
  trigger: {
    type: String as PropType<"hover" | "click">,
    default: "click",
  },
  size: {
    type: String as PropType<SizeType>,
    default: "default",
  },
  mode: {
    type: String as PropType<ColorMode>,
    default: "hex",
  },
  show: Boolean as BooleanType,
  presets: {
    type: Array as PropType<string[]>,
  },
};

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;

const ColorPicker = defineComponent({
  name: "ColorPicker",
  directives: {
    transfer,
    resize,
  },
  props: colorPickerProps,

  setup(props, { emit, slots }) {
    const currentMode = ref(props.mode);
    const currentColor = ref(props.modelValue || props.value || "#000000ff");
    const visible = ref(props.show);
    const refPopper = ref();
    const refSelection = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const rendered = ref(false);
    const currentAlpha = ref(1);
    const currentHue = ref(0);
    const hideTimer = ref();

    watch(
      () => props.modelValue,
      (v) => {
        currentColor.value = v || "#000000ff";
      }
    );
    onMounted(() => {
      if (props.modelValue) {
        currentAlpha.value = Color(props.modelValue).alpha();
        currentHue.value = Color(props.modelValue).hue();
      }
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", outsideClick);
    });
    const updatePopPosition = () => {
      nextTick(() => {
        setPlacement({
          refSelection,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };
    const outsideClick = (e: MouseEvent) => {
      const ctx = refSelection.value?.$el || refSelection.value;
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
    const toggle = (open: boolean) => {
      if (props.disabled) {
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
      return props.showText ? <div class="k-color-picker-trigger-text">{text}</div> : null;
    };
    const onUpdate = (color: any) => {
      currentColor.value = color;
      const value = getColor();
      emit("update:modelValue", value);
      emit("change", value);
    };

    const onUpdateRGB = ({ r, g, b }: ColorObject) => {
      const color = Color({ r, g, b, alpha: currentAlpha.value });
      onUpdate(color.rgb());
    };
    const onUpdateHue = (hue: number) => {
      currentHue.value = hue;
      const value = Color(currentColor.value).hue(hue).rgb();
      onUpdate(value);
    };

    const onUpdateAlpha = (a: number) => {
      currentAlpha.value = a;
      const value = Color(currentColor.value).alpha(a).rgb();
      onUpdate(value);
    };
    const onUpdateMode = (mode: ColorMode) => {
      currentMode.value = mode;
      onUpdate(currentColor.value);
      emit("update:mode", mode);
      setTimeout(() => {
        clearTimeout(hideTimer.value);
      }, 0);
    };
    const updateColorValue = (color: any) => {
      // console.log(color.string(), currentAlpha.value);
      currentAlpha.value = color.alpha();
      currentColor.value = color;
      currentHue.value = color.hue();
      onUpdate(color);
    };
    const updateColor = (color: any) => {
      currentAlpha.value = color.alpha();
      currentHue.value = color.hue();
      updateColorValue(color.rgb());
    };
    const renderDrop = () => {
      if (!rendered.value) return null;
      const _props = {
        ref: refPopper,
        "k-placement": currentPlacement.value,
        class: [
          "k-color-picker-dropdown",
          {
            "k-color-picker-disabled-alpha": props.disabledAlpha,
          },
        ],
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
        onMouseenter: () => {
          clearTimeout(hideTimer.value);
        },
      };

      // let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      return (
        <Transition name="k-color-picker">
          <div v-transfer={true} v-show={visible.value} {..._props}>
            <div class="k-color-picker-body">
              <Paint
                hue={currentHue.value}
                modelValue={currentColor.value}
                onUpdateRGB={onUpdateRGB}
              />
              <div class="k-color-picker-bar">
                <div class="k-color-picker-avatar">
                  <div
                    class="k-color-picker-avatar-inner"
                    style={`background-color:${currentColor.value}`}
                  ></div>
                </div>
                <div class="k-color-picker-bar-box">
                  <Hue hue={currentHue.value} onUpdateHue={onUpdateHue} />
                  {!props.disabledAlpha ? (
                    <Alpha modelValue={currentColor.value} onUpdateAlpha={onUpdateAlpha} />
                  ) : null}
                </div>
              </div>
              <Mode
                mode={currentMode.value}
                modelValue={currentColor.value}
                disabledAlpha={props.disabledAlpha}
                onUpdateMode={onUpdateMode}
                onUpdateColorValue={updateColorValue}
              />
              <Presets
                onUpdateColor={updateColor}
                modelValue={props.presets}
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
        </Transition>
      );
    };

    const onMouseleave = () => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "hover") {
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
          "k-color-picker-disabled": props.disabled,
          "k-color-picker-sm": props.size == "small",
          "k-color-picker-lg": props.size == "large",
        },
      ];
      const triggerClick = props.trigger == "click";
      return slots.default ? (
        <span>
          {cloneNodes(
            slots.default(),
            {
              ref: refSelection,
              onClick: () => triggerClick && toggle(!visible.value),
              onMouseenter: () => !triggerClick && toggle(true),
              onMouseleave: onMouseleave,
            },
            true
          )}
          {drop}
        </span>
      ) : (
        <div class={style} ref={refSelection} v-resize={updatePopPosition}>
          <div
            class="k-color-picker-selection"
            onMouseenter={() => !triggerClick && toggle(true)}
            onMouseleave={onMouseleave}
            onClick={() => triggerClick && toggle(!visible.value)}
          >
            <div class="k-color-picker-color">
              <div
                class="k-color-picker-color-inner"
                style={`background-color:${currentColor.value}`}
              ></div>
            </div>
            {renderTriggerText()}
          </div>
          {drop}
        </div>
      );
    };
  },
});
export default ColorPicker;
