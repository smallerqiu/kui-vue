import { useInitialValue } from "../utils/model-value";
import Popup, { type PopupRef } from "../popup";
import type { ForwardedComponent } from "../utils/vue";
import Color, { type ColorObject } from "color";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import { cloneNodes } from "../utils/vnode";
import Alpha from "./alpha";
import Hue from "./hue";
import Mode from "./mode";
import Paint from "./paint";
import Presets from "./presets";

import {
  defineComponent,
  type ExtractPropTypes,
  h,
  mergeProps,
  nextTick,
  type PropType,
  ref,
  watch,
} from "vue";
import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import type { ColorMode } from "./types";
export type { ColorMode } from "./types";
const colorPickerProps = {
  modelValue: String,
  value: String,
  opened: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  disabledAlpha: Boolean as BooleanType,
  showText: Boolean as BooleanType,
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
  },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: String as PropType<ShapeType>,
  mode: {
    type: String as PropType<ColorMode>,
    default: "hex",
  },
  presets: {
    type: Array as PropType<string[]>,
  },
  panelOnly: Boolean as BooleanType,
};

export type ColorPickerProps = ExtractPropTypes<typeof colorPickerProps>;

const ColorPicker = defineComponent({
  name: "ColorPicker",
  props: colorPickerProps,
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
    "update:mode": (mode: ColorMode) => ["hex", "rgb", "hsl"].includes(mode),
    change: (value: string) => typeof value === "string",
    openChange: (open: boolean) => typeof open === "boolean",
  },

  setup(props, { attrs, emit, slots }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);

    const initialColor =
      (field?.prop ? String(field.value.value ?? "") : initialModel.value) || "#000000ff";
    const initialColorValue = Color(initialColor);
    const currentMode = ref(props.mode);
    type ColorInstance = ReturnType<typeof Color>;
    const currentColor = ref<string | ColorInstance>(initialColor);
    const visible = ref(Boolean(props.opened || props.panelOnly));
    const refPopper = ref();
    const refSelection = ref();

    const currentAlpha = ref(initialColorValue.alpha());
    const currentHue = ref(initialColorValue.hue());

    watch(
      () => (field?.prop ? field.value.value : initialModel.value),
      (v) => {
        const value = String(v || "#000000ff");
        const color = Color(value);
        currentColor.value = value;
        currentAlpha.value = color.alpha();
        currentHue.value = color.hue();
      },
    );
    watch(
      () => props.mode,
      (mode) => {
        currentMode.value = mode;
      },
    );
    watch(
      () => props.opened,
      (opened) => {
        const nextVisible = Boolean(props.panelOnly || opened);

        visible.value = nextVisible;
        if (nextVisible && !props.panelOnly) nextTick(updatePopPosition);
      },
    );
    const popup = ref<PopupRef>();
    const updatePopPosition = () => popup.value?.updatePosition();
    const openChange = (opened: boolean) => {
      visible.value = Boolean(props.panelOnly || opened);
      emit("openChange", opened);
    };
    const toggle = (open: boolean) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value) {
        return false;
      }
      popup.value?.cancelClose();
      openChange(open);
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
      const text = getColor();
      return props.showText ? <div class="k-color-picker-trigger-text">{text}</div> : null;
    };
    const interactionBlocked = () =>
      Boolean(props.disabled || field?.disabled.value || props.readonly || field?.readonly.value);
    const blockPanelInteraction = (event: Event) => {
      if (interactionBlocked()) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    const onUpdate = (color: string | ColorInstance) => {
      if (interactionBlocked()) return;
      currentColor.value = color;
      const value = getColor();
      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
      emit("change", value);
    };

    const onUpdateRGB = ({ r, g, b }: ColorObject) => {
      if (interactionBlocked()) return;
      const color = Color({ r, g, b, alpha: currentAlpha.value });
      onUpdate(color.rgb());
    };
    const onUpdateHue = (hue: number) => {
      if (interactionBlocked()) return;
      currentHue.value = hue;
      const value = Color(currentColor.value).hue(hue).rgb();
      onUpdate(value);
    };

    const onUpdateAlpha = (a: number) => {
      if (interactionBlocked()) return;
      currentAlpha.value = a;
      const value = Color(currentColor.value).alpha(a).rgb();
      onUpdate(value);
    };
    const onUpdateMode = (mode: ColorMode) => {
      if (interactionBlocked()) return;
      currentMode.value = mode;
      onUpdate(currentColor.value);
      emit("update:mode", mode);
      setTimeout(() => {
        popup.value?.cancelClose();
      }, 0);
    };
    const updateColorValue = (color: ColorInstance) => {
      if (interactionBlocked()) return;
      currentAlpha.value = color.alpha();
      currentColor.value = color;
      currentHue.value = color.hue();
      onUpdate(color);
    };
    const updateColor = (color: ColorInstance) => {
      if (interactionBlocked()) return;
      currentAlpha.value = color.alpha();
      currentHue.value = color.hue();
      updateColorValue(color.rgb());
    };
    const renderDrop = () => {
      const _props = {
        ref: refPopper,
        "aria-disabled": props.disabled || field?.disabled.value || undefined,
        onClickCapture: blockPanelInteraction,
        onMousedownCapture: blockPanelInteraction,
        onKeydownCapture: blockPanelInteraction,
        "k-placement": props.placement,
        class: [
          "k-color-picker-dropdown",
          {
            "k-color-picker-disabled-alpha": props.disabledAlpha,
            "k-color-picker-panel": props.panelOnly,
          },
        ],
        onMouseleave: () => {
          if (props.trigger === "hover") popup.value?.scheduleClose();
        },
        onMouseenter: () => {
          popup.value?.cancelClose();
        },
      };
      const panelProps = props.panelOnly ? mergeProps(attrs, _props) : _props;

      // let [r, g, b] = hslToRgb(color.H, color.S, color.L);
      const panel = (
        <div {...panelProps}>
          <div class="k-color-picker-body" inert={interactionBlocked()}>
            <Paint
              disabled={interactionBlocked()}
              hue={currentHue.value}
              modelValue={currentColor.value}
              visible={visible.value}
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
                <Hue
                  disabled={interactionBlocked()}
                  hue={currentHue.value}
                  onUpdateHue={onUpdateHue}
                />
                {!props.disabledAlpha ? (
                  <Alpha
                    disabled={interactionBlocked()}
                    modelValue={currentColor.value}
                    onUpdateAlpha={onUpdateAlpha}
                  />
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
          {!props.panelOnly && (
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
          )}
        </div>
      );
      if (props.panelOnly) return panel;
      return (
        <Popup
          ref={popup}
          raw
          open={visible.value}
          target={refSelection}
          trigger="manual"
          placement={props.placement}
          prefixCls="k-color-picker-dropdown"
          transitionName="k-color-picker"
          onOpenChange={openChange}
          v-slots={{ overlay: () => panel }}
        />
      );
    };

    const onMouseleave = () => {
      if (props.disabled || field?.disabled.value) {
        return;
      }
      if (props.trigger == "hover") {
        popup.value?.scheduleClose();
      }
    };

    return () => {
      const drop = renderDrop();
      if (props.panelOnly) return drop;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const theme = appearance.theme.value;
      const shape = appearance.shape.value;
      const style = [
        "k-color-picker",
        {
          "k-color-picker-opened": visible.value,
          "k-color-picker-disabled": disabled,
          "k-color-picker-readonly": readonly,
          "k-color-picker-sm": size == "small",
          "k-color-picker-lg": size == "large",
          [`k-color-picker-${theme}`]: theme && theme !== "outline",
          [`k-color-picker-${shape}`]: shape,
        },
      ];
      const triggerClick = props.trigger == "click";
      const onTriggerKeydown = (event: KeyboardEvent) => {
        if (disabled || readonly) return;
        if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
          event.preventDefault();
          toggle(true);
        } else if (event.key === "Escape" && visible.value) {
          event.preventDefault();
          toggle(false);
        }
      };
      return slots.default ? (
        <span
          {...mergeProps(attrs, resolveFormControlAttrs(attrs, field))}
          role="combobox"
          tabindex={disabled ? undefined : 0}
          aria-haspopup="dialog"
          aria-expanded={visible.value}
          onKeydown={onTriggerKeydown}
        >
          {cloneNodes(
            slots.default(),
            {
              ref: refSelection,
              onClick: () => triggerClick && toggle(!visible.value),
              onMouseenter: () => !triggerClick && toggle(true),
              onMouseleave: onMouseleave,
            },
            true,
          )}
          {drop}
        </span>
      ) : (
        <div
          {...mergeProps(attrs, resolveFormControlAttrs(attrs, field), {
            class: style,
            ref: refSelection,
            "aria-disabled": disabled || undefined,
            "aria-readonly": readonly || undefined,
            role: "combobox",
            tabindex: disabled ? undefined : 0,
            "aria-haspopup": "dialog",
            "aria-expanded": visible.value,
            onKeydown: onTriggerKeydown,
            onFocusout: () => field?.blur(),
          })}
        >
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

export const ColorPickerPanel = defineComponent({
  name: "ColorPickerPanel",
  inheritAttrs: false,
  props: colorPickerProps,
  setup:
    (props, { attrs }) =>
    () =>
      h(ColorPicker, { ...attrs, ...props, panelOnly: true }),
}) as ForwardedComponent<typeof ColorPicker>;
export default markFormFieldComponent(ColorPicker);
