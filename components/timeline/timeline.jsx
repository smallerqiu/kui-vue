
export default {
  name: "TimeLine",
  props: {
    mode: { type: String, default: 'left' }
  },
  render() {
    const classes = ['k-timeline', `k-timeline-${this.mode}`]
    return (
      <ul class={classes}>
        {this.$slots.default}
      </ul>
    )
  }
};

