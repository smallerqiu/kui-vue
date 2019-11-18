import Icon from '../icon'
import baseProps from './porps'
import { hasProp } from '../_tool/utils'
export default {
  name: "Input",
  props: { ...baseProps },
  data() {
    return {
      currentValue: this.value,
      isFocus: false,
      isEnter: false,
      isPassword: true,
    };
  },
  watch: {
    value(v) {
      this.currentValue = v
    }
  },
  methods: {
    focus() {
      this.$nextTick(e => this.$refs.input.focus())
    },
    blur(e) {
      this.$nextTick(e => this.$refs.input.blur())
    },
    clear() {
      this.setValue('')
      this.$nextTick(e => this.$refs.input.focus())
    },
    iconClick() {
      !this.disabled && this.$emit("icon-click");
    },
    handleFocus(e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.isFocus = false
      this.$emit('blur', e)
    },
    handleInput(e) {
      this.setValue(e.target.value, e)
    },
    changeType() {
      let type = ''
      if (!this.isPassword) {
        type = 'password'
      } else {
        type = 'text'
      }
      this.isPassword = !this.isPassword
      this.$refs.input.type = type
    },
    // handleChange(e) {
    //   this.$emit('change', e)
    // },
    setValue(value, e) {
      if (this.number) {
        const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          value = value;
        }
      }
      if (!hasProp(this, 'value')) {
        this.currentValue = value
      }
      this.$emit('input', value)
      this.$emit('change', e)
    },
    getSuffix() {
      let { $listeners } = this
      const Search = ('search' in $listeners)
        ? <Icon type='ios-search' onClick={$listeners.search} /> : null
      const Password =

        (this.type == 'password')
          ? <Icon type={this.isPassword ? 'ios-eye' : 'ios-eye-off'} onClick={this.changeType} /> : null

      return Password || Search || this.$slots.suffix
    },
    renderInput() {
      const {
        $listeners, getProp,
        $attrs, disabled, placeholder, type,
        handleFocus, handleBlur, handleInput, currentValue,
        icon, iconClick, clear
      } = this
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: 'k-input',
        ref: 'input',
        attrs: {
          ...$attrs,
          disabled, type,
          placeholder,
        },
        on: {
          ...$listeners,
          focus: handleFocus,
          blur: handleBlur,
          input: handleInput,
          // change: handleChange
        }
      }
      const props = getProp()
      const clearableShow = this.clearable && (this.isFocus || this.isEnter)
        && currentValue !== undefined && currentValue !== null && currentValue !== ''

      let suffix = this.getSuffix()
      suffix = suffix ? <div class="k-input-suffix">{suffix}</div> : null
      return (
        <div {...props}>
          {icon ? <Icon type={icon} class="k-input-icon" onClick={iconClick} /> : null}
          <input ref="input"  {...inputProps} />
          {suffix}
          {clearableShow ? <span class="k-input-clearable" onClick={clear} /> : null}
        </div>
      )
    },
    renderTextArea() {
      const {
        rows, $attrs, getProp, $listeners, currentValue,
        handleInput, disabled, placeholder
      } = this
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: 'k-textarea',
        attrs: {
          rows, ...$attrs,
          placeholder,
          disabled
        },
        ref: 'input',
        on: {
          ...$listeners,
          input: handleInput
        }
      }
      const props = getProp()
      return (
        <div {...props}><textarea ref="input" {...inputProps} /></div>
      )
    },
    getProp() {
      const { mini, disabled, type, large, width, $listeners } = this
      let isTextArea = type == 'textarea'
      let isSuffix = ('search' in $listeners) || this.$slots.suffix || type == 'password'
      const classes = [
        "k-input-wrapper",
        {
          ["k-input-disabled"]: disabled,
          ["k-input-has-suffix"]: isSuffix,
          ["k-input-mini"]: mini && !isTextArea,
          ["k-input-lg"]: large && !mini && !isTextArea,
        }
      ];

      const props = {
        class: classes,
        style: { width: width + 'px' },
        on: {
          mouseenter: e => this.isEnter = true,
          mouseleave: e => this.isEnter = false
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