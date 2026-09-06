import { CircleX, Eye, EyeOff, Search } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  provide,
  ref,
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
  value: { type: [String, Number, Array, Object] as PropType<unknown> },
  modelValue: { type: [String, Number, Array, Object] as PropType<unknown> },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  type: {
    type: String as PropType<InputHTMLAttributes["type"]>,
    default: "text",
  },
  icon: [Array] as PropType<IconType[]>,
  suffix: { type: [String, Object] as PropType<VNodeChild> },
  prefix: { type: [String, Object] as PropType<VNodeChild> },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: String as PropType<ShapeType>,
  inputType: { type: String, default: "input" },
  onSearch: {
    type: Function as PropType<(value: string) => void>,
  },
  //maxlength: Number,
  // "onUpdate:modelValue": Function as PropType<(value: string) => void>,
  onIconClick: { type: Function as PropType<(e: PointerEvent) => void> },
  onClear: { type: Function as PropType<() => void> },
  onChange: { type: Function as PropType<(value: string) => void> },
};

export type InputProps = Partial<ExtractPropTypes<typeof inputProps>> &
  Omit<InputHTMLAttributes, "onChange" | "prefix">;

const Input = defineComponent({
  inheritAttrs: false,
  name: "Input",
  props: inputProps,
  setup(props, { slots, emit, attrs, expose }) {
    const innerValue = ref(props.value);
    const currentValue = computed(() =>
      props.modelValue !== undefined ? props.modelValue : innerValue.value,
    );
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>();
    const parentSize = inject<SizeType | undefined>("size", undefined);

    provide("size", props.size || parentSize);

    const focus = () => inputRef.value?.focus();
    const blur = () => inputRef.value?.blur();

    expose({ focus, blur });

    const clear = () => {
      if (props.disabled || props.readonly) return;
      if (props.modelValue === undefined) innerValue.value = "";
      emit("update:modelValue", "");
      emit("clear");
      emit("change", "");
      nextTick(() => focus());
    };

    const togglePassword = () => {
      if (props.disabled || props.readonly) return;
      showPassword.value = !showPassword.value;
    };

    const getSuffix = (slotSuffix: VNodeChild[]) => {
      const { suffix, visiblePasswordIcon, type } = props;
      if (type === "password" && visiblePasswordIcon) {
        return (
          <Icon
            class="k-input-password-icon"
            type={!showPassword.value ? Eye : EyeOff}
            role="button"
            tabindex={props.disabled || props.readonly ? undefined : 0}
            aria-label={showPassword.value ? "Hide password" : "Show password"}
            onClick={togglePassword}
            onKeydown={(event: KeyboardEvent) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                togglePassword();
              }
            }}
          />
        );
      } else if (props?.onSearch) {
        return (
          <Icon
            type={Search}
            class="k-input-search-icon"
            role="button"
            tabindex={props.disabled || props.readonly ? undefined : 0}
            aria-label="Search"
            onClick={() => !props.disabled && !props.readonly && emit("search", currentValue.value)}
            onKeydown={(event: KeyboardEvent) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                if (!props.disabled && !props.readonly) emit("search", currentValue.value);
              }
            }}
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
        readonly,
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
      const grouped = slotPrefix.length > 0 || slotSuffix.length > 0;

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

      const inputBoxProps: Record<string, unknown> = {
        // htmlAttrs: { ...attrs },
        ...attrs,
        disabled,
        readonly,
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
          if (props.modelValue === undefined) innerValue.value = v;
          emit("update:modelValue", v);
          emit("change", v);
        },
        onFocus: (e: FocusEvent) => {
          focused.value = true;
          emit("focus", e);
        },
        onBlur: (e: FocusEvent) => {
          focused.value = false;
          emit("blur", e);
        },
        class: multiple ? undefined : attrs.class,
        style: multiple ? undefined : attrs.style,
      };

      if (typeof size === "string") {
        inputBoxProps.size = size;
      }

      const textInput = <InputBox {...inputBoxProps} />;
      if (!multiple) return textInput;

      const clearableShow =
        clearable && !isEmpty(currentValue.value) && type !== "password" && !disabled && !readonly;

      const rootProps = {
        class: [
          {
            [`k-${inputType}`]: true,
            [`k-${inputType}-focus`]: focused.value,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-readonly`]: readonly,
            [`k-${inputType}-has-clear`]: clearableShow,
            [`k-${inputType}-sm`]: size === "small",
            [`k-${inputType}-lg`]: size === "large",
            [`k-${inputType}-${theme}`]: theme && theme !== "outline",
            [`k-${inputType}-circle`]: shape === "circle",
            [`k-${inputType}-square`]: shape === "square",
          },
          !grouped && attrs.class,
        ],
        "data-multiple": "",
        style: !grouped ? (attrs.style as CSSProperties) : undefined,
      };

      if (grouped) {
        const preChildren = slotPrefix.length ? (
          <div class="k-input-group-prefix">{slotPrefix}</div>
        ) : null;
        const innerChildren: VNodeChild[] = [];
        if (icon)
          innerChildren.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              role={props.onIconClick ? "button" : undefined}
              tabindex={props.onIconClick && !disabled && !readonly ? 0 : undefined}
              onClick={(e) => !disabled && !readonly && emit("iconClick", e)}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  (event.currentTarget as HTMLElement).click();
                }
              }}
            />,
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
              role="button"
              tabindex={clearableShow ? 0 : undefined}
              aria-label="Clear"
              onClick={clear}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  clear();
                }
              }}
            />,
          );
        }
        const suffixNode = getSuffix([]);
        if (suffixNode) innerChildren.push(suffixNode);
        if (slotControls.length) innerChildren.push(slotControls);
        const sufChildren = slotSuffix.length ? (
          <div class="k-input-group-suffix">{slotSuffix}</div>
        ) : null;

        return (
          <InputGroup
            size={size}
            theme={theme}
            class={attrs.class}
            style={attrs.style as CSSProperties}
          >
            {preChildren}
            <div {...rootProps}>{innerChildren}</div>
            {sufChildren}
          </InputGroup>
        );
      } else {
        const suffixNode = getSuffix(slotSuffix);
        const children: VNodeChild[] = [];
        if (icon)
          children.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              role={props.onIconClick ? "button" : undefined}
              tabindex={props.onIconClick && !disabled && !readonly ? 0 : undefined}
              onClick={(event) => !disabled && !readonly && emit("iconClick", event)}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  (event.currentTarget as HTMLElement).click();
                }
              }}
            />,
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
              role="button"
              tabindex={clearableShow ? 0 : undefined}
              aria-label="Clear"
              onClick={clear}
              onKeydown={(event: KeyboardEvent) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  clear();
                }
              }}
            />,
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
