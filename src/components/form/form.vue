<template>
  <div>
    <form autocomplete="off" :class="classes">
      <slot></slot>
    </form>
  </div>
</template>
<script>
import emitter from '../../mixins/emitter'

export default {
  name: "Form",
  mixins: [emitter],
  props: {
    labelAlign: { type: String, default: 'right' },
    model: { type: Object },
    rules: { type: Object },
    labelWidth: { type: [Number, String], default: 80 }
  },
  data() {
    return {
      fields: []
    };
  },
  computed: {
    classes() {
      return [
        "k-form",
        {
          [`k-form-${this.labelAlign}`]: this.labelAlign
        }
      ];
    }
  },
  created() {
    this.$on('form-reset-field', this.resetField)
    this.$on('form-add-field', this.addField)
    this.$on('form-remove-field', this.removeField)
  },
  methods: {
    resetField(key) {
      if (this.model && this.model[key]) {
        let type = Object.prototype.toString.call(this.model[key])
        if (type === '[object Object]') this.model[key] = {}
        else if (type === '[object Array]') this.model[key] = []
        else this.model[key] = ''
      }
    },
    resetFields() {
      // this.broadcast('FormItem', 'form-item-reset')
      this.fields.forEach(child => child.reset())
    },
    removeField(field) {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    },
    addField(field) {
      if (field.prop) {
        field.fieldValue = this.getProp(this.model, field.prop).value
        if (!field.Rules && this.rules) {
          field.Rules = this.getProp(this.rules, field.prop).value
        }
        field.required = field.Rules && field.Rules.filter(field => field.required).length > 0
        this.fields.push(field)
      }
    },
    getProp(model, path) {
      path = path.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '');
      let keys = path.split('.')
      let newModel = model
      let len = keys.length - 1
      for (let i = 0; i < len; i++) {
        let key = keys[i]
        if (key in newModel) {
          newModel = newModel[key]
        } else {
          throw new Error('请传入正确的prop值')
        }
      }
      return {
        model: newModel,
        key: keys[len],
        value: newModel[keys[len]]
      };
    },
    validate(callback) {
      var isValid = true
      this.fields.forEach(field => {
        field.validates(null, valid => {
          if (!valid) isValid = valid
        })
      })
      if (typeof callback == 'function') {
        callback(isValid)
      }
    },
    validateField(key) {
      let field = this.fields.filter(x => x.prop == key)[0]
      if (field) {
        field.validates()
      }
    }
  }
};
</script>
