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
      const { dot, mark } = this
      return {
        'k-badge-count': !dot && !mark,
        'k-badge-dot': dot,
        'k-badge-mark': mark,
      }
    },
    styles() {
      return { "background-color": this.color || '' }
    },
  },
  render() {
    const { $slots, countText, styles, classes } = this
    const props = {
      class: classes,
      style: styles
    }
    return (
      <div class="k-badge">
        {$slots.default}
        <sub {...props}>{countText}</sub>
      </div >
    )
  }
}; 
