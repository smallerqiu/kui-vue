<template>
  <i :class="classes" :style="styles" @click="click"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: [String]
  },
  computed: {
    classes() {
      return `k-ion-${this.type}`;
    },
    styles() {
      let style = {};
      if (this.size) {
        style["font-size"] = `${this.size}px`;
      }
      if (this.color) {
        style.color = this.color;
      }
      return style;
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
};
</script>
