<template>
  <div class="k-radio-group">
    <slot></slot>
  </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
  name: "RadioGroup",
  mixins: [emitter],
  props: {
    value: { type: [String, Number], default: "" },
    disabled: Boolean,
    mini: Boolean
  },
  watch: {
    value(v) {
      this.update({ value: this.value, });
    },
  },
  mounted() {
    this.update({ value: this.value, group: true });
    this.$on('radio-group-change', this.change)

  },
  methods: {
    update(data) {
      // console.log(this.disabled)
      this.$children.map(child => {
        let disabled = child.disabled || this.disabled
        let name = child.$options.name
        if (name == 'RadioButton') {
          child.disabled = disabled
          child.mini = this.mini
          child.actived = data.value == child.label
        }
        if (name == 'Radio') {
          child.disable = disabled
          child.checked = data.value == child.label
        }
        child.group = true
      })
    },
    change(data) {
      this.$emit("input", data.value);
      this.$emit("change", data.value);
      this.update(data);
      this.dispatch('FormItem', 'form-item-change', data.value)
    }
  }
};
</script>
