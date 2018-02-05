<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: "Menu",
  props: {
    theme: { type: String, default: "light" },
    mode: { type: String, default: "vertical" },
    activeName: String
  },
  data() {
    return {
      activeIndex: this.activeName,
      items:[],
      submenus:[]
    };
  },
  computed: {
    classes() {
      return [
        "k-menu",
        {
          [`k-menu-${this.theme}`]: this.theme,
          [`k-menu-${this.mode}`]: this.mode
        }
      ];
    }
  },
  watch: {
    activeIndex(val) {
      // this.$emit("on-select", name);
    }
  },
  mounted() {
  
  }
};
</script>