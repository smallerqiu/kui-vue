import Icon from "../icon";
import { isValidString } from "../utils/string";
import { Search, CloseCircle, EyeOutline, EyeOffOutline } from "kui-icons";
import InputGroup from "./inputGroup.jsx";
import { defineComponent, ref, nextTick } from "vue";
export default defineComponent({
  name: "baseInput",
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
  },
  setup(ps, { slots, emit, attrs, expose }) {
    const currentValue = ref(ps.value);
    const focused = ref(false);
    const showPassword = ref(false);
    const inputRef = ref(null);

    const focus = () => {
      inputRef?.value.focus();
    };
    const blur = () => {
      inputRef?.value.blur();
    };

    expose({ focus, blur });

    const clear = () => {
      // setValue({ input: "", output: "" });
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
    const handleInput1 = (e) => {
      console.log(e);
      // let v = e.target.value,
      //   input = v,
      //   output = v + "";
      // let { parser, formatter } = ps;

      // if (parser) {
      //   output = parser(v);
      // }

      // if (output !== "" && formatter) {
      //   input = formatter(output);
      // }
      // e.target.value = input;
      // if (input === "") {
      //   output = "";
      // }

      // this.setValue({ input, output });
    };
    const togglePassword = (e) => {
      if (ps.disabled) return;
      showPassword.value = !showPassword.value;
      let type = showPassword.value ? "text" : "password";
      inputRef.value.type = type;
    };
    const setValue = ({ input, output }) => {
      currentValue.value = input;
    };

    const searchEvent = (e) => {
      if (ps.disabled) return;
      emit("search", currentValue.value);
    };
    const getSuffix = () => {
      let { suffix, visiblePasswordIcon, type } = ps;
      const SearchNode = attrs.onSearch ? <Icon type={Search} class="k-input-search-icon" onClick={searchEvent} /> : null;

      const Password = type == "password" && visiblePasswordIcon ? <Icon class="k-input-password-icon" type={!showPassword.value ? EyeOutline : EyeOffOutline} onClick={togglePassword} /> : null;

      return Password || SearchNode || slots.suffix || (suffix ? <div class="k-input-suffix">{suffix}</div> : null);
    };
    const getTextInput = (mult) => {
      const { disabled, size, type, id, theme, shape, placeholder } = ps;
      const props = {
        value: currentValue.value,
        class: [
          {
            [`k-input`]: !mult,
            [`k-input-text`]: mult,
            [`k-input-disabled`]: disabled,
            [`k-input-sm`]: size == "small" && !mult,
            [`k-input-lg`]: size == "large" && !mult,
            [`k-input-${theme}`]: theme != "solid" && !mult && theme,
            [`k-input-circle`]: shape == "circle" && !mult,
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
      const { icon, size, disabled, type, clearable, suffix, theme, prefix, shape } = ps;

      let mult = icon || attrs.onSearch || slots.suffix || suffix || slots.prefix || prefix || type == "password" || clearable || slots.contorls;

      let textInput = getTextInput(mult);
      if (!mult) return textInput;

      let clearableShow = clearable && isValidString(currentValue.value);
      const props = {
        class: {
          [`k-input`]: true,
          [`k-input-focus`]: focused.value,
          [`k-input-disabled`]: disabled,
          [`k-input-sm`]: size == "small",
          [`k-input-lg`]: size == "large",
          [`k-input-${theme}`]: theme && theme != "solid",
          [`k-input-circle`]: shape == "circle",
        },
      };
      const suffixNode = getSuffix();
      // const prefixNode = prefix ? <div class={`k-input-prefix`}>{prefix}</div> : null;

      if (slots.prefix || slots.suffix) {
        const preChilds = [];
        if (slots.prefix) preChilds.push(<div class="k-input-group-prefix">{slots.prefix?.()}</div>);
        const innerChilds = [];
        if (icon) innerChilds.push(<Icon type={icon} class={`k-input-icon`} onClick={iconClick} />);
        if (prefix) innerChilds.push(<div class={`k-input-prefix`}>{prefix}</div>);
        innerChilds.push(textInput);
        if (clearable) innerChilds.push(<Icon type={CloseCircle} class={[`k-input-clearable`, { [`k-input-clearable-hidden`]: !clearableShow }]} onClick={clear} />);
        const sufChilds = [];
        if (slots.suffix) sufChilds.push(<div class="k-input-group-suffix">{slots.suffix?.()}</div>);

        if (slots.contorls) innerChilds.push(slots.contorls?.());
        return (
          <InputGroup size={size}>
            {...preChilds}
            <div {...props} mult>
              {innerChilds}
            </div>
            {...sufChilds}
          </InputGroup>
        );
      } else {
        const childs = [];
        if (icon) childs.push(<Icon type={icon} class="k-input-icon" onClick={iconClick} />);
        if (prefix) childs.push(<div class={`k-input-prefix`}>{prefix}</div>);
        childs.push(textInput);
        if (clearable) childs.push(<Icon type={CloseCircle} class={[`k-input-clearable`, { [`k-input-clearable-hidden`]: !clearableShow }]} onClick={clear} />);
        if (suffixNode) childs.push(suffixNode);
        if (slots.contorls) childs.push(slots.contorls?.());

        return (
          <div {...props} mult>
            {...childs}
          </div>
        );
      }
    };
  },
});
