import {
  computed,
  defineComponent,
  Fragment,
  nextTick,
  ref,
  watch,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";

export type InputOTPValidator = (value: string) => boolean;

const inputOTPProps = {
  modelValue: { type: [String, Number] as PropType<string | number>, default: "" },
  length: { type: Number, default: 6 },
  type: { type: String as PropType<"number" | "text">, default: "number" },
  size: String as PropType<SizeType>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  mask: Boolean as BooleanType,
  autofocus: Boolean as BooleanType,
  separator: [String, Number, Object] as PropType<VNodeChild>,
  validator: Function as PropType<InputOTPValidator>,
  theme: {
    type: String as PropType<ThemeType>,
    default: "fill",
  },
  shape: String as PropType<ShapeType>,
};

export type InputOTPProps = Partial<ExtractPropTypes<typeof inputOTPProps>> & {
  "onUpdate:modelValue"?: (value: string) => void;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
};

const InputOTP = defineComponent({
  name: "InputOTP",
  inheritAttrs: false,
  props: inputOTPProps,
  emits: ["update:modelValue", "change", "complete", "focus", "blur"],
  setup(props, { attrs, emit, expose }) {
    const inputs = ref<HTMLInputElement[]>([]);
    const focusedIndex = ref(-1);

    const normalize = (value: unknown) => {
      const text = String(value ?? "");
      return Array.from(text)
        .filter((char) => (props.type === "number" ? /\d/.test(char) : true))
        .filter((char) => (props.validator ? props.validator(char) : true))
        .join("")
        .slice(0, Math.max(0, props.length));
    };
    const currentValue = ref(normalize(props.modelValue));
    const chars = computed(() =>
      Array.from({ length: Math.max(0, props.length) }, (_, index) =>
        currentValue.value.charAt(index)
      )
    );

    const updateValue = (value: string) => {
      const nextValue = normalize(value);
      if (nextValue === currentValue.value) return;
      currentValue.value = nextValue;
      emit("update:modelValue", nextValue);
      emit("change", nextValue);
      if (nextValue.length === props.length) emit("complete", nextValue);
    };

    watch(
      () => props.modelValue,
      (value) => (currentValue.value = normalize(value))
    );
    watch(
      () => [props.length, props.type] as const,
      () => updateValue(currentValue.value)
    );

    const focus = (index = Math.min(currentValue.value.length, props.length - 1)) => {
      if (props.disabled || props.length <= 0) return;
      nextTick(() => inputs.value[Math.max(0, Math.min(index, props.length - 1))]?.focus());
    };
    const blur = () => inputs.value[focusedIndex.value]?.blur();
    expose({ focus, blur });

    const insert = (text: string, index: number) => {
      if (props.disabled || props.readonly) return;
      const value = normalize(text);
      if (!value) return;
      const start = Math.min(index, currentValue.value.length);
      const source = currentValue.value.split("");
      value.split("").forEach((char, offset) => {
        if (start + offset < props.length) source[start + offset] = char;
      });
      updateValue(source.join("").slice(0, props.length));
      focus(Math.min(start + value.length, props.length - 1));
    };

    const onInput = (event: Event, index: number) => {
      const target = event.target as HTMLInputElement;
      insert(target.value, index);
      target.value = chars.value[index] || "";
    };

    const onKeydown = (event: KeyboardEvent, index: number) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        focus(index + (event.key === "ArrowLeft" ? -1 : 1));
      } else if (event.key === "Backspace" || event.key === "Delete") {
        if (props.readonly) return;
        event.preventDefault();
        const target =
          event.key === "Backspace" && !chars.value[index] ? Math.max(0, index - 1) : index;
        const source = currentValue.value.split("");
        source.splice(target, 1);
        updateValue(source.join(""));
        focus(target);
      }
    };

    const onPaste = (event: ClipboardEvent, index: number) => {
      event.preventDefault();
      insert(event.clipboardData?.getData("text") || "", index);
    };

    return () => (
      <div
        {...attrs}
        class={[
          "k-input-otp",
          {
            "k-input-otp-sm": props.size === "small",
            "k-input-otp-lg": props.size === "large",
            "k-input-otp-disabled": props.disabled,
            "k-input-otp-readonly": props.readonly,
            [`k-input-otp-${props.theme}`]: props.theme,
            [`k-input-otp-${props.shape}`]: props.shape,
          },
          attrs.class,
        ]}
        role="group"
        aria-disabled={props.disabled || undefined}
      >
        {chars.value.map((char, index) => (
          <Fragment key={index}>
            {index > 0 && props.separator !== undefined && (
              <span class="k-input-otp-separator">{props.separator}</span>
            )}
            <input
              key={index}
              ref={(el) => el && (inputs.value[index] = el as HTMLInputElement)}
              class="k-input-otp-item"
              value={char}
              type={props.mask ? "password" : "text"}
              inputmode={props.type === "number" ? "numeric" : "text"}
              pattern={props.type === "number" ? "[0-9]*" : undefined}
              maxlength={props.length}
              disabled={props.disabled}
              readonly={props.readonly}
              autocomplete={index === 0 ? "one-time-code" : "off"}
              aria-label={`${index + 1} / ${props.length}`}
              autofocus={props.autofocus && index === 0}
              onInput={(event) => onInput(event, index)}
              onKeydown={(event) => onKeydown(event, index)}
              onPaste={(event) => onPaste(event, index)}
              onFocus={(event) => {
                focusedIndex.value = index;
                (event.target as HTMLInputElement).select();
                emit("focus", event);
              }}
              onBlur={(event) => {
                focusedIndex.value = -1;
                emit("blur", event);
              }}
            />
          </Fragment>
        ))}
      </div>
    );
  },
});

export default InputOTP as DefineComponent<InputOTPProps>;
