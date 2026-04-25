import { CircleX, Eye, EyeOff, Search } from "kui-icons";
import {
  defineComponent,
  inject,
  nextTick,
  provide,
  ref,
  watch,
  type CSSProperties,
  type DefineComponent,
  type ExtractPropTypes,
  type InputHTMLAttributes,
  type PropType,
  type VNodeChild,
} from "vue";
import { type BooleanType, type ShapeType, type SizeType, type ThemeType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { isEmpty } from "../utils/number";
import { getChildren } from "../utils/vnode";
import InputBox from "./input-box";
import InputGroup from "./input-group";

const inputProps = {
  clearable: { type: Boolean as BooleanType, default: true },
  visiblePasswordIcon: { type: Boolean as BooleanType, default: true },
  size: { type: String as PropType<SizeType> },
  modelValue: { type: [String, Number, Array, Object] as PropType<any> },
  value: { type: [String, Number, Array, Object] as PropType<any> },
  disabled: Boolean as BooleanType,
  type: {
    type: String as PropType<"text" | "password" | "hidden">,
    default: "text",
  },
  icon: [Array] as PropType<IconType[]>,
  suffix: { type: [String, Element, Object] as PropType<VNodeChild> },
  readonly: Boolean as BooleanType,
  prefix: { type: [String, Element, Object] as PropType<VNodeChild> },
  theme: { type: String as PropType<ThemeType>, default: "light" },
  shape: String as PropType<ShapeType>,
  inputType: { type: String, default: "input" },
  onSearch: {
    type: Function as PropType<(value: string) => void>,
  },
  maxlength: Number,
  "onUpdate:modelValue": Function as PropType<(value: string) => void>,
  onIconClick: { type: Function as PropType<(e: PointerEvent) => void> },
};

export type InputProps = Partial<ExtractPropTypes<typeof inputProps>> & InputHTMLAttributes;

const Input = defineComponent({
  inheritAttrs: false,
  name: "Input",
  props: inputProps,
  setup(props, { slots, emit, attrs, expose }) {
    const currentValue = ref(props.modelValue || props.value);
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref<any>();
    const parentSize = inject<SizeType | undefined>("size", undefined);

    provide("size", props.size || parentSize);

    watch(
      () => props.modelValue,
      (v) => {
        currentValue.value = v;
      }
    );

    const focus = () => inputRef.value?.focus();
    const blur = () => inputRef.value?.blur();

    expose({ focus, blur });

    const clear = () => {
      emit("update:modelValue", "");
      currentValue.value = "";
      nextTick(() => focus());
    };

    const togglePassword = () => {
      if (props.disabled) return;
      showPassword.value = !showPassword.value;
    };

    const getSuffix = (slotSuffix: any[]) => {
      const { suffix, visiblePasswordIcon, type } = props;
      if (type === "password" && visiblePasswordIcon) {
        return (
          <Icon
            class="k-input-password-icon"
            type={!showPassword.value ? Eye : EyeOff}
            onClick={togglePassword}
          />
        );
      } else if (props?.onSearch) {
        return (
          <Icon
            type={Search}
            class="k-input-search-icon"
            onClick={() => emit("search", currentValue.value)}
          />
        );
      }
      return slotSuffix.length > 0 ? (
        slotSuffix
      ) : suffix ? (
        <div class="k-input-suffix">{suffix}</div>
      ) : null;
    };

    return () => {
      const {
        icon,
        size = parentSize || undefined,
        disabled,
        type,
        clearable,
        suffix,
        theme,
        prefix,
        shape,
        inputType,
      } = props;

      const slotSuffix = getChildren(slots.suffix?.());
      const slotPrefix = getChildren(slots.prefix?.());
      const slotControls = getChildren(slots.controls?.());

      const multiple =
        (icon ||
          props.onSearch ||
          slotSuffix.length > 0 ||
          suffix ||
          slotPrefix.length > 0 ||
          prefix ||
          type === "password" ||
          clearable ||
          slotControls.length > 0) &&
        type !== "hidden";

      const inputBoxProps: Record<string, any> = {
        // htmlAttrs: { ...attrs },
        ...attrs,
        disabled,
        multiple,
        // size,
        type,
        theme,
        shape,
        inputRef: inputRef,
        inputType,
        value: currentValue.value,
        showPassword: showPassword.value,
        onInput: (e: Event) => {
          const v = (e.target as HTMLInputElement).value;
          currentValue.value = v;
          emit("update:modelValue", v);
          emit("change", e);
        },
        onFocus: (e: FocusEvent) => {
          focused.value = true;
          emit("focus", e);
        },
        onBlur: (e: FocusEvent) => {
          focused.value = false;
          emit("blur", e);
        },
      };

      if (typeof size === "string") {
        inputBoxProps.size = size;
      }

      const textInput = <InputBox {...inputBoxProps} />;
      if (!multiple) return textInput;

      const clearableShow =
        clearable &&
        !isEmpty(currentValue.value) &&
        type !== "password" &&
        attrs.readonly === undefined;

      const rootProps = {
        class: [
          {
            [`k-${inputType}`]: true,
            [`k-${inputType}-focus`]: focused.value,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-has-clear`]: clearableShow,
            [`k-${inputType}-sm`]: size === "small",
            [`k-${inputType}-lg`]: size === "large",
            [`k-${inputType}-${theme}`]: theme && theme !== "outline",
            [`k-${inputType}-circle`]: shape === "circle",
            [`k-${inputType}-square`]: shape === "square",
          },
          attrs.class,
        ],
        multiple,
        style: attrs.style as CSSProperties,
      };

      if (slotPrefix.length > 0 || slotSuffix.length > 0) {
        const preChildren = slotPrefix.length ? (
          <div class="k-input-group-prefix">{slotPrefix}</div>
        ) : null;
        const innerChildren: any[] = [];
        if (icon)
          innerChildren.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              onClick={(e) => !disabled && emit("iconClick", e)}
            />
          );
        if (prefix) innerChildren.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
        innerChildren.push(textInput);
        if (clearable) {
          innerChildren.push(
            <Icon
              type={CircleX}
              class={[
                `k-${inputType}-clearable`,
                { [`k-${inputType}-clearable-hidden`]: !clearableShow },
              ]}
              onClick={clear}
            />
          );
        }
        if (slotControls.length) innerChildren.push(slotControls);
        const sufChildren =
          slotSuffix.length > 0 ? <div class="k-input-group-suffix">{slotSuffix}</div> : null;

        return (
          <InputGroup size={size} theme={theme}>
            {preChildren}
            <div {...rootProps}>{innerChildren}</div>
            {sufChildren}
          </InputGroup>
        );
      } else {
        const suffixNode = getSuffix(slotSuffix);
        const children: any[] = [];
        if (icon)
          children.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              onClick={() => !disabled && emit("icon-click")}
            />
          );
        if (prefix) children.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
        children.push(textInput);
        if (clearable) {
          children.push(
            <Icon
              type={CircleX}
              class={[
                `k-${inputType}-clearable`,
                { [`k-${inputType}-clearable-hidden`]: !clearableShow },
              ]}
              onClick={clear}
            />
          );
        }
        if (suffixNode) children.push(suffixNode);
        if (slotControls.length) children.push(slotControls);

        return <div {...rootProps}>{children}</div>;
      }
    };
  },
});

export default Input as DefineComponent<InputProps>;
