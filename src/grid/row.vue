<template>
   <div class="k-row" :style="styles">
      <slot></slot>
   </div>
</template>
<script>
export default {
  name: "Row",
  props: {
    padding: {
      type: [Number,String],
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      let style = {};
      if (this.padding !== 0) {
        style = {
          marginLeft: this.padding / -2 + "px",
          marginRight: this.padding / -2 + "px"
        };
      }
      return style;
    }
  }
};
</script>

