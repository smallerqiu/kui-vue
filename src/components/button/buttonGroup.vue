<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
  props: {
    mini: Boolean,
    large: Boolean,
    circle: Boolean
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      return [
        "k-btn-group",
        {
          ["k-btn-group-mini"]: this.mini,
          ["k-btn-group-lg"]: this.large && !this.mini,
          ["k-btn-group-circle"]: this.circle
        }
      ];
    }
  }
};
</script>

