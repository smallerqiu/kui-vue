export default {
  name: "Input",
  props: {
    clearable: Boolean,
    mini: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    value: [String, Number],
    type: {
      validator(value) {
        return (["text", "textarea", "password", "url", "email", "date"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
    iconAlign: { type: String, default: 'right' },
    rows: { type: [Number, String], default: 2 },
    name: { type: String },
    number: { type: Boolean, default: false },
    width: { type: [Number, String] }
  },
  data() {
    return {
      currentValue: this.value,
      clearableShow: false,
      isFocus: false,
      isMove: false
    };
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted() {
    this.currentValue = this.value;
  },
  computed: {
    iconClasses() {
      return [`k-ion-${this.icon}`];
    },
    classes() {
      return [
        "k-input-wp",
        {
          ["k-input-mini"]: this.mini && this.type != 'textarea',
          ["k-input-lg"]: this.large && !this.mini && this.type != 'textarea',
          ["k-input-icon-left"]: this.icon && this.iconAlign == 'left'
        }
      ];
    },
    styles() {
      return this.width && this.width > 0 ? { width: `${this.width}px` } : {};
    },
    inputClasses() {
      return [
        "k-input",
        {
          ["k-input-mini"]: !!this.mini,
          ["k-input-disabled"]: this.disabled
        }
      ];
    },
    textareaClasses() {
      return [
        "k-input",
        {
          ["k-input-mini"]: !!this.mini,
          ["k-input-disabled"]: this.disabled,
          ["k-textarea"]: this.type == "textarea"
        }
      ];
    }
  },
  methods: {
    clear() {
      this.setCurrentValue("");
      this.$emit("input", '');
      this.clearableShow = false;
    },
    handleMove() {
      this.clearableShow = (this.currentValue && this.currentValue.toString().length > 0);
      this.isMove = true;
    },
    handleOut() {
      this.isMove = false;
      if (!this.isFocus) {
        this.clearableShow = false;
      }
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(event) {
      this.clearableShow = this.currentValue && this.currentValue.toString().length > 0;
      this.$emit("focus", event);
      this.isFocus = true;
    },
    handleBlur(event) {
      if (!this.isMove) {
        this.clearableShow = false;
      }
      this.isFocus = false
      this.$emit("blur", event);
      // this.dispatch('FormItem', 'form-item-blur', this.currentValue)
    },
    handleInput(event) {
      let value = event.target.value;
      this.clearableShow = value && value.length > 0;
      if (this.number)
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setCurrentValue(value);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
      // this.$emit("input", value);
      // this.dispatch('FormItem', 'form-item-change', this.currentValue)
    },
    focus() {
      this.$refs.input.focus();
      this.isFocus = true;
    },
    blur() {
      this.$refs.input.blur();
      this.isFocus = false;
    },
    renderInput() {
      const {
        $listeners, getProp,
        inputClasses, $attrs,
        handleFocus, handleBlur, handleInput, handleChange, currentValue,
        icon, iconClick, iconClasses,
        clearable, clearableShow, clear
      } = this
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: inputClasses,
        attrs: {
          ...$attrs,
        },
        on: {
          ...$listeners,
          focus: handleFocus,
          blur: handleBlur,
          input: handleInput,
          change: handleChange
        }
      }
      const props = getProp()
      return (
        <div {...props}>
          {icon ? <i class={iconClasses} onClick={iconClick} /> : null}
          <input ref="input"  {...inputProps} />
          {clearable && clearableShow ? <span class="k-input-clearable" onClick={clear} /> : null}
        </div>
      )
    },
    renderTextArea() {
      const {
        textareaClasses, rows, $attrs, getProp, $listeners, currentValue,
        handleBlur, handleInput
      } = this
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: textareaClasses,
        attrs: {
          rows, ...$attrs
        },
        on: {
          ...$listeners,
          blur: handleBlur,
          input: handleInput
        }
      }
      const props = getProp()
      return (
        <div {...props}><textarea ref="input" {...inputProps} /></div>
      )
    },
    getProp() {
      const { classes, styles, handleMove, handleOut } = this
      const props = {
        class: classes,
        style: styles,
        attrs: {},
        on: {
          mouseenter: handleMove,
          mouseleave: handleOut
        }
      }
      return props
    },
  },

  render() {
    const { type, renderTextArea, renderInput } = this
    const Input = type == 'textarea' ? renderTextArea() : renderInput()
    return Input
  }
};