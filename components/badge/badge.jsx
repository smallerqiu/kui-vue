export default {
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    mark: Boolean,
    color: String,
    maxCount: [String, Number]
  },
  render() {
    const { $slots, maxCount, count, dot, color, mark } = this
    let countText = null
    if (dot) {
      countText = ''
    } else if (count !== undefined && isNaN(parseInt(count))) {
      countText = count
    } else if (maxCount) {
      countText = ~~count >= ~~maxCount ? (maxCount + '+') : count
    } else if (count !== undefined && maxCount === undefined) {
      countText = count
    }
    const classes = {
      'k-badge-count': !dot && !mark,
      'k-badge-dot': dot,
      'k-badge-mark': mark,
    }
    const props = {
      class: classes,
      style: { backgroundColor: color }
    }
    const subNode = (countText !== null || dot) ? <sub {...props}>{countText}</sub> : null
    return (
      <div class="k-badge">
        {$slots.default}
        {subNode}
      </div >
    )
  }
}; 
