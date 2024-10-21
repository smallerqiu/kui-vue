import Icon from '../icon'
import { isNotEmpty } from '../_tool/utils'
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
      // isEnter: false,
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
      this.$nextTick(e => this.$refs.input.focus())
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(e) {
      this.isFocus = true
      let intput = this.Input || this.TextArea || this.InputNumber
      intput && intput.$emit('focus', e)
    },
    handleBlur(e) {
      let intput = this.Input || this.TextArea || this.InputNumber
      // console.log('base blur')
      this.$emit('blur', e);
      // intput && intput.$emit('blur', e)
      this.isFocus = false
    },
    handleInput(e) {
      let v = e.target.value + '', input = v, output = v + '';
      let { parser, formatter } = this

      if (parser) {
        output = parser(v)
      }

      // console.log('output', output)

      if (output !== '' && formatter) {
        input = formatter(output)
        // e.target.value = v
      }
      // console.log('res', input, output)
      e.target.value = input
      if (input === '') {
        output = ''
      }

      // e.target.value = e.target.value.replace(/\D/g, '')
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
    getTextInput(mult) {
      const { disabled, size, type, inputType, currentValue, id, theme, shape, placeholder } = this
      let isTextArea = inputType == 'textarea'
      const props = {
        domProps: {
          value: currentValue
        },
        class: [
          {
            [`k-${inputType}`]: !mult,
            [`k-${inputType}-text`]: mult,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-sm`]: size == 'small' && !mult,
            [`k-${inputType}-lg`]: size == 'large' && !mult,
            [`k-${inputType}-${theme}`]: theme != 'solid' && !mult && theme,
            [`k-${inputType}-circle`]: shape == 'circle' && !isTextArea && !mult,
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
    let mult = icon || ('search' in $listeners) || $slots.suffix || suffix || $slots.prefix || prefix || type == 'password' || clearable || $slots.contorls

    let textInput = this.getTextInput(mult)

    if (isTextArea || !mult)
      return textInput

    let { isFocus, isEnter, currentValue } = this
    // let clearableShow = clearable && (isFocus || isEnter) && isNotEmpty(currentValue)
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
      // on: {
      // mouseenter: () => this.isEnter = true,
      // mouseleave: () => this.isEnter = false
      // }
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
          {$slots.contorls}
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
        {$slots.contorls}
      </div >
    }
  }
};