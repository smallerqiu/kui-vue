<template>
  <div class="k-badge">
    <slot></slot>
    <sub :class="classes" :style="styles">{{countText}}</sub>
  </div>
</template>
<script>
export default {
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    mark: Boolean,
    color: String,
    maxCount: [String, Number]
  },
  watch: {
    count(v) {
      this.setText()
    }
  },
  data() {
    return {
      countText: ''
    }
  },
  mounted() {
    this.setText()
  },
  methods: {
    setText() {
      let { maxCount, count, dot } = this
      if (maxCount) {
        this.countText = ~~count >= ~~maxCount ? (maxCount + '+') : count
      } else if (!dot) {
        this.countText = count
      }
    }
  },
  computed: {
    classes() {
      return {
        'k-badge-count': !this.dot && !this.mark,
        'k-badge-dot': this.dot,
        'k-badge-mark': this.mark,
      }
    },
    styles() {
      return this.color ? { "background-color": this.color } : {};
    },
  },
};
</script>
