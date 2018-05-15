<template>
  <span :class="classes" @click="change">
    <span class="k-switch-inner">
      <span>{{checked?trueText:falseText}}</span>
    </span>
    <span class="k-switch-button"></span>
  </span>
</template>
<script>
export default {
  name: "kSwitch",
  props: {
    value: { type: Boolean, default: false },
    type: { type: String },
    disabled: { type: Boolean, default: false },
    trueText: { type: String },
    falseText: { type: String }
  },
  data() {
    return {
      checked: this.value
    };
  },
  watch: {
    value(val) {
      this.checked = val;
    }
  },
  computed: {
    classes() {
      return [
        "k-switch",
        {
          ["k-switch-checked"]: this.checked,
          ["k-switch-disabled"]: this.disabled,
          [`k-switch-${this.type}`]: !!this.type
        }
      ];
    }
  },
  methods: {
    change(e) {
      e.preventDefault();

      if (this.disabled) {
        return false;
      }
      const checked = !this.checked
      this.checked = checked
      this.$emit("input", checked);
      this.$emit("change", checked);
    }
  }
};
</script>

