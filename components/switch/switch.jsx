import { hasProp } from '../_tool/utils'
export default {
  name: "kSwitch",
  props: {
    checked: [Boolean, Number],
    type: String,
    disabled: Boolean,
    mini: Boolean,
    trueText: String,
    falseText: String,
    checked: [Boolean, Number]
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
    let { disabled, type, mini, change, falseText, trueText, checked, isChecked, $slots } = this
    if (!hasProp(this, 'checked')) {
      checked = isChecked
    }
    const classes = [
      "k-switch",
      {
        ["k-switch-checked"]: checked,
        ["k-switch-disabled"]: disabled,
        [`k-switch-${type}`]: !!type,
        ["k-switch-mini"]: mini,
      }
    ];
    const textNode = (
      !mini ? <span class="k-switch-inner">{checked ? $slots.checked || trueText : $slots.unchecked || falseText}</span> : null
    )
    return (
      <button class={classes} onClick={change} type="button">{textNode}</button>
    )
  }
};