export default {
  props: {
    animated: Boolean,
    radius: Number,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    shape: String,
    size: [Number, String]
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
    let { size, animated, radius, shape, show } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let innerProps = {
      class: ['k-skeleton-avatar', {
        'k-skeleton-avatar-lg': size == 'large',
        'k-skeleton-avatar-sm': size == 'small',
        [`k-skeleton-avatar-${shape}`]: shape != 'default',
      }],
    }
    let child = this.$slots.default

    if (!isNaN(Number(size))) {
      innerProps.style.width = `${size}px`
      innerProps.style.height = `${size}px`
    }
    if (radius) {
      innerProps.style['border-radius'] = `${radius}px`
    }

    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}></span>}
      </div >
    )
  }
}