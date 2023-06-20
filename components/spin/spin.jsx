export default {
  name: 'Spin',
  props: {
    value: { type: Boolean, default: true },
    delay: { type: Number, default: 500 },
    size: {
      type: String, default: 'default', validator(value) {
        return ["large", "default", "small"].indexOf(value) >= 0;
      }
    },
    mode: {
      type: String, default: 'rotate', validator(value) {
        return ["bounce", "flip", "rotate", "zoom"].indexOf(value) >= 0;
      }
    }
  },
  watch: {
    value(v) {
      if (v) {
        this.spinning = v
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.spinning = v
        }, this.delay);
      }
    }
  },
  data() {
    return {
      spinning: this.value
    }
  },
  render() {
    let { mode, spinning, $slots, size } = this
    const classes = [{
      [`k-spin-loading`]: spinning,
      [`k-spin-lg`]: size == 'large',
      [`k-spin-sm`]: size == 'small',
      [`k-spin-${mode}`]: mode && spinning,
    }]

    const spin = <div class={classes} />
    return (
      <div class="k-spin">{[spin, $slots.default]}</div>
    )
  }
}