import Button from '../button';
export default {
  name: "RadioButton",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    label: [String, Number],
  },
  inject: {
    groupContext: { default: null },
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    change() {
      const { value, $slots, label, groupContext } = this
      this.checked = true
      if (groupContext) {
        let _label = label || $slots.default.text
        groupContext.change({ label: _label, value })
      }
    }
  },

  render() {
    let { disabled, change, $slots, label, groupContext, value, checked, $attrs } = this
    let prop = {}
    if (groupContext) {
      checked = groupContext.value == value
      let { mini, large, hollow } = groupContext
      disabled = disabled || groupContext.disabled
      prop = { disabled, mini, large, hollow, type: checked ? 'primary' : 'default' }
    }
    const props = {
      attrs: { ...$attrs },
      on: { click: change },
      props: { ...prop }
    }
    return (
      <Button {...props}>{label || $slots.default}</Button>
    )
  }
};
