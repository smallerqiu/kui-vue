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
  methods: {
    change(e) {
      const { disabled, value, $slots, label, groupContext } = this
      if (disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.isChecked = checked;
      if (groupContext) {
        let _label = label || $slots.default.text
        this.groupContext.change({ label: _label, value })
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
      "k-radio-wp", { ["k-radio-disabled"]: disabled }
    ];
    const classes = [
      "k-radio", { ["k-radio-checked"]: checked }
    ];
    return (
      <label class={wpclasses}>
        <span class={classes}>
          <span class="k-radio-inner"></span>
          <input type="radio" class="k-radio-input" disabled={disabled} checked={checked} onChange={change} />
        </span>
        <span>{label || $slots.default}</span>
      </label>
    )
  }
};
