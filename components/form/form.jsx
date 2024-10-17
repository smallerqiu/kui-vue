
import cloneVNode from '../_tool/clone';
import { getChild } from '../_tool/utils'
export default {
  name: "Form",
  props: {
    layout: {
      default: 'horizontal',
      validator(value) {
        return ["horizontal", "vertical", "inline"].indexOf(value) >= 0;
      }
    },
    model: { type: Object },
    name: String,
    labelCol: Object,
    wrapperCol: Object,
    rules: { type: Object, default: () => { } },
    size: {
      default: 'default',
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      }
    },
    theme: String,
    shape: String,
    disabled: Boolean
  },
  provide() {
    return {
      Form: this,
    }
  },
  watch: {
    model(val, Oval) {
      this.validate()
    }
  },
  data() {
    return {
      FormItems: []
    }
  },
  render() {
    let { layout, size, labelCol = {}, wrapperCol = {}, name } = this
    const classes = ["k-form",
      {
        [`k-form-${layout}`]: layout,
        'k-form-lg': size == 'large',
        'k-form-sm': size == 'small',
      }
    ];
    const childs = getChild(this.$slots.default)
    return (
      <form autocomplete="off" class={classes} ref="form" id={name} onSubmit={this.submit} onReset={this.reset}>
        {
          childs.map(child => {
            labelCol = (child.componentOptions && child.componentOptions.propsData.labelCol) || labelCol
            wrapperCol = (child.componentOptions && child.componentOptions.propsData.wrapperCol) || wrapperCol
            return cloneVNode(child, {
              props: { labelCol, wrapperCol },
              on: {
                collect: ({ context, push }) => {
                  push ? this.FormItems.push(context) :
                    this.FormItems.splice(this.FormItems.indexOf(context), 1)
                  if (push && context.prop && this.model) {
                    this.testProp(context.prop)
                  }
                }
              }
            })
          })
        }
      </form >
    )
  },
  methods: {
    setValue(prop, value = '') {
      let keys = prop.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
      let model = this.model || {}
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (key in model) {
          if (i == keys.length - 1 || keys.length == 1) {
            let val = model[key]
            if (typeof val === 'boolean') {
              model[key] = value || false
            } else if (Array.isArray(val)) {
              model[key] = value || []
            } else {
              model[key] = value
            }
            // console.log(model[key],key)
          }
          model = model[key]
        }
      }
      this.$emit('change', this.model)
    },
    reset() {
      this.FormItems.forEach(item => {
        let { prop } = item
        if (prop) {
          this.setValue(prop)
        }
        item.valid = true
      })
    },
    test(key) {
      //提供外部单独验证
      let item = this.FormItems.filter(item => item.prop == key)[0]
      if (item) {
        let rules = item.rules || (this.rules || {})[item.prop]
        if (rules) {
          return item.validate(rules)
        }
      }
    },
    testProp(path) {
      let keys = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
      let model = this.model || {}
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        if (key in model) {
          model = JSON.parse(JSON.stringify(model[key]))
        } else {
          // console.warn('规则验证需要传入正确的prop值:' + path)
          // throw new Error('请传入正确的prop值:' + path)
        }
      }
      return model == this.model || JSON.stringify(model) == '{}' ? null : model;
    },
    submit(e) {
      e && e.preventDefault()
      this.validate((valid) => {
        let model = JSON.parse(JSON.stringify(this.model || '{}'))
        this.$emit('submit', { valid, model })
      })
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