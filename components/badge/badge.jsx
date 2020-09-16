export default {
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    color: String,
    status: {
      type: String,
      // validator: (value) => {
      //   ['default', 'success', 'error', 'warning'].indexOf(value) > -1
      // },
      default: 'default'
    },
    text: String,
    maxCount: { type: Number, default: 99 }
  },
  render() {
    const { $slots, maxCount, count, dot, color, status, text } = this
    let innerText = null, statusNode = [];

    if (typeof count === 'number' && count !== 0) {
      innerText = count > maxCount ? maxCount + '+' : count
    } else if (typeof count === 'string') {
      innerText = count
    } else if (status && !dot && !$slots.default) {
      const props = {
        class: ['k-badge-status-dot', {
          [`k-badge-status-${status}`]: status,
          [`k-badge-status-${color}`]: color && !/^#/.test(color)
        }],
        style: {
          backgroundColor: /^#/.test(color)?color:null
        }
      }
      statusNode.push(<span {...props}></span>)
      if (text)
        statusNode.push(<span span class="k-badge-status-text">{text}</span >)
    }

    const props = {
      class: {
        'k-badge-count': count !== undefined,
        'k-badge-dot': dot,
        [`k-badge-${status}`]: status,
      },
      style: { backgroundColor: color }
    }
    const supNode = (innerText !== null || dot) ? <sup {...props}>{innerText}</sup> : null
    return (
      <div class="k-badge">
        {$slots.default}
        {supNode}
        {statusNode}
      </div >
    )
  }
}; 
