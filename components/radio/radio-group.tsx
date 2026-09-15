import {
  cloneVNode,
  defineComponent,
  getCurrentInstance,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import type {
  BooleanType,
  DirectionType,
  RadioType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import { getChildren } from "../utils/vnode";
import Radio from "./radio";
import RadioButton from "./radio-button";
import type { ChangeEvent, RadioOption } from "./types";

const radioGroupProps = {
  modelValue: [String, Number] as PropType<string | number>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  direction: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  size: {
    type: String as PropType<SizeType>,
  },
  theme: { type: String as PropType<ThemeType> },
  shape: String as PropType<ShapeType>,
  options: Array as PropType<RadioOption[]>,
  type: String as PropType<RadioType>,
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;
type RadioValue = string | number;
type RadioGroupPublicProps<T extends RadioValue> = Omit<Partial<RadioGroupProps>, "modelValue"> & {
  modelValue?: T;
  "onUpdate:modelValue"?: (value: T) => void;
  onChange?: (value: T) => void;
};
type RadioGroupComponent = {
  new <T extends RadioValue = RadioValue>(
    props: RadioGroupPublicProps<T>,
  ): { $props: RadioGroupPublicProps<T> };
};

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  emits: {
    "update:modelValue": (value: string | number) => ["string", "number"].includes(typeof value),
    change: (value: string | number) => ["string", "number"].includes(typeof value),
  },
  setup(props, { slots, emit }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const name = `k-radio-group-${getCurrentInstance()?.uid ?? "default"}`;
    const rootRef = ref<HTMLElement | null>(null);
    const currentValue = ref(
      field?.prop ? (field.value.value as string | number) : props.modelValue,
    );
    const onChange = ({ value }: ChangeEvent) => {
      if (props.readonly || field?.readonly.value || value === undefined) return;
      currentValue.value = value;
      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
      emit("change", value);
    };
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (val) => {
        currentValue.value = val as string | number;
      },
    );
    return () => {
      const isButton = props.type === "button";
      const Component = isButton ? RadioButton : Radio;
      const nodes: VNodeChild[] = props.options
        ? props.options.map((option) => (
            <Component
              key={option.value}
              label={option.label}
              value={option.value}
              name={isButton ? undefined : name}
              onChange={onChange}
              checked={currentValue.value === option.value}
              disabled={props.disabled || field?.disabled.value || option.disabled}
              readonly={props.readonly || field?.readonly.value}
              icon={option.icon}
              size={appearance.size.value}
              theme={appearance.theme.value}
              shape={appearance.shape.value}
            />
          ))
        : getChildren(slots.default?.()).map((child) => {
            const value = child.props?.value as string | number | undefined;
            return cloneVNode(
              child,
              {
                name: isButton ? undefined : name,
                checked: value !== undefined && currentValue.value === value,
                disabled: props.disabled || field?.disabled.value || Boolean(child.props?.disabled),
                readonly: props.readonly || field?.readonly.value || Boolean(child.props?.readonly),
                size: appearance.size.value,
                theme: appearance.theme.value,
                shape: appearance.shape.value,
                onChange,
              },
              true,
            );
          });
      const classes = [
        "k-radio-group",
        {
          "k-radio-button-group": isButton,
          "k-radio-group-circle": props.shape === "circle",
          "k-radio-group-fill": props.theme === "fill" && isButton,
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];

      return (
        <div
          class={classes}
          id={field?.prop ? field.id : undefined}
          ref={rootRef}
          role="radiogroup"
          aria-labelledby={field?.prop ? field.labelId : undefined}
          aria-describedby={field?.describedBy.value}
          aria-invalid={field?.invalid.value || undefined}
          aria-required={field?.required.value || undefined}
          aria-disabled={props.disabled || field?.disabled.value || undefined}
          aria-readonly={props.readonly || field?.readonly.value || undefined}
          onFocusout={() => field?.blur()}
          onKeydown={(event: KeyboardEvent) => {
            if (
              !isButton ||
              !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)
            )
              return;
            const buttons = [
              ...(rootRef.value?.querySelectorAll<HTMLElement>('[role="radio"]:not([disabled])') ??
                []),
            ];
            if (!buttons.length) return;
            event.preventDefault();
            const index = buttons.indexOf(event.target as HTMLElement);
            const offset = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
            const next = buttons[(Math.max(index, 0) + offset + buttons.length) % buttons.length];
            next?.focus();
            next?.click();
          }}
        >
          {nodes}
        </div>
      );
    };
  },
});
const FormRadioGroup = markFormFieldComponent(RadioGroup);
export default FormRadioGroup as RadioGroupComponent;
