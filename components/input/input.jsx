import BaseInput from '../base/input'
export default {
  name: 'TextArea',
  props: {
    clearable: Boolean,
    mini: Boolean,
    large: Boolean,
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      validator(value) {
        return (["text", "password", "url", "email", "date", "search"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
    autofocus: Boolean,
    iconAlign: String,
    name: String,
    number: Boolean,
    maxlength: Number
  },
  methods: {
    focus() {
      this.$nextTick(e => {
        this.$refs.baseInput.$refs.input.focus()
      })
    },
    blur() {
      this.$nextTick(e => {
        this.$refs.baseInput.$refs.input.blur()
      })
    }
  },
  render() {
    const props = {
      props: { ...this.$props },
      attrs: { ...this.$attrs },
      on: {
        ...this.$listeners
      },
      ref: 'baseInput'
    }
    return <BaseInput {...props}>
      <template slot="suffix">
        {this.$slots.suffix}
      </template>
    </BaseInput>
  }
}