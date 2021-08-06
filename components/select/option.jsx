import { isNotEmpty } from "../_tool/utils";
import Icon from '../icon'
export default {
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: Boolean
  },
  inject: {
    Select: { default: null }
  },
  methods: {
    select() {
      let { value, label, disabled, Select, $slots } = this
      if (disabled) return;
      value = isNotEmpty(value) ? value : this.$vnode.key
      if (Select) {
        label = label || $slots.default
        Select.change({ label, value })
      }
    },
  },
  render() {
    let { disabled, Select, value, label, $slots, select } = this
    value = isNotEmpty(value) ? value : this.$vnode.key
    let selected = false;
    label = label || $slots.default
    let iconNode = null
    if (Select) {
      /*  let _value = Select.currentValue
       if (!hasProp(Select, 'value')) {
         _value = Select.currentValue
       }
       if (Select.multiple) {
         selected = _value.indexOf(value) !== -1
 
         iconNode = <Icon type="checkmark" />
       } else {
         selected = _value === value
       } */
      let { currentValue, multiple } = Select
      if (multiple) {
        selected = currentValue.indexOf(value) >= 0
        iconNode = <Icon type="checkmark" />
      } else {
        selected = currentValue === value
      }
    }
    const classes = [
      "k-select-item",
      {
        ["k-select-item-selected"]: selected,
        ["k-select-item-disabled"]: disabled
      }
    ];
    const childs = <span>{label}{iconNode}</span>

    return (
      <li class={classes} onClick={select}>{childs}</li>
    )
  }
}