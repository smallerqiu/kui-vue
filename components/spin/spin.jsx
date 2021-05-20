export default {
  name: 'Spin',
  props: {
    value: { type: Boolean, default: true },
    mode: {
      type: String, default: 'zoom', validator(value) {
        return ["bounce", "flip", "rotate", "zoom"].indexOf(value) >= 0;
      }
    }
  },
  render() {
    let { mode, value, $slots } = this
    const classes = [{
      [`k-spin-loading`]: value,
      [`k-spin-${mode}`]: mode && value,
    }]

    const spin = <div class={classes} />
    return (
      <div class="k-spin">{[spin, $slots.default]}</div>
    )
  }
}