import { getChild, hasProp } from '../_tool/utils'
import cloneVNode from '../_tool/clone'
export default {
  name: 'Collapse',
  props: {
    value: Array,
    accrodion: Boolean,
    sample: Boolean
  },
  provide() {
    return {
      Collapse: this
    }
  },
  data() {
    return {
      currentValue: (!hasProp(this, 'value')) ? [] : this.value
    }
  },
  watch: {
    value(v) {
      if (v !== undefined && v !== null && v !== '')
        this.currentValue = v
    }
  },
  methods: {
    change(key) {
      if (!key) return;
      let value = this.currentValue
      let index = value.indexOf(key)

      if (index >= 0) {
        this.accrodion ? value = [] : value.splice(index, 1)
      } else {
        this.accrodion ? value = [key] : value.push(key)
      }
      this.currentValue = value
      this.$emit('change', key)
      this.$emit('input', value)
    }
  },
  render() {
    const classes = ['k-collapse', {
      ['k-collaplse-sample']: this.sample
    }]
    const childs = getChild(this.$slots.default)
    return (<div class={classes}>{
      childs.map((child) => {
        let actived = this.currentValue.indexOf(child.key) >= 0
        return cloneVNode(child, { props: { actived } })
      })
    }</div>)
  }
}