import Checkbox from './checkbox';
import { getChild } from '../_tool/utils'
export default {
  name: "CheckboxGroup",
  props: {
    disabled: Boolean,
    options: Array,
    value: Array,
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
      this.$emit("change", value);
    }
  },
  render() {
    const { options, $slots } = this
    let kid = getChild($slots.default)

    if (options && options.length) {
      kid = options.map(option => (
        <Checkbox 
         key={option.value}
         value={option.value}
         label={option.label}
         disabled={option.disabled}
        />
      ))
    }
    return (<div class="k-checkbox-group">{kid}</div>)
  }
}
