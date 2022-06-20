import { hasProp } from '../_tool/utils'
import Icon from '../icon'
import { Sync } from 'kui-icons'
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
  watch: {
    checked(val, Oval) {
      this.defaultChecked = val
    }
  },
  data() {
    const checked = hasProp(this, 'checked') ? this.checked : false
    return {
      defaultChecked: checked,
    }
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return false;
      }
      let checked = !this.defaultChecked
      this.defaultChecked = checked

      this.$emit("input", checked);
      this.$emit("change", checked);
    }
  },
  render() {
    let { disabled, type, size, change, falseText, trueText, loading, defaultChecked, $slots } = this

    const classes = [
      "k-switch",
      {
        ["k-switch-checked"]: defaultChecked,
        ["k-switch-disabled"]: disabled || loading,
        [`k-switch-${type}`]: !!type,
        ["k-switch-sm"]: size == 'small',
      }
    ];
    const children = $slots.checked || trueText || $slots.unchecked || falseText
    const loadNode = loading ? <Icon spin type={Sync} class="k-switch-loading" /> : null

    const textNode = (
      (size != 'small' && children) ? <span class="k-switch-inner">{defaultChecked ? $slots.checked || trueText : $slots.unchecked || falseText}</span> : null
    )
    return (
      <button class={classes} onClick={change} disabled={disabled || loading} type="button">{textNode}{loadNode}</button>
    )
  }
};