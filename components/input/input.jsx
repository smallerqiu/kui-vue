import BaseInput from '../base/input'
import { withInstall } from '../utils/vue'
const Input = {
  name: 'Input',
  props: {
    clearable: { type: Boolean, default: false },
    id: String,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    value: [String, Number, Array, Object],
    type: {
      validator(value) {
        return (["text", "password", "url", "email", "date", "search", "hidden"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: [String, Array],
    suffix: String,
    prefix: String,
    disabled: Boolean,
    readonly: Boolean,
    visiblePassword: Boolean,
    visiblePasswordIcon: { type: Boolean, default: true },
    theme: {
      type: String,
      default: 'solid',
      validator(value) {
        return (["normal", "solid", "light"].indexOf(value) >= 0);
      }
    },
    shape: String
  },
  provide() {
    return {
      Input: this
    }
  },
  render() {
    const props = {
      props: { ...this.$props, inputType: 'input' },
      attrs: { ...this.$attrs },
      on: {
        ...this.$listeners
      },
    }
    return <BaseInput {...props}>
      <template slot="suffix">
        {this.$slots.suffix}
      </template>
      <template slot="prefix">
        {this.$slots.prefix}
      </template>
    </BaseInput>
  }
}
export default withInstall(Input)