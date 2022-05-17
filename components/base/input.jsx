import Icon from '../icon'
import { isNotEmpty } from '../_tool/utils'
export default {
  name: "baseInput",
  props: {
    clearable: Boolean,
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
    icon: String,
    suffix: String,
    prefix: String,
    theme: String,
    shape: String,
    formatter: Function,
    parser: Function
  },
  data() {
    return {
      currentValue: this.value,
      isFocus: false,
      isEnter: false,
      isPassword: true,
    };
  },
  inject: {
    Input: { default: null },
    TextArea: { default: null },
  },
  watch: {
    value(value) {
      this.currentValue = value
    }
  },
  mounted() {
    let textInput = (this.Input || this.TextArea) || {}
    textInput.focus = (e) => {
      this.$nextTick(() => this.$refs.input.focus(e))
    }
    textInput.blur = (e) => {
      this.$nextTick(() => this.$refs.input.blur(e))
    }
  },
  methods: {
    clear() {
      this.setValue('', { target: { value: '' } })
      this.$nextTick(e => this.$refs.input.focus())
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(e) {
      this.isFocus = true
      let intput = this.Input || this.TextArea
      intput && intput.$emit('focus', e)
    },
    handleBlur(e) {
      let intput = this.Input || this.TextArea
      // console.log('base blur')
      this.$emit('blur', e);
      intput && intput.$emit('blur', e)
      this.isFocus = false
    },
    handleInput(e) {
      let v = e.target.value + ''
     
      if (this.formatter) {
        v = this.formatter(v)
        e.target.value = v
      }
      if (this.parser) {
        v = this.parser(v)
      }
      // e.target.value = e.target.value.replace(/\D/g, '')
      this.setValue(v, e)
    },
    showPassword() {
      if (this.disabled) return;
      let type = this.isPassword ? 'text' : 'password'
      this.isPassword = !this.isPassword
      this.$refs.input.type = type
    },
    setValue(value, e) {
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', e)
    },

    searchEvent() {
      if (this.disabled) return;
      this.$listeners.search(this.currentValue)
    },
    getSuffix() {
      let { $listeners, suffix } = this
      const Search = ('search' in $listeners) ? <Icon type='search' class="k-input-icon-search" onClick={this.searchEvent} /> : null

      const Password = (this.type == 'password') ? <Icon type={!this.isPassword ? 'eye-outline' : 'eye-off-outline'} onClick={this.showPassword} /> : null

      return Password || Search || this.$slots.suffix || (suffix ? <div class="k-input-suffix">{suffix}</div> : null)
    },
    getTextInput(mult) {
      const { disabled, size, type, inputType, currentValue, id, theme, shape } = this
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
            [`k-${inputType}-sm`]: size == 'small' && !isTextArea && !mult,
            [`k-${inputType}-lg`]: size == 'large' && !isTextArea && !mult,
            [`k-${inputType}-${theme}`]: theme != 'solid' && !mult,
            [`k-${inputType}-circle`]: shape == 'circle' && !isTextArea && !mult,
          }
        ],
        ref: 'input',
        attrs: {
          ...this.$attrs, disabled, id
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
      }
      return isTextArea ? <textarea {...props} /> : <input {...props} single />
    },
  },
  render() {
    const { inputType, icon, $slots, size, disabled, type, $listeners, clearable, suffix, theme, prefix, shape } = this

    let isTextArea = inputType == 'textarea'
    let mult = icon || ('search' in $listeners) || $slots.suffix || suffix || $slots.prefix || prefix || type == 'password' || clearable

    let textInput = this.getTextInput(mult)

    if (isTextArea || !mult)
      return textInput

    let { isFocus, isEnter, currentValue } = this
    let clearableShow = clearable && (isFocus || isEnter) && isNotEmpty(currentValue)
    const props = {
      class: [
        `k-${inputType}`,
        {
          [`k-${inputType}-focus`]: isFocus,
          [`k-${inputType}-disabled`]: disabled,
          [`k-${inputType}-sm`]: size == 'small',
          [`k-${inputType}-lg`]: size == 'large',
          [`k-${inputType}-${theme}`]: theme && theme != 'solid',
          [`k-${inputType}-circle`]: shape == 'circle' && !isTextArea,
        }
      ],
      on: {
        mouseenter: () => this.isEnter = true,
        mouseleave: () => this.isEnter = false
      }
    }
    const suffixNode = this.getSuffix()
    const prefixNode = $slots.prefix || (prefix ? <div class={`k-${inputType}-prefix`}>{prefix}</div> : null)
    return <div {...props} mult>
      {icon ? <Icon type={icon} class={`k-${inputType}-icon`} onClick={this.iconClick} /> : null}
      {prefixNode ? prefixNode : null}
      {textInput}
      {clearableShow ? <Icon type="close-circle" class={`k-${inputType}-clearable`} onClick={this.clear} /> : null}
      {suffixNode ? suffixNode : null}
    </div >
  }
};