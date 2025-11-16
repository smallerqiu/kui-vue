import Icon from "../icon";
import { isEmpty } from "../utils/number";
import { Search, CloseCircle, EyeOutline, EyeOffOutline } from "kui-icons";
import InputGroup from "./inputGroup.jsx";
import { defineComponent, ref, nextTick, watch, inject } from "vue";
import { withInstall } from "../utils/vue";
import InputBox from "./inputBox";
const Input = defineComponent({
  name: "Input",
  props: {
    clearable: Boolean,
    visiblePasswordIcon: { type: Boolean, default: true },
    size: {
      // default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    value: [String, Number, Array, Object],
    disabled: Boolean,
    type: {
      validator(value) {
        return (
          [
            "text",
            "textarea",
            "password",
            "url",
            "email",
            "date",
            "search",
            "hidden",
          ].indexOf(value) >= 0
        );
      },
      default: "text",
    },
    icon: [String, Array],
    suffix: String,
    prefix: String,
    theme: String,
    shape: String,
    formatter: Function,
    parser: Function,
    inputType: { type: String, default: "input" },
  },
  setup(ps, { slots, emit, attrs, expose, listeners }) {
    const currentValue = ref(ps.value);
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref();
    const parentSize = inject("size", null);

    watch(
      () => ps.value,
      (v) => {
        currentValue.value = v;
      }
    );

    const focus = () => {
      inputRef?.value.focus();
    };
    const blur = () => {
      inputRef?.value.blur();
    };

    expose({ focus, blur });

    const clear = () => {
      // emit("update:value", ""); // for 3
      emit("input", "");
      currentValue.value = "";
      nextTick(() => {
        focus();
      });
    };
    const iconClick = () => {
      !ps.disabled && emit("icon-click");
    };

    const togglePassword = (e) => {
      if (ps.disabled) return;
      showPassword.value = !showPassword.value;
      let type = showPassword.value ? "text" : "password";
      inputRef.value.type = type;
    };

    const searchEvent = (e) => {
      if (ps.disabled) return;
      emit("search", currentValue.value);
    };
    const getSuffix = () => {
      let { suffix, visiblePasswordIcon, type, inputType } = ps;
      const SearchNode =
        "search" in listeners ? (
          <Icon
            type={Search}
            class="k-input-search-icon"
            onClick={searchEvent}
          />
        ) : null;

      const Password =
        type == "password" && visiblePasswordIcon ? (
          <Icon
            class="k-input-password-icon"
            type={!showPassword.value ? EyeOutline : EyeOffOutline}
            onClick={togglePassword}
          />
        ) : null;
      const suffixNode =
        slots.suffix?.() ||
        (suffix ? <div class="k-input-suffix">{suffix}</div> : null);
      return Password || SearchNode || suffixNode;
    };

    return () => {
      const {
        icon,
        size = parentSize,
        disabled,
        type,
        clearable,
        suffix,
        theme,
        prefix,
        shape,
        inputType,
      } = ps;

      let multiple =
        (icon ||
          // attrs.onSearch ||
          "search" in listeners ||
          slots.suffix ||
          suffix ||
          slots.prefix ||
          prefix ||
          type == "password" ||
          clearable ||
          slots.controls) &&
        type !== "hidden";
      const inputProps = {
        attrs: { ...attrs },
        props: {
          disabled,
          multiple,
          size,
          type,
          theme,
          shape,
          inputRef: inputRef,
          inputType,
          value: currentValue.value,
          showPassword: ps.showPassword,
        },
        on: {
          ...listeners,
          input: (e) => {
            let v = e.target.value;
            currentValue.value = v;
            emit("input", v);
          },
          focus: (e) => {
            focused.value = true;
            emit("focus", e);
          },
          blur: (e) => {
            focused.value = false;
            emit("blur", e);
          },
        },
      };
      let textInput = <InputBox {...inputProps} />;

      if (!multiple) return textInput;

      let clearableShow = clearable && !isEmpty(currentValue.value);
      const props = {
        class: {
          [`k-${inputType}`]: true,
          [`k-${inputType}-focus`]: focused.value,
          [`k-${inputType}-disabled`]: disabled,
          [`k-${inputType}-sm`]: size == "small",
          [`k-${inputType}-lg`]: size == "large",
          [`k-${inputType}-${theme}`]: theme && theme != "solid",
          [`k-${inputType}-circle`]: shape == "circle",
        },
      };
      // const prefixNode = prefix ? <div class={`k-input-prefix`}>{prefix}</div> : null;

      if (slots.prefix || slots.suffix) {
        const preChildren = [];
        if (slots.prefix)
          preChildren.push(
            <div class="k-input-group-prefix">{slots.prefix?.()}</div>
          );
        const innerChildren = [];
        if (icon)
          innerChildren.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              onClick={iconClick}
            />
          );
        if (prefix)
          innerChildren.push(
            <div class={`k-${inputType}-prefix`}>{prefix}</div>
          );
        innerChildren.push(textInput);
        if (clearable)
          innerChildren.push(
            <Icon
              type={CloseCircle}
              class={[
                `k-${inputType}-clearable`,
                { [`k-${inputType}-clearable-hidden`]: !clearableShow },
              ]}
              onClick={clear}
            />
          );
        const sufChildren = [];
        if (slots.suffix)
          sufChildren.push(
            <div class="k-input-group-suffix">{slots.suffix?.()}</div>
          );

        if (slots.controls) innerChildren.push(slots.controls?.());
        return (
          <InputGroup size={size}>
            {preChildren}
            <div {...props} mult>
              {innerChildren}
            </div>
            {sufChildren}
          </InputGroup>
        );
      } else {
        const suffixNode = getSuffix();
        const children = [];
        if (icon)
          children.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              onClick={iconClick}
            />
          );
        if (prefix)
          children.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
        children.push(textInput);
        if (clearable)
          children.push(
            <Icon
              type={CloseCircle}
              class={[
                `k-${inputType}-clearable`,
                { [`k-${inputType}-clearable-hidden`]: !clearableShow },
              ]}
              onClick={clear}
            />
          );
        if (suffixNode) children.push(suffixNode);
        if (slots.controls) children.push(slots.controls?.());

        return (
          <div {...props} mult>
            {...children}
          </div>
        );
      }
    };
  },
});
export default withInstall(Input);
