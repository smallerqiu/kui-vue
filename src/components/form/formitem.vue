<template>
  <div :class="classes">
    <label :style="labelStyles" class="k-form-item-label" v-if="this.label">{{label}}</label>
    <div class="k-form-item-content" :style="contentStyles">
      <slot></slot>
      <transition name="dropdown">
        <div class="k-form-item-error-tip" v-if="!valid">{{errorTip}}</div>
      </transition>
    </div>
  </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
  name: "FormItem",
  mixins: [emitter],
  props: {
    label: String,
    rules: { type: Array },
    prop: String,
    labelWidth: [String, Number]
  },
  data() {
    return {
      form: this.getParent('Form'),
      formitem: this.getParent('FormItem'),
      required: false,
      valid: true,
      fieldValue: '',
      errorTip: '',
      Rules: this.rules,
      width: this.labelWidth
    };
  },
  computed: {
    classes() {
      return [
        "k-form-item",
        {
          "k-form-item-required": this.required,
          "k-form-item-error": !this.valid
        }
      ];
    },
    labelStyles() {
      let formitem = this.getParent('FormItem')
      let width = this.width || (this.form && this.form.labelWidth || 0);
      return width && !formitem ? { width: `${width}px` } : {};
    },
    contentStyles() {
      let formitem = this.getParent('FormItem')
      let width = this.width || (this.form && this.form.labelWidth || 0);
      return width && this.form.labelAlign != 'top' && !formitem ? { marginLeft: `${width}px` } : {};
    }
  },
  created() {
    this.$on('form-item-change', this.change)
    this.$on('form-item-blur', this.blur)
    this.$on('form-item-reset', this.reset)
  },
  mounted() {
    this.prop && this.dispatch('Form', 'form-add-field', this)
  },
  beforeDestroy() {
    this.dispatch('Form', 'form-remove-field', this)
  },
  methods: {
    change(value) {
      //对于select，checkbox ，radio 类型传值
      this.fieldValue = Object.prototype.toString.call(value) == '[object Object]' ? value.field : value
      this.validates('change')
    },
    blur(value) {
      //目前只对于input ，textarea 有blur 事件
      this.fieldValue = value
      this.validates('blur')
    },
    reset() {
      if (this.prop) {
        this.dispatch('Form', 'form-reset-field', this.prop)
        this.valid = true
        // let prop = this.form.getProp(this.form.model, this.prop)
        if (Array.isArray(this.fieldValue)) {
          // prop.model[prop.key] = []
          this.fieldValue = []
        } else {
          // prop.model[prop.key] = ''
          this.fieldValue = ''
        }
      }
    },
    test(rule, trigger) {
      let valid = true
      let message = rule.message || 'This field must required'
      let type = Object.prototype.toString.call(this.fieldValue)
      if (this.fieldValue === '' && type == '[object String]' && rule.required) {
        valid = false
      } else if (this.fieldValue.length == 0 && type == '[object Array]' && rule.required) {
        valid = false
      } else if (rule.min && this.fieldValue.length < rule.min) {
        valid = false
        message = rule.message || (type == '[object Array]' ? `Choose at least ${rule.min} item` : `Introduce no less than ${rule.min} words`)
      } else if (rule.max && this.fieldValue.length > rule.max) {
        valid = false
        message = rule.message || (type == '[object Array]' ? `Choose ${rule.max} items at best` : `Introduce no more than ${rule.max} words`)
      } else if (rule.pattner) {
        valid = rule.pattner.test(this.fieldValue)
        message = rule.message || 'Incorrect email format'
      } else if (rule.type == 'mail') {
        valid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.fieldValue)
        message = rule.message || 'Incorrect email format'
      } else if (rule.type == 'mobile') {
        valid = /^[1][3,4,5,7,8][0-9]{9}$/.test(this.fieldValue)
        message = rule.message || 'Incorrect mobile format'
      } else if (rule.type == 'number') {
        valid = typeof value === 'number' && isNaN(value);
        message = rule.message || 'Incorrect number format'
      } else if (rule.validator && typeof rule.validator == 'function') {
        rule.validator(this.rule, this.fieldValue, error => {
          if (error) {
            valid = false
            message = error.message
          }
        })
      }

      this.valid = valid
      this.errorTip = message
      return valid
    },
    validates(trigger, callback = function () { }) {
      if (this.prop && this.Rules && this.Rules.length) {
        let valid = true
        this.Rules.forEach(rule => {
          trigger = !trigger ? rule.trigger || 'blur' : trigger
          if (rule.trigger == trigger) {
            if (!valid) {
              callback(valid)
              return false;
            }
            valid = this.test(rule, trigger)
            callback(valid)
          }
        })
      }
    }
  }
};
</script>

