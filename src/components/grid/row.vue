<template>
  <div class="k-row" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Row",
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + "px",
          marginRight: this.gutter / -2 + "px"
        };
      }
      return style;
    }
  }
};
</script>

