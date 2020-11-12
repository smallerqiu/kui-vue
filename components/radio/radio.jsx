import { hasProp } from '../_tool/utils'
export default {
  name: "Radio",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    checked: [Boolean, Number],
    label: [String, Number]
  },
  inject: {
    FormItem: { default: null },
    groupContext: { default: null },
  },
  model: {
    prop: 'checked',
  },
  data() {
    const checked = hasProp(this, 'checked') ? this.checked : this.value === true
    return {
      isChecked: checked,
    }
  },
  watch: {
    checked(checked) {
      this.$emit("input", checked);
      !this.groupContext && this.FormItem && this.FormItem.testValue(checked)
    }
  },
  methods: {
    change(e) {
      let { disabled, value, $slots, label, groupContext } = this
      if (disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.isChecked = checked;
      if (groupContext) {
        label = label || $slots.default.text
        this.groupContext.change({ label, value })
      } else {
        this.$emit("input", checked);
        this.$emit("change", e);
      }
    }
  },

  render() {
    let { disabled, change, $slots, label, groupContext, value, checked, isChecked } = this
    if (groupContext) {
      checked = groupContext.value == value
      disabled = disabled || groupContext.disabled
    } else {
      if (!hasProp(this, 'checked')) {
        checked = isChecked
      }
    }
    const wpclasses = [
      "k-radio-wrapper", { ["k-radio-disabled"]: disabled }
    ];
    const classes = [
      "k-radio", { ["k-radio-checked"]: checked }
    ];
    const labelNode = label || $slots.default
    return (
      <label class={wpclasses}>
        <span class={classes}>
          <input type="radio" class="k-radio-input" disabled={disabled} checked={checked} onChange={change} />
          <span class="k-radio-inner"></span>
        </span>
        {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
      </label>
    )
  }
};
