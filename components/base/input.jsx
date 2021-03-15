import Icon from '../icon'
import { isNotEmpty } from '../_tool/utils'
export default {
  name: "baseInput",
  props: {
    maxlength: Number,
    clearable: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      validator(value) {
        return (["text", "textarea", "password", "url", "email", "date", "search"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
    autofocus: Boolean,
    iconAlign: String,
    rows: { type: Number, default: 2 },
    name: String,
    number: Boolean,
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
    FormItem: { default: null },
  },
  watch: {
    value(value) {
      this.currentValue = value
      this.FormItem && this.FormItem.testValue(value)
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
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.isFocus = false
      this.$emit('blur', e)
      this.FormItem && this.FormItem.testValue(this.value, 'blur')
    },
    handleInput(e) {
      this.setValue(e.target.value, e)
    },
    showPassword() {
      let type = ''
      if (!this.isPassword) {
        type = 'password'
      } else {
        type = 'text'
      }
      this.isPassword = !this.isPassword
      this.$refs.input.type = type
    },
    setValue(value, e) {
      // console.log(value)
      //todo: 数值过大 会有bug
      // if (this.number && /^(-?\d+)(\.\d+)?$/.test(value)) {
      // value = parseFloat(value)
      // }
      // if (!hasProp(this, 'value')) {
      this.currentValue = value
      // }
      this.$emit('input', value)
      this.$emit('change', e)
    },
    searchEvent(){
      this.$listeners.search(this.currentValue)
    },
    getSuffix() {
      let { $listeners } = this
      const Search = ('search' in $listeners)
        ? <Icon type='search' onClick={this.searchEvent} /> : null
      const Password = (this.type == 'password') ? <Icon type={!this.isPassword ? 'eye' : 'eye-off'} onClick={this.showPassword} /> : null

      return Password || Search || this.$slots.suffix
    },
    renderInput() {
      const {
        disabled, placeholder, type, maxlength, readonly, autofocus,
        currentValue,
        icon, clearable
      } = this

      let suffix = this.getSuffix()
      const hasChild = suffix || clearable || icon
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: [
          'k-input',
          {
            ["k-input-disabled"]: disabled,
            ["k-input-sm"]: !hasChild && this.size=='small' ,
            ["k-input-lg"]: this.size=='large'
          }
        ],
        ref: 'input',
        attrs: {
          ...this.$attrs,
          disabled, placeholder, type, maxlength, readonly, autofocus,
        },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput
        }
      }

      const props = this.getProp(hasChild)

      // console.log(currentValue, 'currentValue')

      const clearableShow = clearable && (this.isFocus || this.isEnter) && isNotEmpty(currentValue)


      // console.log(inputProps)

      return (
        hasChild ?
          <div {...props}>
            {icon ? <Icon type={icon} class="k-input-icon" onClick={this.iconClick} /> : null}
            <input  {...inputProps} />
            {suffix ? <div class="k-input-suffix">{suffix}</div> : null}
            {clearableShow ? <Icon type="close-circle" class="k-input-clearable" onClick={this.clear} /> : null}
          </div>
          : <input  {...inputProps} />
      )
    },
    renderTextArea() {
      const {
        $attrs, $listeners, currentValue,
        rows, disabled, placeholder, maxlength, readonly, autofocus,
      } = this
      const inputProps = {
        domProps: {
          value: currentValue
        },
        class: 'k-textarea',
        attrs: {
          ...$attrs,
          rows, disabled, placeholder, maxlength, readonly, autofocus
        },
        ref: 'input',
        on: {
          ...$listeners,
          input: this.handleInput
        }
      }
      return <textarea ref="input" {...inputProps} />
    },
    getProp(hasChild) {
      const { type, $listeners, size } = this
      let isSuffix = ('search' in $listeners) || this.$slots.suffix || type == 'password'
      const props = {
        class: [
          'k-input-wrapper',
          {
            ["k-input-has-suffix"]: isSuffix,
            ["k-input-sm"]: hasChild && size=='small',
            ["k-input-lg"]: hasChild && size=='large',
            ["k-input-has-clear"]: this.clearable,
          }
        ],
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