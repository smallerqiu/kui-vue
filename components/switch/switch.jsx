import { hasProp } from '../_tool/utils'
import Icon from '../icon'
export default {
  name: "kSwitch",
  props: {
    checked: [Boolean, Number],
    type: String,
    disabled: Boolean,
    loading: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "default", 'large'].indexOf(value) >= 0;
      }
    },
    trueText: String,
    falseText: String
  },
  model: {
    prop: 'checked',
  },
  data() {
    const checked = hasProp(this, 'checked') ? this.checked : false
    return {
      isChecked: checked,
    }
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return false;
      }

      let checked = !this.checked
      if (!hasProp(this, 'checked')) {
        this.isChecked = !this.isChecked;
      } else {
        this.isChecked = checked
      }
      this.$emit("input", checked);
      this.$emit("change", this.isChecked);
    }
  },
  render() {
    let { disabled, type, size, change, falseText, trueText, checked, loading, isChecked, $slots } = this
    if (!hasProp(this, 'checked')) {
      checked = isChecked
    }
    const classes = [
      "k-switch",
      {
        ["k-switch-checked"]: checked,
        ["k-switch-disabled"]: disabled || loading,
        [`k-switch-${type}`]: !!type,
        ["k-switch-sm"]: size == 'small',
      }
    ];
    const children = $slots.checked || trueText || $slots.unchecked || falseText
    const loadNode = loading ? <Icon spin type="sync" class="k-switch-loading" /> : null

    const textNode = (
      (size != 'small' && children) ? <span class="k-switch-inner">{checked ? $slots.checked || trueText : $slots.unchecked || falseText}</span> : null
    )
    return (
      <button class={classes} onClick={change} disabled={disabled || loading} type="button">{textNode}{loadNode}</button>
    )
  }
};