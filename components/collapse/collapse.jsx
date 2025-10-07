import { getChild, hasProp } from '../utils/element'
import cloneVNode from '../utils/clone'
import { withInstall } from '../utils/vue'
const Collapse = {
  name: 'Collapse',
  props: {
    value: Array,
    accordion: Boolean,
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
        this.accordion ? value = [] : value.splice(index, 1)
      } else {
        this.accordion ? value = [key] : value.push(key)
      }
      this.currentValue = value
      this.$emit('change', key)
      this.$emit('input', value)
    }
  },
  render() {
    const classes = ['k-collapse', {
      ['k-collapse-sample']: this.sample
    }]
    const children = getChild(this.$slots.default)
    return (<div class={classes}>{
      children.map((child) => {
        let active = this.currentValue.indexOf(child.key) >= 0
        return cloneVNode(child, { props: { active } })
      })
    }</div>)
  }
}
export default withInstall(Collapse)