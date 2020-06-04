export default {
  name: 'Spin',
  props: {
    value: { type: Boolean, default: true },
    mode: { type: String, default: 'zoom' }
  },
  render() {
    return (
      <div class={["k-spin", { [`k-spin-${this.mode}`]: this.mode && this.value }]}>{this.$slots.default}</div>
    )
  }
}