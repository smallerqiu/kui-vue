import { useInitialValue } from "../utils/model-value";
import {
  computed,
  defineComponent,
  Fragment,
  nextTick,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import type { InputOTPValidator } from "./types";

const inputOTPProps = {
  modelValue: { type: [String, Number] as PropType<string | number>, default: undefined },
  value: { type: [String, Number] as PropType<string | number>, default: "" },
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

export type InputOTPProps = ExtractPropTypes<typeof inputOTPProps>;

const InputOTP = defineComponent({
  name: "InputOTP",
  inheritAttrs: false,
  props: inputOTPProps,
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
    change: (value: string) => typeof value === "string",
    complete: (value: string) => typeof value === "string",
    focus: (event: FocusEvent) => Boolean(event),
    blur: (event: FocusEvent) => Boolean(event),
  },
  setup(props, { attrs, emit, expose }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const inputs = ref<Array<HTMLInputElement | null>>([]);
    const focusedIndex = ref(-1);
    const composing = new Set<number>();
    const otpLength = computed(() => Math.max(0, Math.trunc(props.length)));

    const normalize = (value: unknown) => {
      const text = String(value ?? "");
      return Array.from(text)
        .filter((char) => (props.type === "number" ? /\d/.test(char) : true))
        .filter((char) => (props.validator ? props.validator(char) : true))
        .join("")
        .slice(0, otpLength.value);
    };
    const currentValue = ref(normalize(field?.prop ? field.value.value : initialModel.value));
    const chars = computed(() =>
      Array.from(
        { length: otpLength.value },
        (_, index) => Array.from(currentValue.value)[index] ?? "",
      ),
    );

    const updateValue = (value: string) => {
      const nextValue = normalize(value);
      if (nextValue === currentValue.value) return;
      currentValue.value = nextValue;
      emit("update:modelValue", nextValue);
      if (field?.prop) field.update(nextValue);
      emit("change", nextValue);
      if (otpLength.value > 0 && Array.from(nextValue).length === otpLength.value)
        emit("complete", nextValue);
    };

    watch(
      () => (field?.prop ? field.value.value : initialModel.value),
      (value) => (currentValue.value = normalize(value)),
    );
    watch(
      () => [props.length, props.type, props.validator] as const,
      () => updateValue(currentValue.value),
    );

    const focus = (
      index = Math.min(Array.from(currentValue.value).length, otpLength.value - 1),
    ) => {
      if (props.disabled || field?.disabled.value || otpLength.value <= 0) return;
      nextTick(() => inputs.value[Math.max(0, Math.min(index, otpLength.value - 1))]?.focus());
    };
    const blur = () => inputs.value[focusedIndex.value]?.blur();
    expose({ focus, blur });

    const insert = (text: string, index: number) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      const value = normalize(text);
      if (!value) return;
      const start = Math.min(index, Array.from(currentValue.value).length);
      const source = Array.from(currentValue.value);
      const inserted = Array.from(value);
      inserted.forEach((char, offset) => {
        if (start + offset < otpLength.value) source[start + offset] = char;
      });
      updateValue(source.slice(0, otpLength.value).join(""));
      focus(Math.min(start + inserted.length, otpLength.value - 1));
    };

    const onInput = (event: Event, index: number) => {
      const target = event.target as HTMLInputElement;
      if (composing.has(index)) return;
      insert(target.value, index);
      target.value = chars.value[index] || "";
    };

    const onKeydown = (event: KeyboardEvent, index: number) => {
      if (props.disabled || field?.disabled.value) return;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        focus(index + (event.key === "ArrowLeft" ? -1 : 1));
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        focus(event.key === "Home" ? 0 : otpLength.value - 1);
      } else if (event.key === "Backspace" || event.key === "Delete") {
        if (props.readonly || field?.readonly.value) return;
        event.preventDefault();
        const target =
          event.key === "Backspace" && !chars.value[index] ? Math.max(0, index - 1) : index;
        const source = Array.from(currentValue.value);
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
            "k-input-otp-sm": appearance.size.value === "small",
            "k-input-otp-lg": appearance.size.value === "large",
            "k-input-otp-disabled": props.disabled || field?.disabled.value,
            "k-input-otp-readonly": props.readonly || field?.readonly.value,
            [`k-input-otp-${appearance.theme.value}`]: appearance.theme.value,
            [`k-input-otp-${appearance.shape.value}`]: appearance.shape.value,
          },
          attrs.class,
        ]}
        role="group"
        {...resolveFormControlAttrs(attrs, field)}
        aria-disabled={props.disabled || field?.disabled.value || undefined}
        aria-readonly={props.readonly || field?.readonly.value || undefined}
      >
        {chars.value.map((char, index) => (
          <Fragment key={index}>
            {index > 0 && props.separator !== undefined && (
              <span class="k-input-otp-separator">{props.separator}</span>
            )}
            <input
              key={index}
              ref={(el) => {
                inputs.value[index] = el as HTMLInputElement | null;
              }}
              class="k-input-otp-item"
              value={char}
              type={props.mask ? "password" : "text"}
              inputmode={props.type === "number" ? "numeric" : "text"}
              pattern={props.type === "number" ? "[0-9]*" : undefined}
              maxlength={otpLength.value}
              disabled={props.disabled || field?.disabled.value}
              readonly={props.readonly || field?.readonly.value}
              autocomplete={index === 0 ? "one-time-code" : "off"}
              aria-label={`${index + 1} / ${otpLength.value}`}
              autofocus={props.autofocus && index === 0}
              onInput={(event) => onInput(event, index)}
              onCompositionstart={() => composing.add(index)}
              onCompositionend={() => {
                composing.delete(index);
              }}
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
                field?.blur();
              }}
            />
          </Fragment>
        ))}
      </div>
    );
  },
});

export default markFormFieldComponent(InputOTP);

export type { InputOTPValidator } from "./types";
