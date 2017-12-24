<template>
  <label class="k-checkbox-wp">
    <span :class="classes">
      <span class="k-checkbox-inner"></span>
      <input type="checkbox" class="k-checkbox-input" :name="name" :disabled="disabled" :checked="checked" @change="change($event)">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>
<script>
import utils from "../utils";
export default {
  name: "Checkbox",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String },
    label: { type: String }
  },
  computed: {
    classes() {
      return [
        "k-checkbox",
        {
          ["k-checkbox-checked"]: this.checked,
          ["k-checkbox-disabled"]: this.disabled
        }
      ];
    }
  },
  data() {
    return {
      checked: false,
      group: false,
      parent: utils.findParent(this, "CheckboxGroup")
    };
  },
  mounted() {
    if (this.parent) this.group = true;
    if (!this.group) {
      this.checked = this.value;
    } else {
      this.parent.update();
    }
  },
  methods: {
    change(event) {
      
      if (this.disabled) {
        return false;
      }
      
      const checked = event.target.checked;
      this.checked = checked;
      this.$emit("input", checked);

      if (this.group && this.label !== undefined) {
        this.parent.change({
          value: this.label,
          checked: this.checked
        });
      }
      if (!this.group) {
        // this.onchange(checked)
        this.$emit("change", checked);
      }
    }
  },
  watch: {
    value(v) {
      this.checked = v;
    }, 
  },
};
</script>
