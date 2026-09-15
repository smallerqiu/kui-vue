import { Loading } from "kui-icons";
import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, ref, watch } from "vue";
import type { BooleanType, ShapeType, SizeType, ValueType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";

const switchProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  type: String,
  color: String,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  size: {
    type: String as PropType<SizeType>,
  },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  trueText: String,
  falseText: String,
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;
type SwitchModelProps<T extends string | number | boolean> = {
  modelValue?: T;
  "onUpdate:modelValue"?: (value: T) => void;
  onChange?: (value: T) => void;
};
type SwitchPublicProps = Omit<Partial<SwitchProps>, "modelValue" | "valueType">;
type SwitchComponent = {
  new (props: SwitchPublicProps & { valueType: "string" } & SwitchModelProps<string>): {
    $props: SwitchPublicProps & { valueType: "string" } & SwitchModelProps<string>;
  };
  new (props: SwitchPublicProps & { valueType: "number" } & SwitchModelProps<number>): {
    $props: SwitchPublicProps & { valueType: "number" } & SwitchModelProps<number>;
  };
  new (props: SwitchPublicProps & { valueType?: "boolean" } & SwitchModelProps<boolean>): {
    $props: SwitchPublicProps & { valueType?: "boolean" } & SwitchModelProps<boolean>;
  };
};

const Switch = defineComponent({
  name: "Switch",
  inheritAttrs: false,
  props: switchProps,
  emits: {
    "update:modelValue": (value: string | number | boolean) =>
      ["string", "number", "boolean"].includes(typeof value),
    "update:checked": (checked: boolean) => typeof checked === "boolean",
    change: (value: string | number | boolean) =>
      ["string", "number", "boolean"].includes(typeof value),
  },
  setup(props, { slots, emit, attrs }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const resolveChecked = (value: string | number | boolean | undefined, fallback = false) =>
      value === undefined ? fallback : value === true || value === 1 || value === "1";
    const isChecked = ref(resolveChecked(props.modelValue, props.checked));
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (nv) => {
        isChecked.value = resolveChecked(
          nv as string | number | boolean | undefined,
          props.checked,
        );
      },
      { immediate: true },
    );
    watch(
      () => props.checked,
      (nv) => {
        if (props.modelValue === undefined) isChecked.value = nv;
      },
    );
    const change = () => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value) {
        return false;
      }
      const checked = !isChecked.value;
      isChecked.value = checked;
      const value = getValueWithType(checked, props.valueType);

      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
      emit("update:checked", checked);
      emit("change", value);
    };

    return () => {
      const { type, trueText, falseText, loading } = props;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const shape = appearance.shape.value;
      const classes = [
        "k-switch",
        {
          ["k-switch-checked"]: isChecked.value,
          ["k-switch-disabled"]: disabled || loading,
          ["k-switch-readonly"]: readonly,
          [`k-switch-${type}`]: !!type,
          ["k-switch-sm"]: size === "small",
          [`k-switch-${shape}`]: shape,
        },
      ];
      const children = slots.checked?.() || trueText || slots.unchecked?.() || falseText;
      const loadNode = loading ? <Icon spin type={Loading} class="k-switch-loading" /> : null;

      const textNode =
        size != "small" && children ? (
          <span class="k-switch-inner">
            {isChecked.value ? slots.checked?.() || trueText : slots.unchecked?.() || falseText}
          </span>
        ) : null;

      return (
        <button
          {...attrs}
          class={classes}
          style={props.color ? ({ "--kui-switch-color": props.color } as CSSProperties) : undefined}
          onClick={change}
          disabled={disabled || loading}
          role="switch"
          aria-checked={isChecked.value}
          {...resolveFormControlAttrs(attrs, field)}
          aria-readonly={readonly || undefined}
          onBlur={() => field?.blur()}
          type="button"
        >
          {textNode}
          {loadNode}
        </button>
      );
    };
  },
});
const FormSwitch = markFormFieldComponent(Switch);
export default FormSwitch as SwitchComponent;
