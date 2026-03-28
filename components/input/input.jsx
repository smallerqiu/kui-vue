import { CloseCircle, EyeOffOutline, EyeOutline, Search } from "kui-icons/dist/icons";
import { defineComponent, inject, nextTick, provide, ref, watch } from "vue";
import Icon from "../icon";
import { isEmpty } from "../utils/number";
import { filterSize, sizeMap } from "../utils/size";
import { getChildren } from "../utils/vnode";
import { withInstall } from "../utils/vue";
import InputBox from "./input-box.jsx";
import InputGroup from "./input-group.jsx";

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
    modelValue: { type: [String, Number, Array, Object] },
    value: { type: [String, Number, Array, Object] },
    disabled: Boolean,
    type: {
      validator(value) {
        return (
          ["text", "textarea", "password", "url", "email", "date", "search", "hidden"].indexOf(
            value
          ) >= 0
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
    const currentValue = ref(ps.modelValue || ps.value);
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref();
    const parentSize = inject("size", null);

    provide("size", ps.size || filterSize(parentSize));

    watch(
      () => ps.modelValue,
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
      emit("update:modelValue", "");
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
    };

    const searchEvent = (e) => {
      if (ps.disabled) return;
      emit("search", currentValue.value);
    };
    const getSuffix = (slotSuffix) => {
      let { suffix, visiblePasswordIcon, type, inputType } = ps;

      if (type == "password" && visiblePasswordIcon) {
        return (
          <Icon
            class="k-input-password-icon"
            type={!showPassword.value ? EyeOutline : EyeOffOutline}
            onClick={togglePassword}
          />
        );
      } else if (attrs?.onSearch) {
        return <Icon type={Search} class="k-input-search-icon" onClick={searchEvent} />;
      } else {
        if (slotSuffix.length > 0) {
          return slotSuffix;
        }
        if (suffix) {
          return <div class="k-input-suffix">{suffix}</div>;
        }
        return null;
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
          attrs.onSearch ||
          slotSuffix.length > 0 ||
          suffix ||
          slotPrefix.length > 0 ||
          prefix ||
          type == "password" ||
          clearable ||
          slotControls.length > 0) &&
        type !== "hidden";
      const inputProps = {
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
        ...listeners,
        onInput: (e) => {
          let v = e.target.value;
          currentValue.value = v;
          emit("update:modelValue", v);
          e.preventDefault();
          e.stopPropagation();
        },
        onFocus: (e) => {
          focused.value = true;
          emit("focus", e);
        },
        onBlur: (e) => {
          focused.value = false;
          emit("blur", e);
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
        class: [
          {
            [`k-${inputType}`]: true,
            [`k-${inputType}-focus`]: focused.value,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-has-clear`]: clearableShow,
            [`k-${inputType}-sm`]: size == "small",
            [`k-${inputType}-lg`]: size == "large",
            [`k-${inputType}-${theme}`]: theme && theme != "solid",
            [`k-${inputType}-circle`]: shape == "circle",
          },
          attrs.class,
        ],
        style: attrs.style,
      };
      // const prefixNode = prefix ? <div class={`k-input-prefix`}>{prefix}</div> : null;

      if (slotPrefix.length > 0 || slotSuffix.length > 0) {
        const preChildren = [];
        if (slotPrefix.length)
          preChildren.push(<div class="k-input-group-prefix">{slotPrefix}</div>);
        const innerChildren = [];
        if (icon)
          innerChildren.push(
            <Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} />
          );
        if (prefix) innerChildren.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
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
        if (slotSuffix.length > 0)
          sufChildren.push(<div class="k-input-group-suffix">{slotSuffix}</div>);

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
        const suffixNode = getSuffix(slotSuffix);
        const children = [];
        if (icon)
          children.push(<Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} />);
        if (prefix) children.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
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
