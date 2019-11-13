import { hasProp } from "../_tool/utils";
import Icon from '../icon'
export default {
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: { type: Boolean, default: false }
  },
  inject: {
    groupContext: { default: null }
  },
  methods: {
    select() {
      let { value, label, disabled, groupContext, $slots } = this
      if (disabled) return;
      if (groupContext) {
        label = label || $slots.default
        // if (groupContext.multiple) {

        // } else {
        groupContext.change({ label, value })
        // }
      }
    },
    query(query) {
      // query 转义查询里面的正则
      let label = this.label === undefined ? this.$el.innerHTML : this.label
      let parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
      this.visible = new RegExp(parsedQuery, "i").test(label);
    }
  },

  render() {
    let { disabled, groupContext, value, label, $slots, select } = this
    let selected = false;
    label = label || $slots.default
    let iconNode = null
    if (groupContext) {
      let _value = groupContext.value
      if (!hasProp(groupContext, 'value')) {
        _value = groupContext.currentValue
      }
      if (groupContext.multiple) {
        selected = _value.split(',').indexOf(value) !== -1

        iconNode = <Icon type="md-checkmark" />
      } else {
        selected = _value === value
      }
    }
    const classes = [
      "k-select-item",
      {
        ["k-select-item-selected"]: selected,
        ["k-select-item-disabled"]: disabled
      }
    ];
    const kid = <span>{label}{iconNode}</span>
    return (
      <li class={classes} onClick={select}>{kid}</li>
    )
  }
}