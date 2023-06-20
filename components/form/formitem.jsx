import { Row, Col } from '../grid'
import cloneVNode from '../_tool/clone';
import { getChild, isVnode } from '../_tool/utils'

export default {
  name: "FormItem",
  props: {
    label: String,
    prop: String,
    labelCol: Object,
    wrapperCol: Object,
    rules: [Array, Object]
  },
  provide() {
    return {
      FormItem: this
    }
  },
  inject: {
    FormItem: { default: null },
    Form: { default: () => { } },
  },
  data() {
    return {
      valid: true,
      message: '',
    };
  },
  beforeDestroy() {
    this.$emit('collect', { context: this, push: false })
  },
  created() {
    //valid prop
    if (this.prop) {
      this.$emit('collect', { context: this, push: true })
    }
  },

  render() {
    let { label, Form, prop, valid, wrapperCol = {}, labelCol = {} } = this
    const rules = this.rules || (Form.rules || {})[prop] || []
    const required = rules.constructor === Object ? rules.required : rules.filter(r => r.required).length > 0

    const classes = [
      "k-form-item",
      {
        "k-form-item-required": required,
        "k-form-item-error": !valid
      }
    ]
    let labelProp, wrapperProp;
    if (Form.layout == 'vertical') {
      delete wrapperCol.offset
    }
    if (Form.layout != 'inline') {
      labelProp = { props: { ...labelCol } }
      wrapperProp = { props: { ...wrapperCol } }
    }

    const childs = getChild(this.$slots.default)
    let id = null
    if (Form.name && prop) {
      id = `${Form.name || `form_` + this._uid}_${prop}`
    }
    return (
      <Row class={classes} type="flex">
        {
          label ? <Col class="k-form-item-label"  {...labelProp}>
            <label for={id}>{label}</label>
          </Col>
            : null
        }
        <Col {...wrapperProp}>
          <div class="k-form-item-content">
            {
              childs.map(child => {
                if (isVnode(child)) {
                  const tag = child.componentOptions ? child.componentOptions.tag : child.tag
                  const value = prop ? this.Form.testProp(prop) : ''
                  const size = (child.componentOptions && child.componentOptions.propsData.size) || this.Form.size
                  const theme = (child.componentOptions && child.componentOptions.propsData.theme) || this.Form.theme
                  const shape = (child.componentOptions && child.componentOptions.propsData.shape) || this.Form.shape
                  const props = {
                    props: { id, size },
                    on: {}
                  }
                  if (theme) {
                    props.props.theme = theme
                  }
                  if (shape) {
                    props.props.shape = shape
                  }
                  if (prop) {
                    if (['Radio', 'Checkbox', 'Switch', 'k-switch', 'k-radio', 'k-checkbox'].indexOf(tag) > -1) {
                      props.props.checked = value || false
                    } else {
                      props.props.value = value
                    }
                    props.on = {
                      input: (value) => {
                        if (tag) {
                          // if (['Select', 'k-select'].indexOf(tag) > -1) {
                          //   value = value
                          // }
                          // if (['Radio', 'k-radio', 'Checkbox', 'k-checkbox'].indexOf(tag) > -1) {
                          //   value = value.target.checked
                          // }
                          // if (['Input', 'k-input', 'TextArea', 'k-textarea'].indexOf(tag) > -1) {
                          //   value = value
                          // }
                          this.Form.setValue(prop, value)
                          this.testValue()
                        }
                      },
                    }
                  }
                  if (['Input', 'k-input', 'TextArea', 'k-textarea'].indexOf(tag) > -1) {
                    props.on.blur = (value) => {
                      value = value.target.value
                      this.testValue()
                    }
                  }
                  if (['FormItem', 'k-form-item'].indexOf(tag) > -1) {
                    props.on.collect = (e) => {
                      this.$emit('collect', e)
                    }
                  }
                  return cloneVNode(child, props)
                } else {
                  return child
                }
              })
            }
            <transition name="k-form-item-fade">
              {!valid ? <div class="k-form-item-error-tip">{this.message}</div> : null}
            </transition>
          </div>
        </Col>
      </Row>
    )
  },
  methods: {
    testValue(trigger) {
      if (this.prop) {
        const rules = this.rules || (this.Form.rules || {})[this.prop]
        rules && this.validate(rules, trigger)
      }
    },
    test(rule) {
      let { valid, prop } = this
      const itemValue = this.Form.testProp(prop)
      let message = rule.message
      // todo：
      // if (trigger == 'blur' && rule.trigger !== trigger) {
      //   return;
      // }
      if (rule.required) {
        valid = Array.isArray(itemValue) ? itemValue.length > 0 : (itemValue !== null && itemValue !== undefined && itemValue !== '' && itemValue !== false)
        message = message || 'This field is required'
      } else {
        //valid custom pattern
        if (rule.pattern) {
          valid = rule.pattern.test(itemValue)
        }
        //valid type
        else if (rule.type) {
          switch (rule.type) {
            case 'mail':
              valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(itemValue)
              message = message || 'Incorrect email format'
              break;
            case 'mobile':
              valid = /^[1][3-9][0-9]{9}$/.test(itemValue)
              message = message || 'Incorrect mobile phone number format'
              break;
            case 'number':
              // valid = typeof itemValue === 'number' && !isNaN(itemValue)
              valid = /^(-?\d+)(\.\d+)?$/.test(itemValue)
              message = message || 'Incorrect number format'
              // let { min, max } = rule
              // if (min !== undefined && min !== null && min !== '') {
              //   valid = itemValue <= min
              // }
              break;
            default:
              break;

          }
        }
        //valid custom validator
        else if (typeof rule.validator === 'function') {
          rule.validator(rule, itemValue, error => {
            valid = error === undefined
            if (error) {
              message = error.message
            }
          })
        }
        //valid length (min or max)
        else if (rule.min !== undefined || rule.max !== undefined) {
          const _type = typeof itemValue
          //min
          if (rule.min !== undefined) {
            if (Array.isArray(itemValue)) {
              valid = itemValue.length >= rule.min
            } else if (_type === 'string') {
              valid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min
            } else if (_type === 'number') {
              valid = itemValue >= rule.min
            }
          }

          //max
          if (rule.max !== undefined && valid) {
            if (Array.isArray(itemValue)) {
              valid = itemValue.length <= rule.max
            } else if (_type === 'string') {
              valid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max
            } else if (_type === 'number') {
              valid = itemValue <= rule.max
            }
          }
          message = message || 'Incorrect length'
        }
      }

      this.message = message
      this.valid = valid
      return valid
    },
    validate(rules) {
      if (rules.constructor === Object) return this.test(rules)
      // 有 required 排前面
      rules = rules.sort((a, b) => a.required ? -1 : 0)
      for (let i = 0; i < rules.length; i++) {
        let valid = this.test(rules[i])
        if (!valid) {
          break;
        }
      }
      return this.valid
    }
  }
}