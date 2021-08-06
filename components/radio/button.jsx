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
      defaultChecked: false
    }
  },
  methods: {
    change() {
      let { value, $slots, label, groupContext } = this
      this.defaultChecked = true
      if (groupContext) {
        label = label || $slots.default.text
        groupContext.change({ label, value })
      } else {
        this.$emit("input", true);
        this.$emit("change", true);
      }
    }
  },

  render() {
    let { disabled, change, $slots, label, groupContext, value, checked, $attrs } = this
    let prop = {}
    if (groupContext) {
      checked = groupContext.defaultValue == value
      let { size, hollow } = groupContext
      disabled = disabled || groupContext.disabled
      prop = { disabled, size, hollow, type: checked ? 'primary' : 'default' }
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
