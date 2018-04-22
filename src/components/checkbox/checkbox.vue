<template>
  <label :class="wpclasses">
    <span :class="classes">
      <span class="k-checkbox-inner"></span>
      <input type="checkbox" class="k-checkbox-input" :name="name" :disabled="defaultDisabled" :checked="checked" @change="change($event)">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>
<script>
import emitter from "../../mixins/emitter";
export default {
  name: "Checkbox",
  mixins: [emitter],
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String },
    label: { type: String }
  },
  computed: {
    wpclasses() {
      return [
        "k-checkbox-wp",
        {
          ["k-checkbox-disabled"]: this.defaultDisabled
        }
      ];
    },
    classes() {
      return [
        "k-checkbox",
        {
          ["k-checkbox-checked"]: this.checked
        }
      ];
    }
  },
  data() {
    return {
      defaultDisabled: this.disabled,
      checked: this.value,
      group: false,
    };
  },
  watch: {
    value(v) {
      this.checked = v;
    }
  },
  mounted() {
    this.$on('checkbox-update', this.update)
    // this.dispatch('CheckboxGroup', 'checkbox-group-update')
  },
  methods: {
    update(params) {
      this.checked = params.value.indexOf(this.label) >= 0;
      this.group = params.group
    },
    change(event) {
      if (this.defaultDisabled) {
        return false;
      }

      const checked = event.target.checked;
      this.checked = checked;
      this.$emit("input", checked);

      if (this.group && this.label !== undefined) {
        this.dispatch('CheckboxGroup', 'checkbox-group-change', { value: this.label, checked: this.checked })
      }
      if (!this.group) {
        this.$emit("change", checked);
      }
    }
  },

};
</script>
