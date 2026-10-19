import { Check } from "kui-icons";
import {
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type VNodeProps,
} from "vue";
import type { BooleanType, SizeType, MarkThemeType, ValueType } from "../const/types";
import { resolvePaintedTheme } from "../config/context";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";
import type { CheckboxChangeEvent } from "./types";

// The two looks a check box has: a shallow filled square and a bordered one. `fill` is also what the
// component reaches when nothing is written, so an unsupported value resolves here rather than
// shipping `k-checkbox-<tier>`, a class no LESS rule can answer. The four tiers left out — `plain` (a
// box with no edge is not a check box), `solid` / `dashed` (containers and drop zones) and
// `underlined` (only means something on a field you type into) — land on `fill` too, the same ruling
// `Tag` follows with five tiers instead of two.
const PAINTED_THEMES = ["fill", "outline"] as const;

const checkboxProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  value: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  label: { type: [String, Number] as PropType<string | number> },
  theme: { type: String as PropType<MarkThemeType>, default: "fill" },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  indeterminate: Boolean as BooleanType,
  size: {
    type: String as PropType<SizeType>,
  },
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
type CheckboxModelProps<T extends string | number | boolean> = {
  modelValue?: T;
  "onUpdate:modelValue"?: (value: T) => void;
};
type CheckboxPublicProps = Omit<Partial<CheckboxProps>, "modelValue" | "valueType"> &
  Omit<HTMLAttributes, "onChange"> & {
    key?: VNodeProps["key"];
    onChange?: (event: CheckboxChangeEvent) => void;
    "onUpdate:checked"?: (checked: boolean) => void;
  };
type CheckboxComponent = {
  new (props: CheckboxPublicProps & { valueType: "string" } & CheckboxModelProps<string>): {
    $props: CheckboxPublicProps & { valueType: "string" } & CheckboxModelProps<string>;
  };
  new (props: CheckboxPublicProps & { valueType: "number" } & CheckboxModelProps<number>): {
    $props: CheckboxPublicProps & { valueType: "number" } & CheckboxModelProps<number>;
  };
  new (props: CheckboxPublicProps & { valueType?: "boolean" } & CheckboxModelProps<boolean>): {
    $props: CheckboxPublicProps & { valueType?: "boolean" } & CheckboxModelProps<boolean>;
  };
};

const Checkbox = defineComponent({
  name: "Checkbox",
  inheritAttrs: false,
  props: checkboxProps,
  emits: {
    change: (event: CheckboxChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: string | number | boolean) =>
      ["string", "number", "boolean"].includes(typeof value),
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit, attrs }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const resolveChecked = (value: string | number | boolean | undefined, fallback = false) =>
      value === undefined ? fallback : value === true || value === 1 || value === "1";
    const isChecked = ref(
      resolveChecked(
        field?.prop
          ? (field.value.value as string | number | boolean | undefined)
          : props.modelValue,
        props.checked,
      ),
    );

    watch(
      () => props.checked,
      (v) => {
        if (props.modelValue === undefined) isChecked.value = Boolean(v);
      },
    );

    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (v) => {
        isChecked.value = resolveChecked(v as string | number | boolean | undefined, props.checked);
      },
    );

    const emitValue = (checked: boolean) => {
      isChecked.value = checked;
      const value = getValueWithType(checked, props.valueType);
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label ?? String(props.value ?? ""),
      } as CheckboxChangeEvent);
      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
      emit("update:checked", checked);
    };

    const onChange = (e: Event) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      e.stopPropagation();
      const target = e.target as HTMLInputElement;
      emitValue(target.checked);
    };

    return () => {
      const { indeterminate, label } = props;
      // Guarded on the resolved appearance, not on `props.theme`, so a `ConfigProvider` or a form that
      // hands down an unsupported tier lands on `fill` the same way a written one does.
      const theme = resolvePaintedTheme(appearance.theme.value, PAINTED_THEMES) ?? "fill";
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const { class: attrClass, style: attrStyle, ...inputAttrs } = attrs;

      const rootProps = {
        class: [
          "k-checkbox",
          {
            // Always exactly one tier: `theme` resolves to a painted value or to `fill`.
            [`k-checkbox-${theme}`]: true,
            "k-checkbox-disabled": disabled,
            "k-checkbox-readonly": readonly,
            "k-checkbox-checked": isChecked.value && !indeterminate,
            "k-checkbox-indeterminate": indeterminate,
            "k-checkbox-sm": size === "small",
            "k-checkbox-lg": size === "large",
          },
          attrClass,
        ],
        style: attrStyle,
        "aria-readonly": readonly || undefined,
      };

      const inputProps = {
        ...inputAttrs,
        type: "checkbox",
        class: "k-checkbox-input",
        disabled: disabled,
        indeterminate,
        "aria-checked": indeterminate ? ("mixed" as const) : isChecked.value,
        ...resolveFormControlAttrs(inputAttrs, field),
        "aria-readonly": readonly || undefined,
        checked: !!isChecked.value,
        onClick: (event: MouseEvent) => {
          if (readonly) event.preventDefault();
        },
        onChange: onChange,
        onBlur: () => field?.blur(),
      };

      const innerNode = isChecked.value && !indeterminate ? <Icon type={Check} /> : null;
      const labelNode = label ?? slots.default?.();

      return (
        <label {...rootProps}>
          <span class="k-checkbox-symbol">
            <input {...inputProps} />
            {innerNode}
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});

const FormCheckbox = markFormFieldComponent(Checkbox);
export default FormCheckbox as CheckboxComponent;
