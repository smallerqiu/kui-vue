<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Col",
  props: {
    span: [Number, String]
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      let style = {};
      let p = this.$parent.gutter;
      if (p !== 0) {
        style = { paddingLeft: p / 2 + "px", paddingRight: p / 2 + "px" };
      }
      return style;
    },
    classes() {
      return [`k-col`, { [`k-col-${this.span}`]: this.span }];
    }
  }
};
</script>

