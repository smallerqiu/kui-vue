import cloneVNode from '../_tool/clone';
import { getChild } from '../_tool/utils'
export default {
  name: "Form",
  props: {
    labelAlign: { type: String, default: 'right' },
    model: { type: Object },
    layout: Object,
    // value: Object,
    rules: { type: Object, default: () => { } },
    // labelWidth: { type: Number, default: 80 },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
  },
  // model: {
  //   prop: 'model',
  //   // event: 'change'
  //   event: 'input'
  // },
  provide() {
    return {
      Form: this,
      collectFormItems: (context, type) => {
        const items = this.FormItems
        type === 'delete' ? items.splice(items.indexOf(context), 1) : items.push(context)
        if (type === 'add' && context.prop && this.model) {
          this.testProp(context.prop)
        }
      }
    }
  },
  created() {
    this.clearing = false
    this.FormItems = new Array()
  },
  render() {
    const { labelAlign, size, layout } = this
    const classes = ["k-form",
      {
        [`k-form-label-${labelAlign}`]: labelAlign,
        'k-form-lg': size == 'large',
        'k-form-sm': size == 'small',
      }
    ];
    let { labelCol = {}, wrapperCol = {} } = layout || {}
    const childs = getChild(this.$slots.default)
    return (
      <form autocomplete="off" class={classes} ref="form">
        {
          childs.map(child => {
            labelCol = child.componentOptions.propsData.labelCol || labelCol
            wrapperCol = child.componentOptions.propsData.wrapperCol || wrapperCol
            return cloneVNode(child, { props: { labelCol, wrapperCol } },)
          })
        }
        {/* {this.$slots.default} */}
      </form>
    )
  },
  methods: {
    clearObject(model) {
      if (!model) return;
      for (let key in model) {
        let value = model[key]
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (item !== null && typeof item == 'object') {
              this.clearObject(item)
            } else {
              value.splice(index)
            }
          })
        } else if (typeof value === 'boolean') {
          model[key] = false
        } else if (model !== null && typeof model == 'object') {
          model[key] = ''
        }
      }
    },
    reset() {
      // this.$refs.form.reset()
      let model = this.model
      this.clearing = true

      this.clearObject(model)
      this.$nextTick(e => {
        this.FormItems.forEach((item) => {
          item.reset()
        })
        this.clearing = false
      })

    },
    testProp(path) {
      let keys = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
      let model = this.model
      let len = keys.length - 1
      if (len <= 0 && this.model[path] === undefined) {
        throw new Error('请传入正确的prop值:' + path)
      }
      for (let i = 0; i < len; i++) {
        let key = keys[i]
        if (key in model) {
          model = model[key]
        } else {
          throw new Error('请传入正确的prop值:' + path)
        }
      }
      // return {
      //   model,
      //   key: keys[len],
      //   value: model[keys[len]]
      // };
    },
    test(key) {
      let item = this.FormItems.filter(item => item.prop == key)[0]
      if (item) {
        let rules = item.rules || (this.rules || {})[item.prop]
        if (rules) {
          return item.validate(rules)
        }
      }
    },
    validate(callback) {
      var result = true
      this.FormItems.forEach((item) => {
        let rules = item.rules || (this.rules || {})[item.prop]
        if (rules) {
          let valid = item.validate(rules)
          if (!valid) result = valid
        }
      })

      if (typeof callback == 'function') {
        callback(result)
      }
    },
  }
}