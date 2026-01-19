import Icon from "../icon";
import { isEmpty } from "../utils/number";
import { Search, CloseCircle, EyeOutline, EyeOffOutline } from "kui-icons";
import InputGroup from "./inputGroup.jsx";
import { defineComponent, ref, nextTick, watch, inject, provide } from "vue";
import { withInstall } from "../utils/vue";
import InputBox from "./inputBox";
import { sizeMap, filterSize } from "../utils/size";
import { getChildren } from "../utils/vnode";

const Input = defineComponent({
  inheritAttrs: false,
  name: "Input",
  props: {
    clearable: { type: Boolean, default: true },
    visiblePasswordIcon: { type: Boolean, default: true },
    size: {
      type: String,
      validator(value) {
        return sizeMap.indexOf(value) >= 0;
      },
    },
    value: { type: [String, Number, Array, Object] },
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
    theme: { type: String, default: "light" },
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

    provide("size", ps.size || filterSize(parentSize));

    watch(
      () => ps.value,
      (v) => {
        currentValue.value = v;
      },
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
      // let type = showPassword.value ? "text" : "password";
      // inputRef.value.type = type;
    };

    const searchEvent = (e) => {
      if (ps.disabled) return;
      emit("search", currentValue.value);
    };
    const getSuffix = () => {
      let { suffix, visiblePasswordIcon, type, inputType } = ps;

      if (type == "password" && visiblePasswordIcon) {
        return (
          <Icon
            class="k-input-password-icon"
            type={!showPassword.value ? EyeOutline : EyeOffOutline}
            onClick={togglePassword}
          />
        );
      } else if ("search" in listeners) {
        return (
          <Icon
            type={Search}
            class="k-input-search-icon"
            onClick={searchEvent}
          />
        );
      } else {
        return (
          slots.suffix?.() ||
          (suffix ? <div class="k-input-suffix">{suffix}</div> : null)
        );
      }
    };

    return () => {
      const {
        icon,
        size = filterSize(parentSize),
        disabled,
        type,
        clearable,
        suffix,
        theme,
        prefix,
        shape,
        inputType,
      } = ps;
      const slotSuffix = getChildren(slots.suffix?.());
      const slotPrefix = getChildren(slots.prefix?.());
      const slotControls = getChildren(slots.controls?.());
      let multiple =
        (icon ||
          // attrs.onSearch ||
          "search" in listeners ||
          slotSuffix.length > 0 ||
          suffix ||
          slotPrefix.length > 0 ||
          prefix ||
          type == "password" ||
          clearable ||
          slotControls.length > 0) &&
        type !== "hidden";
      const inputProps = {
        props: {
          htmlAttrs: { ...attrs },
          disabled,
          multiple,
          size,
          type,
          theme,
          shape,
          inputRef: inputRef,
          inputType,
          value: currentValue.value,
          showPassword: showPassword.value,
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
      let clearableShow =
        clearable &&
        !isEmpty(currentValue.value) &&
        type != "password" &&
        attrs.readonly === undefined;
      const props = {
        class: {
          [`k-${inputType}`]: true,
          [`k-${inputType}-focus`]: focused.value,
          [`k-${inputType}-disabled`]: disabled,
          [`k-${inputType}-has-clear`]: clearableShow,
          [`k-${inputType}-sm`]: size == "small",
          [`k-${inputType}-lg`]: size == "large",
          [`k-${inputType}-${theme}`]: theme && theme != "solid",
          [`k-${inputType}-circle`]: shape == "circle",
        },
      };
      // const prefixNode = prefix ? <div class={`k-input-prefix`}>{prefix}</div> : null;

      if (slotPrefix.length || slotSuffix.length) {
        const preChildren = [];
        if (slotPrefix.length)
          preChildren.push(
            <div class="k-input-group-prefix">{slotPrefix}</div>,
          );
        const innerChildren = [];
        if (icon)
          innerChildren.push(
            <Icon
              type={icon}
              class={`k-${inputType}-icon`}
              onClick={iconClick}
            />,
          );
        if (prefix)
          innerChildren.push(
            <div class={`k-${inputType}-prefix`}>{prefix}</div>,
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
            />,
          );
        const sufChildren = [];
        if (slotSuffix.length)
          sufChildren.push(
            <div class="k-input-group-suffix">{slotSuffix}</div>,
          );

        if (slotControls.length) innerChildren.push(slotControls);
        return (
          <InputGroup size={size} theme={theme}>
            {preChildren}
            <div {...props} multiple>
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
            />,
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
            />,
          );
        if (suffixNode) children.push(suffixNode);
        if (slotControls.length) children.push(slotControls);
        return (
          <div {...props} multiple>
            {...children}
          </div>
        );
      }
    };
  },
});
export default withInstall(Input);
