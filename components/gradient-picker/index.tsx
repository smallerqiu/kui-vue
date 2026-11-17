import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  mergeProps,
  nextTick,
  type PropType,
  ref,
  watch,
} from "vue";
import { ColorPickerPanel } from "../color-picker";
import type { ColorMode } from "../color-picker/types";
import type { BooleanType, SizeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import Popup, { PopupArrow, type PopupRef } from "../popup";
import { useInitialValue } from "../utils/model-value";
import Corners from "./corners";
import Stops from "./stops";
import {
  formatColor,
  formatGradient,
  gradientColorAtOffset,
  normalizeGradient,
  type CornerGradientValue,
  type GradientStop,
  type GradientType,
  type GradientValue,
} from "./types";

export {
  createCornerGradient,
  createLinearGradient,
  formatGradient,
  type CornerGradientValue,
  type GradientStop,
  type GradientType,
  type GradientValue,
} from "./types";

const gradientPickerProps = {
  modelValue: Array as PropType<GradientValue>,
  /** 初始值，仅初始化时读取；后续更新使用 modelValue，同时传入时 modelValue 优先。 */
  value: Array as PropType<GradientValue>,
  type: { type: String as PropType<GradientType>, default: "linear" },
  /** 颜色面板是否提供透明度调节；开启后色标颜色可以是 `#rrggbbaa` / `rgba()`。 */
  alpha: Boolean as BooleanType,
  arrowPointAtCenter: { type: Boolean as BooleanType, default: true },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  mode: {
    type: String as PropType<ColorMode>,
    default: "hex",
  },
  /** 控件尺寸，与其它控件一样分三档；色条加色标或四角预览块的总高度与对应尺寸的控件一致。 */
  size: String as PropType<SizeType>,
};

export type GradientPickerProps = ExtractPropTypes<typeof gradientPickerProps>;

const GradientPicker = defineComponent({
  name: "GradientPicker",
  props: gradientPickerProps,
  emits: {
    "update:modelValue": (value: GradientValue) => Array.isArray(value),
    "update:mode": (mode: ColorMode) => ["hex", "rgb", "hsl"].includes(mode),
    change: (value: GradientValue) => Array.isArray(value),
  },

  setup(props, { attrs, emit }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);

    const innerValue = ref<GradientValue>(
      normalizeGradient(
        (field?.prop ? field.value.value : initialModel.value) as GradientValue | undefined,
        props.type,
      ),
    );
    const selectedStop = ref(0);
    const selectedCorner = ref(0);
    const currentMode = ref(props.mode);
    const colorOpen = ref(false);
    const activeMarker = ref<HTMLElement | null>(null);
    const popup = ref<PopupRef>();
    // `v-model` hands our own value straight back — typically wrapped in a reactive proxy, so the
    // object identity differs. Compare the normalized content instead; that echo must not close
    // the panel mid-edit.
    let lastCommitted: string | null = null;

    watch(
      () => (field?.prop ? field.value.value : initialModel.value),
      (source) => {
        const next = normalizeGradient(source as GradientValue | undefined, props.type);
        const echo = JSON.stringify(next) === lastCommitted;
        lastCommitted = null;
        innerValue.value = next;
        if (!echo) colorOpen.value = false;
      },
      { deep: true },
    );
    watch(
      () => props.type,
      (type) => {
        innerValue.value = normalizeGradient(innerValue.value, type);
        selectedStop.value = 0;
        selectedCorner.value = 0;
        colorOpen.value = false;
      },
    );
    watch(
      () => props.mode,
      (mode) => {
        currentMode.value = mode;
      },
    );
    watch(
      innerValue,
      (value) => {
        if (props.type === "linear" && selectedStop.value > (value as GradientStop[]).length - 1) {
          selectedStop.value = Math.max(0, (value as GradientStop[]).length - 1);
        }
      },
      { deep: true },
    );

    const interactionBlocked = () =>
      Boolean(props.disabled || field?.disabled.value || props.readonly || field?.readonly.value);
    watch(interactionBlocked, (blocked) => {
      if (blocked) colorOpen.value = false;
    });

    const commit = (next: GradientValue) => {
      if (interactionBlocked()) return;
      innerValue.value = next;
      lastCommitted = JSON.stringify(next);
      emit("update:modelValue", next);
      if (field?.prop) field.update(next);
      emit("change", next);
    };

    const selectedColor = computed(() => {
      const value = innerValue.value;
      return props.type === "corner"
        ? ((value as CornerGradientValue)[selectedCorner.value] ?? "#000000")
        : ((value as GradientStop[])[selectedStop.value]?.color ?? "#000000");
    });

    const writeSelectedColor = (color: string) => {
      if (interactionBlocked()) return;
      const next = formatColor(color);
      const value = innerValue.value;
      if (props.type === "corner") {
        const colors = [...(value as CornerGradientValue)] as CornerGradientValue;
        colors[selectedCorner.value] = next;
        commit(colors);
      } else {
        const stops = (value as GradientStop[]).map((stop, index) =>
          index === selectedStop.value ? { ...stop, color: next } : stop,
        );
        commit(stops);
      }
    };

    const onUpdateMode = (mode: ColorMode) => {
      if (interactionBlocked()) return;
      currentMode.value = mode;
      emit("update:mode", mode);
    };

    // A stop or corner asks for its color panel: the panel follows that marker.
    const openColorPanel = (index: number, element: HTMLElement) => {
      if (interactionBlocked()) return;
      if (props.type === "linear") selectedStop.value = index;
      else selectedCorner.value = index;
      activeMarker.value = element;
      colorOpen.value = true;
      nextTick(() => popup.value?.updatePosition());
    };

    const addStop = (offset: number) => {
      if (interactionBlocked() || props.type !== "linear") return;
      const stops = innerValue.value as GradientStop[];
      const color = gradientColorAtOffset(stops, offset);
      const index = stops.filter((stop) => stop.offset < offset).length;
      const next = [...stops];
      next.splice(index, 0, { color, offset });
      commit(next);
      selectedStop.value = index;
    };
    const moveStop = (index: number, offset: number) => {
      if (interactionBlocked() || props.type !== "linear") return;
      const next = (innerValue.value as GradientStop[]).map((stop, i) =>
        i === index ? { ...stop, offset } : stop,
      );
      commit(next);
    };
    const removeStop = (index: number) => {
      if (interactionBlocked() || props.type !== "linear") return;
      const stops = innerValue.value as GradientStop[];
      if (stops.length <= 2) return;
      const next = stops.filter((_, i) => i !== index);
      commit(next);
      selectedStop.value = Math.max(0, Math.min(index, next.length - 1));
      colorOpen.value = false;
    };

    // The panel is ColorPicker's own; its alpha row follows the `alpha` switch. It sits in a plain
    // box because the popup positions whatever it is given, and it needs a DOM element to measure.
    const colorPanel = () => (
      <div class="k-gradient-picker-color-popup k-color-picker-dropdown">
        <ColorPickerPanel
          modelValue={selectedColor.value}
          disabled={interactionBlocked()}
          disabledAlpha={!props.alpha}
          mode={currentMode.value}
          onChange={writeSelectedColor}
          onUpdate:mode={onUpdateMode}
        />
        <PopupArrow prefixCls="k-color-picker" />
      </div>
    );

    return () => {
      const value = innerValue.value;
      const cssText = formatGradient(value);
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      return (
        <div
          {...mergeProps(attrs, resolveFormControlAttrs(attrs, field), {
            class: [
              "k-gradient-picker",
              {
                "k-gradient-picker-disabled": disabled,
                "k-gradient-picker-readonly": readonly,
                "k-gradient-picker-sm": size === "small",
                "k-gradient-picker-lg": size === "large",
              },
            ],
            "aria-disabled": disabled || undefined,
            "aria-readonly": readonly || undefined,
            onFocusout: () => field?.blur(),
          })}
        >
          {props.type === "linear" ? (
            <>
              <div class="k-gradient-picker-bar">
                <div class="k-gradient-picker-bar-fill" style={{ backgroundImage: cssText }} />
              </div>
              <Stops
                disabled={interactionBlocked()}
                stops={value as GradientStop[]}
                selected={selectedStop.value}
                onAdd={addStop}
                onMove={moveStop}
                onRemove={removeStop}
                onSelect={(index: number) => (selectedStop.value = index)}
                onActivate={openColorPanel}
              />
            </>
          ) : (
            <Corners
              disabled={interactionBlocked()}
              colors={value as CornerGradientValue}
              selected={selectedCorner.value}
              gradient={cssText}
              onActivate={openColorPanel}
            />
          )}
          <Popup
            ref={popup}
            raw
            arrowPointAtCenter={props.arrowPointAtCenter}
            open={colorOpen.value}
            target={activeMarker}
            trigger="manual"
            placement="bottom-left"
            offset={6}
            destroyOnClose
            transitionName="k-color-picker"
            onOpenChange={(open: boolean) => (colorOpen.value = open)}
            v-slots={{ overlay: colorPanel }}
          />
        </div>
      );
    };
  },
});

export default markFormFieldComponent(GradientPicker);
