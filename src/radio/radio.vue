<template>
  <label :class="wpclasses">
    <span :class="classes">
      <span class="k-radio-inner"></span>
      <input type="radio" class="k-radio-input" :name="name" :disabled="disabled" :checked="checked" @change="changed($event)">
    </span>
    <slot>{{label}}</slot>
  </label>
</template>
<script>
import utils from "../utils";
export default {
  name: "Radio",
  props: {
    value: { type: [String, Number, Boolean], default: false },
    disabled: { type: Boolean, default: false },
    name: { type: String },
    label: { type: String }
    // onchange: { type: Function, default: () => {} }
  },
  computed: {
    wpclasses() {
      return [
        "k-radio-wp",
        {
          ["k-radio-disabled"]: this.disabled
        }
      ];
    },
    classes() {
      return [
        "k-radio",
        {
          ["k-radio-checked"]: this.checked
        }
      ];
    }
  },
  data() {
    return {
      checked: false,
      group: false,
      parent: utils.findParent(this, "RadioGroup")
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
    changed(event) {
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
    }
  }
};
</script>
