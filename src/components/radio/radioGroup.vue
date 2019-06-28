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
  data() {
    return {
      childs: []
    }
  },
  watch: {
    value(v) {
      this.update({ value: v, });
    },
  },
  mounted() {
    this.update({ value: this.value, group: true });
    this.$on('radio-group-change', this.change)
  },
  methods: {
    update(data) {
      let value = data.value
      if (value !== '' && value !== null && value != undefined)
        this.dispatch('FormItem', 'form-item-change', value)
      this.$children.map(child => {
        let disabled = child.disabled || this.disabled
        let name = child.$options.name
        if (name == 'RadioButton') {
          child.disabled = disabled
          child.mini = this.mini
          child.actived = value == child.label
        }
        if (name == 'Radio') {
          child.disable = disabled
          child.checked = value == child.label
        }
      })
    },
    change(data) {
      let value = data.value
      this.$emit("input", value);
      this.$emit("change", value);
      this.update(data);

    }
  }
};
</script>
