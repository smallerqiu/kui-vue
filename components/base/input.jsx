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
    value: [String, Number],
    disabled: Boolean,
    type: {
      validator(value) {
        return (["text", "textarea", "password", "url", "email", "date", "search"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
    iconAlign: String,
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
    FormItem: { default: null },
  },
  watch: {
    value(value) {
      this.currentValue = value
      this.FormItem && this.FormItem.testValue(value)
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
      this.setValue('')
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
      this.isFocus = false
      let intput = this.Input || this.TextArea
      intput && intput.$emit('blur', e)
      this.FormItem && this.FormItem.testValue(this.value, 'blur')
    },
    handleInput(e) {
      this.setValue(e.target.value, e)
    },
    showPassword() {
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
      this.$listeners.search(this.currentValue)
    },
    getSuffix() {
      let { $listeners } = this
      const Search = ('search' in $listeners)
        ? <Icon type='search' onClick={this.searchEvent} /> : null
      const Password = (this.type == 'password') ? <Icon type={!this.isPassword ? 'eye-outline' : 'eye-off-outline'} onClick={this.showPassword} /> : null

      return Password || Search || this.$slots.suffix
    },
    getTextInput() {
      const { disabled, size, type, inputType, currentValue, id } = this
      let isTextArea = inputType == 'textarea'
      // console.log(this.props)
      const props = {
        domProps: {
          value: currentValue
        },
        class: [
          `k-${inputType}`,
          {
            [`k-${inputType}-disabled`]: disabled,
            ["k-input-sm"]: size == 'small' && !isTextArea,
            ["k-input-lg"]: size == 'large' && !isTextArea
          }
        ],
        ref: 'input',
        attrs: { ...this.$attrs, disabled, id },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput
        }

      }
      if (!isTextArea) {
        props.attrs.type = type
        // delete props.rows
      }
      return isTextArea ? <textarea {...props} /> : <input {...props} />
    },
  },
  render() {
    const { inputType, icon, $slots, size, type, $listeners, clearable } = this

    let isTextArea = inputType == 'textarea'
    let hasChild = icon || ('search' in $listeners) || $slots.suffix || type == 'password' || clearable

    let textInput = this.getTextInput()

    if (isTextArea || !hasChild) {
      return textInput
    } else {
      let { isFocus, isEnter, currentValue } = this
      const clearableShow = clearable && (isFocus || isEnter) && isNotEmpty(currentValue)
      let hasSuffix = ('search' in $listeners) || $slots.suffix || type == 'password'
      const props = {
        class: [
          'k-input-wrapper',
          {
            ["k-input-has-suffix"]: hasSuffix,
            ["k-input-sm"]: size == 'small',
            ["k-input-lg"]: size == 'large',
            ["k-input-has-clear"]: clearable,
          }
        ],
        on: {
          mouseenter: () => this.isEnter = true,
          mouseleave: () => this.isEnter = false
        }
      }
      const suffixNode = this.getSuffix()
      return <div {...props}>
        {icon ? <Icon type={icon} class="k-input-icon" onClick={this.iconClick} /> : null}
        {textInput}
        {suffixNode ? <div class="k-input-suffix">{suffixNode}</div> : null}
        {clearableShow ? <Icon type="close-circle" class="k-input-clearable" onClick={this.clear} /> : null}
      </div>
    }
  }
};