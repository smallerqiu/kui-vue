import Icon from "../icon";
import { isValidString } from "../utils/string";
import { Search, CloseCircle, EyeOutline, EyeOffOutline, nextTick } from "kui-icons";
import { InputGroup } from "../input";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "baseInput",
  props: {
    clearable: Boolean,
    visiblePassword: Boolean,
    visiblePasswordIcon: Boolean,
    id: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    inputType: { type: String, default: "input" },
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
  // inject: {
  //   Input: { default: null },
  //   TextArea: { default: null },
  //   InputNumber: { default: null },
  // },
  watch: {
    value(value) {
      currentValue.value = value;
    },
    visiblePassword(value) {
      showPassword.value = !value;
    },
  },
  // mounted() {
  //   let textInput = this.Input || this.TextArea || this.InputNumber || {};
  //   textInput.focus = (e) => {
  //     this.$nextTick(() => this.$refs.input.focus(e));
  //   };
  //   textInput.blur = (e) => {
  //     this.$nextTick(() => this.$refs.input.blur(e));
  //   };
  // },

  setup(ps, { slots, emit, attrs }) {
    const currentValue = ref(ps.value);
    const focused = ref(false);
    const showPassword = ref(!ps.visiblePassword);
    const inputRef = ref(null);

    const clear = () => {
      setValue({ input: "", output: "" });
      nextTick(() => inputRef.value.focus());
    };
    const iconClick = () => {
      !ps.disabled && emit("icon-click");
    };
    const handleFocus = (e) => {
      focused.value = true;
      // let intput = this.Input || this.TextArea || this.InputNumber;
      // intput && intput.$emit("focus", e);
    };
    const handleBlur = (e) => {
      // this.$emit("blur", e);
      focused.value = false;
    };
    const handleInput = (e) => {
      let v = e.target.value,
        input = v,
        output = v + "";
      let { parser, formatter } = ps;

      if (parser) {
        output = parser(v);
      }

      if (output !== "" && formatter) {
        input = formatter(output);
      }
      e.target.value = input;
      if (input === "") {
        output = "";
      }

      this.setValue({ input, output });
    };
    const togglePassword = (e) => {
      if (ps.disabled) return;
      showPassword.value = !showPassword.value;
      let type = showPassword.value ? "text" : "password";
      inputRef.value.type = type;
    };
    const setValue = ({ input, output }) => {
      currentValue.value = input;
      // this.$emit("input", output);
      // this.$emit("change", output);
    };

    const searchEvent = (e) => {
      if (ps.disabled) return;
      this.$listeners.search(currentValue.value);
    };
    const getSuffix = (e) => {
      let { suffix, visiblePasswordIcon, type } = ps;
      const SearchNode = attrs.onSearch ? <Icon type={Search} class="k-input-search-icon" onClick={searchEvent} /> : null;

      const Password = type == "password" && visiblePasswordIcon ? <Icon class="k-input-password-icon" type={!showPassword.value ? EyeOutline : EyeOffOutline} onClick={togglePassword} /> : null;

      return Password || SearchNode || slots.suffix || (suffix ? <div class="k-input-suffix">{suffix}</div> : null);
    };
    const getTextInput = (mult) => {
      const { disabled, size, type, inputType, id, theme, shape, placeholder } = ps;
      let isTextArea = inputType == "textarea";
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
            [`k-${inputType}-circle`]: shape == "circle" && !isTextArea && !mult,
          },
        ],
        ref: inputRef,
        ...attrs,
        disabled,
        id,
        placeholder,
        onFocus: handleFocus,
        onBlur: handleBlur,
        // input: this.handleInput,
      };

      if (!isTextArea) {
        props.type = type;

        if (!showPassword.value && type == "password") {
          props.type = "text";
        }
      }
      return isTextArea ? <textarea {...props} /> : <input {...props} single />;
    };

    return () => {
      const { inputType, icon, size, disabled, type, clearable, suffix, theme, prefix, shape } = ps;

      let isTextArea = inputType == "textarea";
      let mult = icon || "onSearch" in attrs || slots.suffix || suffix || slots.prefix || prefix || type == "password" || clearable || slots.contorls;

      let textInput = getTextInput(mult);

      if (isTextArea || !mult) return textInput;

      let clearableShow = clearable && isNotEmpty(currentValue);
      const props = {
        class: {
          [`k-${inputType}`]: true,
          [`k-${inputType}-focus`]: focused,
          [`k-${inputType}-disabled`]: disabled,
          [`k-${inputType}-sm`]: size == "small",
          [`k-${inputType}-lg`]: size == "large",
          [`k-${inputType}-${theme}`]: theme && theme != "solid",
          [`k-${inputType}-circle`]: shape == "circle" && !isTextArea,
        },
      };
      const suffixNode = getSuffix();
      const prefixNode = prefix ? <div class={`k-${inputType}-prefix`}>{prefix}</div> : null;

      return slots.prefix || slots.suffix ? (
        <InputGroup size={size}>
          {slots.prefix ? <div class={{ "k-input-group-prefix": true }}>{slots.prefix?.()}</div> : null}
          <div {...props} mult>
            {icon ? <Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} /> : null}
            {prefixNode}
            {textInput}
            {clearable ? <Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={clear} /> : null}
            {slots.contorls?.()}
          </div>
          {slots.suffix ? <div class={{ "k-input-group-suffix": true }}>{slots.suffix?.()}</div> : null}
        </InputGroup>
      ) : (
        <div {...props} mult>
          {icon ? <Icon type={icon} class={`k-${inputType}-icon`} onClick={iconClick} /> : null}
          {prefixNode}
          {textInput}
          {clearable ? <Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={clear} /> : null}
          {suffixNode}
          {slots.contorls?.()}
        </div>
      );
    };
  },
});
