import Button from '../button';
export default {
  name: "RadioButton",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    label: [String, Number],
  },
  inject: {
    FormItem: { default: null },
    groupContext: { default: null },
  },
  data() {
    return {
      checked: false
    }
  },
  watch: {
    value(checked) {
      !this.groupContext && this.FormItem && this.FormItem.testValue(checked)
    }
  },
  methods: {
    change() {
      let { value, $slots, label, groupContext } = this
      this.checked = true
      if (groupContext) {
        label = label || $slots.default.text
        groupContext.change({ label, value })
      } else {
        this.$emit("input", checked);
        this.$emit("change", e);
        this.FormItem && this.FormItem.testValue(checked)
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
