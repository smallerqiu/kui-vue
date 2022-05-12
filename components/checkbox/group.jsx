import Checkbox from './checkbox';
import { getChild } from '../_tool/utils'
export default {
  name: "CheckboxGroup",
  props: {
    disabled: Boolean,
    options: Array,
    direction: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].indexOf(val) >= 0
    },
    value: { type: Array, default: () => [] },
  },
  provide() {
    return {
      groupContext: this,
    }
  },
  methods: {
    change(data) {
      let value = this.value
      let index = value.indexOf(data.value)
      if (index < 0) {
        value.push(data.value);
      } else {
        value.splice(index, 1);
      }
      this.$emit("input", value);
      let item = Object.assign(data, { checked: index < 0 })
      this.$emit("change", item);
    }
  },
  render() {
    const { options, $slots, direction } = this
    let childs = getChild($slots.default)
    if (options && options.length) {
      childs = options.map(option => (
        <Checkbox
          key={option.value}
          value={option.value}
          label={option.label}
          disabled={option.disabled}
        />
      ))
    }
    return (<div class={['k-checkbox-group', { 'k-checkbox-group-vertical': direction == 'vertical' }]}>{childs}</div>)
  }
}
