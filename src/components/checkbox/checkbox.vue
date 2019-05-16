<template>
  <label :class="wpclasses">
    <span :class="classes">
      <span class="k-checkbox-inner"></span>
      <input type="checkbox" class="k-checkbox-input" :name="name" :disabled="disabled" :checked="checked" @change="change($event)">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>
<script>
import emitter from "@/mixins/emitter";
export default {
  name: "Checkbox",
  mixins: [emitter],
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String },
    label: { type: [String,Number] },
    trueValue: { type: [String, Number, Boolean], default: true },
    falseValue: { type: [String, Number, Boolean], default: false },
    indeterminate: Boolean,
  },
  computed: {
    wpclasses() {
      return [
        "k-checkbox-wp",
        {
          ["k-checkbox-disabled"]: this.disabled
        }
      ];
    },
    classes() {
      return [
        "k-checkbox",
        {
          ["k-checkbox-checked"]: this.checked && !this.indeterminate,
          ["k-checkbox-indeterminate"]: this.indeterminate
        }
      ];
    }
  },
  data() {
    return {
      checked: this.value,
    };
  },
  watch: {
    value(v) {
      this.checked = v
    }
  },
  mounted() {
    this.$on('checkbox-update', this.update)
    this.dispatch('CheckboxGroup', 'checkbox-group-update')
  },
  methods: {
    update(params) {
      this.checked = params.value.indexOf(this.label) >= 0;
    },
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
      this.checked = checked;
      // const value = checked ? this.trueValue : this.falseValue
      this.$emit("input", checked);
      let isgroup = this.$parent.$options.name == 'CheckboxGroup'
      if (isgroup && this.label !== undefined) {
        this.dispatch('CheckboxGroup', 'checkbox-group-change', { value: this.label, checked: checked })
        return;
      }
      this.$emit("change", checked);
    }
  },

};
</script>
