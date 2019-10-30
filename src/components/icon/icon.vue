<template>
  <i :class="classes" :style="styles" @click="click"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: [String],
    spin: Boolean
  },
  computed: {
    classes() {
      return [`k-ion-${this.type}`, { 'k-load-loop': this.spin }];
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
