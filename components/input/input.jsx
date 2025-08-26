import Icon from "../icon";
import { isEmpty } from "../utils/number";
import { Search, CloseCircle, EyeOutline, EyeOffOutline } from "kui-icons";
import InputGroup from "./inputGroup.jsx";
import { defineComponent, ref, nextTick, watch } from "vue";
import { withInstall } from '../utils/vue';
const Input = defineComponent({
  name: "Input",
  props: {
    clearable: Boolean,
    visiblePasswordIcon: { type: Boolean, default: true },
    id: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    value: [String, Number, Array, Object],
    disabled: Boolean,
    type: {
      validator(value) {
        return ["text", "textarea", "password", "url", "email", "date", "search", "hidden"].indexOf(value) >= 0;
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
    placeholder: String,
    inputType: { type: String, default: "input" },
  },
  setup(ps, { slots, emit, attrs, expose }) {
    const currentValue = ref(ps.value);
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref();

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
      currentValue.value = "";
      emit("update:value", "");
      nextTick(() => focus());
    };
    const iconClick = () => {
      !ps.disabled && emit("icon-click");
    };
    const handleInput = (e) => {
      let v = e.target.value;
      currentValue.value = v;
      emit("update:value", v);
    };
    const handleFocus = (e) => {
      focused.value = true;
      emit("focus", e);
    };
    const handleBlur = (e) => {
      emit("blur", e);
      focused.value = false;
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
      const SearchNode = attrs.onSearch ? <Icon type={Search} class="k-input-search-icon" onClick={searchEvent} /> : null;

      const Password = type == "password" && visiblePasswordIcon ? <Icon class="k-input-password-icon" type={!showPassword.value ? EyeOutline : EyeOffOutline} onClick={togglePassword} /> : null;

      return Password || SearchNode || slots.suffix || (suffix ? <div class={`k-${inputType}-suffix`}>{suffix}</div> : null);
    };
    const getTextInput = (mult) => {
      const { disabled, size, type, id, theme, shape, placeholder, inputType } = ps;
      const props = {
        value: currentValue.value,
        class: [
          {
            [`k-${inputType}`]: !mult,
            [`k-${inputType}-text`]: mult,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-sm`]: size == "small" && !mult,
            [`k-${inputType}-lg`]: size == "large" && !mult,
            [`k-${inputType}-${theme}`]: theme != "solid" && !mult && theme,
            [`k-${inputType}-circle`]: shape == "circle" && !mult,
          },
        ],
        ref: inputRef,
        // ...attrs,
        disabled,
        id,
        placeholder,
        onFocus: handleFocus,
        onBlur: handleBlur,
        type,
        onInput: handleInput,
      };

      if (!showPassword.value && type == "password") {
        props.type = "text";
      }
      return <input {...props} single />;
    };

    return () => {
      const { icon, size, disabled, type, clearable, suffix, theme, prefix, shape, inputType } = ps;

      let mult = icon || attrs.onSearch || slots.suffix || suffix || slots.prefix || prefix || type == "password" || clearable || slots.controls;

      let textInput = getTextInput(mult);
      if (!mult) return textInput;

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
      const suffixNode = getSuffix();
      // const prefixNode = prefix ? <div class={`k-input-prefix`}>{prefix}</div> : null;

      if (slots.prefix || slots.suffix) {
        const preChildren = [];
        if (slots.prefix) preChildren.push(<div class="k-input-group-prefix">{slots.prefix?.()}</div>);
        const innerChildren = [];
        if (icon) innerChildren.push(<Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} />);
        if (prefix) innerChildren.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
        innerChildren.push(textInput);
        if (clearable) innerChildren.push(<Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={clear} />);
        const sufChildren = [];
        if (slots.suffix) sufChildren.push(<div class="k-input-group-suffix">{slots.suffix?.()}</div>);

        if (slots.controls) innerChildren.push(slots.controls?.());
        return (
          <InputGroup size={size}>
            {...preChildren}
            <div {...props} mult>
              {innerChildren}
            </div>
            {...sufChildren}
          </InputGroup>
        );
      } else {
        const children = [];
        if (icon) children.push(<Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} />);
        if (prefix) children.push(<div class={`k-${inputType}-prefix`}>{prefix}</div>);
        children.push(textInput);
        if (clearable) children.push(<Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={clear} />);
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
