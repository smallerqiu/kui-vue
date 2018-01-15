<template>
  <li :class="itemClasses" @click="select">
    <slot>{{label}}</slot>
  </li>
</template>
<script>
export default {
  name: "Option",
  props: {
    value: { type: [String, Number], required: true },
    label: { type: [String, Number] },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      selected: false
    };
  },
  computed: {
    itemClasses() {
      return [
        "k-select-item",
        {
          ["k-select-item-selected"]: this.selected,
          ["k-select-item-disabled"]: this.disabled
        }
      ];
    }
  },
  methods: {
    select() {
      if (this.disabled) return;
      this.$parent.select({
        value: this.value,
        label: this.label === undefined ? this.$el.innerHTML : this.label
      });
    }
  }
};
</script>

