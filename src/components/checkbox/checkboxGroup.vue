<template>
  <div class="k-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
import emitter from "@/mixins/emitter";
export default {
  name: "CheckboxGroup",
  mixins: [emitter],
  props: {
    disabled: Boolean,
    value: { type: Array, default: () => [] },
  },
  data() {
    return {
      childrens: []
    };
  },
  watch: {
    value(v) {
      this.update();
    },
    disabled(v) {
      this.$children.map(child => {
        child.disable = v
      })
    },
  },
  mounted() {
    this.update();
    this.$on('checkbox-group-update', this.update)
    this.$on('checkbox-group-change', this.change)
    if (this.disabled) {
      this.$children.map(child => {
        child.disable = this.disabled
      })
    }
  },
  methods: {
    update() {
      let value = this.value
      this.broadcast('Checkbox', 'checkbox-update', {
        value: value,
      })
      if (value.length)
        this.dispatch('FormItem', 'form-item-change', { field: value })
    },
    change(data) {
      let length = this.value.indexOf(data.value);
      if (data.checked && length < 0) {
        this.value.push(data.value);
      } else {
        this.value.splice(length, 1);
      }
      this.$emit("input", this.value);
      this.$emit("change", this.value);
    }
  }
};
</script>
