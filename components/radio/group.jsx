import { getChild } from '../_tool/utils'
import Radio from './radio.jsx';
import Button from './button.jsx';
export default {
  name: "RadioGroup",
  props: {
    value: { type: [String, Number], default: "" },
    disabled: Boolean,
    mini: Boolean,
    large: Boolean,
    hollow: Boolean,
    circle: Boolean,
    options: Array,
    type: String,
  },
  provide() {
    return {
      groupContext: this,
    }
  },
  inject: {
    FormItem: { default: null },
  },
  watch: {
    value(checked) {
      this.FormItem && this.FormItem.testValue(checked)
    }
  },
  methods: {
    change(data) {
      let value = data.value
      this.$emit("input", value);
      this.$emit("change", value);
    }
  },
  render() {
    const { options, $slots, type } = this
    let kid = getChild($slots.default)
    if (options && options.length) {
      kid = options.map(option => {
        return type == 'button' ?
          <Button
            icon={option.icon}
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
          />
          :
          <Radio
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
          />
      })
    }
    const classes = [
      'k-radio-group',
      { 'k-radio-cirle': this.circle }
    ]
    return (
      <div class={classes}>
        {kid}
      </div>
    )
  }
};
