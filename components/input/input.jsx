import BaseInput from '../base/input'
export default {
  name: 'TextArea',
  props: {
    clearable: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    value: [String, Number],
    type: {
      validator(value) {
        return (["text", "password", "url", "email", "date", "search"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
    iconAlign: String,
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
    </BaseInput>
  }
}