import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type {
  BooleanType,
  DirectionType,
  RadioType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import type { IconType } from "../icon";
import { getChildren } from "../utils/vnode";
import Radio from "./radio";
import RadioButton from "./radio-button";
import type { ChangeEvent } from "./types";

export interface RadioOption {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  icon?: IconType[];
  [key: string]: any;
}

export const radioGroupProps = {
  modelValue: { type: [String, Number], default: "" },
  disabled: Boolean as BooleanType,
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
  onChange: Function as PropType<(value: string | number) => void>,
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  setup(props, { slots, emit }) {
    const rootRef = ref();
    const observerRef = ref();
    const currentValue = ref(props.modelValue);
    const itemRefs = new Map<string | number, any>();
    const isVertical = computed(() => props.direction === "vertical");
    const segStyle = ref(
      isVertical.value ? { height: "0px", top: "0px" } : { width: "0px", left: "0px" }
    );
    const changed = ref(false);
    const setItemRef = (el: any, value: string | number) => {
      if (el) {
        itemRefs.set(value, el.$el || el);
      }
    };
    const updateSeg = () => {
      if (props.theme !== "card" || props.type !== "button") return;
      changed.value = true;
      nextTick(updateSize);
    };
    const updateSize = () => {
      const activeEl = itemRefs.get(currentValue.value);
      if (activeEl) {
        setTimeout(() => {
          segStyle.value = isVertical.value
            ? { height: `${activeEl.offsetHeight - 4}px`, top: `${activeEl.offsetTop + 2}px` }
            : {
                width: `${activeEl.offsetWidth - 4}px`,
                left: `${activeEl.offsetLeft + 2}px`,
              };
        });
      }
    };
    onMounted(() => {
      observerRef.value = new ResizeObserver(() => {
        updateSize();
      });
      observerRef.value.observe(rootRef.value);
    });
    onUnmounted(() => {
      if (observerRef.value) observerRef.value.disconnect();
    });
    const onChange = ({ value }: ChangeEvent) => {
      currentValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
    };
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
        updateSeg();
      }
    );
    const onTransitionEnd = (e: TransitionEvent) => {
      // 只有当 left 属性动画完成时才销毁（防止 width 和 left 同时触发两次）
      if (e.propertyName === "left" || e.propertyName === "top") {
        changed.value = false;
      }
    };
    const optionsData = computed(() => {
      let { options } = props;
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child) => {
          let { label, value, disabled, icon } = child.props;
          options?.push({
            value,
            icon,
            disabled,
            label: label || child.children?.default()[0].children || value,
          });
        });
      }
      return options;
    });
    return () => {
      const isButton = props.type === "button";
      const isCard = props.theme === "card";
      let options = optionsData.value;
      let nodes: any = [];
      const Component = isButton ? RadioButton : Radio;
      options.forEach((option) =>
        nodes.push(
          <Component
            ref={(el: any) => setItemRef(el, option.value!)}
            key={option.label}
            label={option.label}
            value={option.value}
            onChange={onChange}
            checked={currentValue.value === option.value}
            disabled={props.disabled || option.disabled}
            icon={option.icon}
            size={props.size}
            theme={props.theme}
            shape={props.shape}
          />
        )
      );
      const classes = [
        "k-radio-group",
        {
          "k-radio-button-group": isButton,
          "k-radio-button-changed": changed.value,
          "k-radio-group-circle": props.shape === "circle",
          "k-radio-group-fill": props.theme === "fill" && isButton,
          "k-radio-group-card": isCard && isButton,
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];

      return (
        <div class={classes} ref={rootRef}>
          {nodes}
          {changed.value && isCard && isButton && (
            <div
              class="k-radio-group-card-seg"
              style={segStyle.value}
              onTransitionend={onTransitionEnd}
            />
          )}
        </div>
      );
    };
  },
});
export default RadioGroup;
