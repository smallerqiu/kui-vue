import Icon from '../icon'
import { isNotEmpty } from '../utils/element'
import { Search, CloseCircle, EyeOutline, EyeOffOutline } from 'kui-icons';
import { InputGroup } from '../input'
export default {
  name: "baseInput",
  props: {
    clearable: Boolean,
    visiblePassword: Boolean,
    visiblePasswordIcon: Boolean,
    id: String,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    inputType: { type: String, default: "input" },
    value: [String, Number, Array, Object],
    disabled: Boolean,
    type: {
      validator(value) {
        return (["text", "textarea", "password", "url", "email", "date", "search", "hidden"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: [String, Array],
    suffix: String,
    prefix: String,
    theme: String,
    shape: String,
    formatter: Function,
    parser: Function,
    placeholder: String
  },
  data() {
    return {
      currentValue: this.value,
      isFocus: false,
      isPassword: !this.visiblePassword,
    };
  },
  inject: {
    Input: { default: null },
    TextArea: { default: null },
    InputNumber: { default: null },
  },
  watch: {
    value(value) {
      this.currentValue = value
    },
    visiblePassword(value) {
      this.isPassword = !value
    }
  },
  mounted() {
    let textInput = (this.Input || this.TextArea || this.InputNumber) || {}
    textInput.focus = (e) => {
      this.$nextTick(() => this.$refs.input.focus(e))
    }
    textInput.blur = (e) => {
      this.$nextTick(() => this.$refs.input.blur(e))
    }
  },
  methods: {
    clear() {
      this.setValue({ input: '', output: '' })
      this.$nextTick(() => this.$refs.input.focus())
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(e) {
      this.isFocus = true
      let input = this.Input || this.TextArea || this.InputNumber
      input && input.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e);
      this.isFocus = false
    },
    handleInput(e) {
      let v = e.target.value + '', input = v, output = v + '';
      let { parser, formatter } = this

      if (parser) {
        output = parser(v)
      }


      if (output !== '' && formatter) {
        input = formatter(output)
      }
      e.target.value = input
      if (input === '') {
        output = ''
      }

      this.setValue({ input, output })
    },
    showPassword() {
      if (this.disabled) return;
      this.isPassword = !this.isPassword
      let type = this.isPassword ? 'text' : 'password'
      this.$refs.input.type = type
    },
    setValue({ input, output }) {
      this.currentValue = input
      this.$emit('input', output)
      this.$emit('change', output)
    },

    searchEvent() {
      if (this.disabled) return;
      this.$listeners.search(this.currentValue)
    },
    getSuffix() {
      let { $listeners, suffix, visiblePasswordIcon } = this
      const SearchNode = ('search' in $listeners) ? <Icon type={Search} class="k-input-search-icon" onClick={this.searchEvent} /> : null

      const Password = (this.type == 'password' && visiblePasswordIcon) ? <Icon class="k-input-password-icon" type={!this.isPassword ? EyeOutline : EyeOffOutline} onClick={this.showPassword} /> : null

      return Password || SearchNode || this.$slots.suffix || (suffix ? <div class="k-input-suffix">{suffix}</div> : null)
    },
    getTextInput(multiple) {
      const { disabled, size, type, inputType, currentValue, id, theme, shape, placeholder } = this
      let isTextArea = inputType == 'textarea'
      const props = {
        domProps: {
          value: currentValue
        },
        class: [
          {
            [`k-${inputType}`]: !multiple,
            [`k-${inputType}-text`]: multiple,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-sm`]: size == 'small' && !multiple,
            [`k-${inputType}-lg`]: size == 'large' && !multiple,
            [`k-${inputType}-${theme}`]: theme != 'solid' && !multiple && theme,
            [`k-${inputType}-circle`]: shape == 'circle' && !isTextArea && !multiple,
          }
        ],
        ref: 'input',
        attrs: {
          ...this.$attrs,
          disabled, id, placeholder
        },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput
        }
      }

      if (!isTextArea) {
        props.attrs.type = type

        if (!this.isPassword && type == 'password') {
          props.attrs.type = 'text'
        }
      }
      return isTextArea ? <textarea {...props} /> : <input {...props} single />
    },
  },
  render() {
    const { inputType, icon, $slots, size, disabled, type, $listeners, clearable, suffix, theme, prefix, shape } = this

    let isTextArea = inputType == 'textarea'
    let multiple = (icon || ('search' in $listeners) || $slots.suffix || suffix || $slots.prefix || prefix || type == 'password' || clearable || $slots.controls) && type !== 'hidden'

    let textInput = this.getTextInput(multiple)

    if (isTextArea || !multiple)
      return textInput

    let { isFocus, currentValue } = this
    let clearableShow = clearable && isNotEmpty(currentValue)
    const props = {
      class: {
        [`k-${inputType}`]: true,
        [`k-${inputType}-focus`]: isFocus,
        [`k-${inputType}-disabled`]: disabled,
        [`k-${inputType}-sm`]: size == 'small',
        [`k-${inputType}-lg`]: size == 'large',
        [`k-${inputType}-${theme}`]: theme && theme != 'solid',
        [`k-${inputType}-circle`]: shape == 'circle' && !isTextArea,
      },
    }
    const suffixNode = this.getSuffix()
    const prefixNode = (prefix ? <div class={`k-${inputType}-prefix`}>{prefix}</div> : null)
    if ($slots.prefix || $slots.suffix) {
      return <InputGroup size={size}>
        {$slots.prefix ? <div class={{ "k-input-group-prefix": true }}>{$slots.prefix}</div> : null}
        <div {...props} mult>
          {icon ? <Icon type={icon} class={`k-${inputType}-icon`} onClick={this.iconClick} /> : null}
          {prefixNode}
          {textInput}
          {clearable ? <Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={this.clear} /> : null}
          {/* {suffixNode} */}
          {$slots.controls}
        </div >
        {$slots.suffix ? <div class={{ "k-input-group-suffix": true }}>{$slots.suffix}</div> : null}
      </InputGroup>
    } else {
      return <div {...props} mult>
        {icon ? <Icon type={icon} class={`k-${inputType}-icon`} onClick={this.iconClick} /> : null}
        {prefixNode}
        {textInput}
        {clearable ? <Icon type={CloseCircle} class={[`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }]} onClick={this.clear} /> : null}
        {suffixNode}
        {$slots.controls}
      </div >
    }
  }
};