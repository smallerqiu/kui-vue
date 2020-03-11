import { getChild, hasProp } from '../_tool/utils'
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
    change(name) {
      let value = this.currentValue
      let index = value.indexOf(name)

      if (index >= 0) {
        this.accrodion ? value = [] : value.splice(index, 1)
      } else {
        this.accrodion ? value = [name] : value.push(name)
      }
      this.currentValue = value
      this.$emit('change', name)
      this.$emit('input', value)
    }
  },
  render() {
    const classes = ['k-collapse', {
      ['k-collaplse-sample']: this.sample
    }]
    const kid = getChild(this.$slots.default)
    return (<div class={classes}>{kid}</div>)
  }
}