<template>
   <span class="k-badge">
      <slot></slot>
      <sub class="k-badge-count" v-if="!dot" @click="onClick" :style="styles">{{getCount}}</sub>
      <sub class="k-badge-dot" v-if="dot" :style="styles"></sub>
   </span>
</template>
<script>
export default {
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    color: String,
    maxCount: [String, Number]
  },
  computed: {
    styles() {
      return this.color ? { "background-color": this.color } : {};
    },
    getCount() {
      return this.maxCount > this.count ? `${this.maxCount}+` : this.count;
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
