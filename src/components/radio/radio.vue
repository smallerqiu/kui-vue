<template>
  <label :class="wpclasses">
    <span :class="classes">
      <span class="k-radio-inner"></span>
      <input type="radio" class="k-radio-input" :name="name" :disabled="disable" :checked="checked" @change="changed($event)">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>
<script>
import emitter from "@/mixins/emitter";
export default {
  name: "Radio",
  mixins: [emitter],
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String },
    label: { type: [String, Number] }
  },
  computed: {
    wpclasses() {
      return [
        "k-radio-wp", { ["k-radio-disabled"]: this.disable }
      ];
    },
    classes() {
      return [
        "k-radio", { ["k-radio-checked"]: this.checked }
      ];
    }
  },
  data() {
    return {
      checked: this.value,
      disable: this.disabled
    };
  },
  methods: {
    changed(event) {
      if (this.disable) {
        return false;
      }
      const checked = event.target.checked;
      this.checked = checked;
      this.$emit("input", checked);
      if (this.$parent.$options.name == 'RadioGroup') {
        if (this.label !== undefined) {
          this.dispatch('RadioGroup', 'radio-group-change', {
            value: this.label,
          })
          return;
        }
      }
      this.$emit("change", checked);
    }
  },
  watch: {
    disabled(v) {
      this.disable = v
    },
    value(v) {
      this.checked = v;
      if (v !== '' && v !== null && v != undefined)
        this.dispatch('FormItem', 'form-item-change', v)
    },
  }
};
</script>
