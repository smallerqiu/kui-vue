export default {
  props: {
    animated: Boolean,
    block: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    shape: String,
    size: String,
    width: Number,
  },
  watch: {
    loading(v) {
      if (v) {
        this.show = v
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.show = v
        }, this.delay);
      }
    }
  },
  data() {
    return {
      show: this.loading
    }
  },
  render() {
    let { size, animated, block, shape, show, width } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
        'k-skeleton-block': block,
      }]
    }
    let innerProps = {
      class: ['k-skeleton-btn', {
        'k-skeleton-btn-lg': size == 'large',
        'k-skeleton-btn-sm': size == 'small',
        [`k-skeleton-btn-${shape}`]: shape != 'default',
      }],
    }
    let child = this.$slots.default

    if (width) {
      innerProps.style.width = `${width}px`
    }
    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}></span>}
      </div >
    )
  }
}