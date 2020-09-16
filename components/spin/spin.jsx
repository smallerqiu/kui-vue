export default {
  name: 'Spin',
  props: {
    value: { type: Boolean, default: true },
    mode: { type: String, default: 'zoom' }
  },
  render() {
    const classes = [{
      [`k-spin-loading`]: this.value,
      [`k-spin-${this.mode}`]: this.mode && this.value,
    }]

    const child = this.$slots.default
    const spin = <div class={classes} />
    return (
      <div class="k-spin">{[spin,child]}</div>
    )
  }
}