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
      return {
        fontSize: `${this.size}px`,
        color: this.color
      };
    }
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  }
};
</script>
