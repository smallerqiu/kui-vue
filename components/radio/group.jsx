import { getChild } from '../_tool/utils'
import Radio from './radio.jsx';
import Button from './button.jsx';
export default {
  name: "RadioGroup",
  props: {
    value: { type: [String, Number], default: "" },
    disabled: Boolean,
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].indexOf(val) >= 0
    },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    theme: String,
    shape: String,
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
      this.$emit("change", data);
    }
  },
  render() {
    const { options, $slots, type, direction, theme, shape } = this
    let childs = getChild($slots.default)
    if (options && options.length) {
      childs = options.map(option => {
        return type == 'button' ?
          <Button
            theme={theme}
            shape={shape}
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
      { 'k-radio-cirle': shape == 'circle' },
      { 'k-radio-group-light': theme == 'light' && type == 'button' },
      { 'k-radio-group-card': theme == 'card' && type == 'button' },
      { 'k-radio-group-vertical': direction == 'vertical' }
    ]
    return (
      <div class={classes}>{childs}</div>
    )
  }
};
