import { getChild } from '../_tool/utils'
import Radio from './radio.jsx';
import Button from './button.jsx';
export default {
  name: "RadioGroup",
  props: {
    value: { type: [String, Number], default: "" },
    disabled: Boolean,
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
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
  data() {
    return {
      defaultValue: this.value || ''
    }
  },
  watch: {
    value(val, Oval) {
      this.defaultValue = val
    }
  },
  methods: {
    change(data) {
      let value = data.value
      this.defaultValue = value
      this.$emit("input", value);
      this.$emit("change", value);
    }
  },
  render() {
    const { options, $slots, type } = this
    let childs = getChild($slots.default)
    if (options && options.length) {
      childs = options.map(option => {
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
        {childs}
      </div>
    )
  }
};
