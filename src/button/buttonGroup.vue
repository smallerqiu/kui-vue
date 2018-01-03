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
          ["k-btn-group-circle"]: this.circle
        }
      ];
    }
  }
};
</script>

