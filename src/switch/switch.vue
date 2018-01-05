<template>
  <span :class="classes" @click="change">
    <input type="hidden" v-model="checked">
    <span class="k-switch-inner">
      <span v-if="checked">{{trueText}}</span>
      <span v-if="!checked">{{falseText}}</span>
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
      checked: this.value,
      text: ""
    };
  },
  watch: {
    value(val) {
      this.checked = val;
    }
  },
  computed: {
    // styles() {
    //   return this.checked
    //     ? { left: `${this.$refs.main.offsetWidth - 22}px` }
    //     : {};
    // },
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
    change() {
      if (this.disabled) {
        return false;
      }
      this.checked = !this.checked;
      this.$emit("input", this.checked);
      this.$emit("change", this.checked);
      this.text = this.checked ? this.trueText : this.falseText;
    }
  }
};
</script>

