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
import { getChildren } from "../utils/vnode";
import Radio from "./radio";
import RadioButton from "./radio-button";
import type { ChangeEvent, RadioOption } from "./types";

const radioGroupProps = {
  modelValue: { type: [String, Number], default: "" },
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

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  emits: {
    "update:modelValue": (value: string | number) => ["string", "number"].includes(typeof value),
    change: (value: string | number) => ["string", "number"].includes(typeof value),
  },
  setup(props, { slots, emit }) {
    const name = `k-radio-group-${getCurrentInstance()?.uid ?? "default"}`;
    const rootRef = ref<HTMLElement | null>(null);
    const currentValue = ref(props.modelValue);
    const onChange = ({ value }: ChangeEvent) => {
      if (props.readonly || value === undefined) return;
      currentValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
    };
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
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
              disabled={props.disabled || option.disabled}
              readonly={props.readonly}
              icon={option.icon}
              size={props.size}
              theme={props.theme}
              shape={props.shape}
            />
          ))
        : getChildren(slots.default?.()).map((child) => {
            const value = child.props?.value as string | number | undefined;
            return cloneVNode(
              child,
              {
                name: isButton ? undefined : name,
                checked: value !== undefined && currentValue.value === value,
                disabled: props.disabled || Boolean(child.props?.disabled),
                readonly: props.readonly || Boolean(child.props?.readonly),
                size: props.size,
                theme: props.theme,
                shape: props.shape,
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
          ref={rootRef}
          role="radiogroup"
          aria-disabled={props.disabled || undefined}
          aria-readonly={props.readonly || undefined}
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
export default RadioGroup;
