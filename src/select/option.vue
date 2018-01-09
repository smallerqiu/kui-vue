<template>
   <li :class="itemClasses" @click="select"><slot>{{showLabel}}</slot></li>
</template>
<script>
export default {
  name: "Option",
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    }
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
    },
    showLabel() {
      return this.label ? this.label : this.value;
    }
  },
  methods: {
    select() {
      if (this.disabled) return;
      this.$parent.select({ value: this.value, label: this.showLabel });
    }
  }
};
</script>

