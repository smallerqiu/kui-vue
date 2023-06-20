import { hasProp } from '../_tool/utils'
export default {
  name: "Radio",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: Boolean,
    checked: [Boolean, Number],
    label: [String, Number],
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
      defaultChecked: checked,
    }
  },
  // watch: {
    // checked(checked) {
      // this.$emit("input", checked);
    // }
  // },
  methods: {
    change(e) {
      let { disabled, value, $slots, label, groupContext } = this
      if (disabled) {
        return false;
      }
      const checked = e.target.checked;
      this.defaultChecked = checked;
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
    let { disabled, change, $slots, label, groupContext, value, checked, defaultChecked } = this
    if (groupContext) {
      checked = groupContext.defaultValue == value
      disabled = disabled || groupContext.disabled
    } else {
      if (!hasProp(this, 'checked')) {
        checked = defaultChecked
      }
    }
    const wpclasses = [
      "k-radio", { ["k-radio-disabled"]: disabled, ["k-radio-checked"]: checked }
    ];

    const labelNode = label || $slots.default
    return (
      <label class={wpclasses} onClick={e => e.stopPropagation()}>
        <span class="k-radio-symbol">
          <input type="radio" class="k-radio-input" disabled={disabled} checked={checked} onChange={change} />
          <span class="k-radio-inner"></span>
        </span>
        {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
      </label>
    )
  }
};
