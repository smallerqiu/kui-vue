export default {
  props: {
    animated: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    size: String
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
    let { size, animated, show } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let innerProps = {
      class: ['k-skeleton-text', {
        'k-skeleton-text-lg': size == 'large',
        'k-skeleton-text-sm': size == 'small',
      }],
    }
    let child = this.$slots.default
    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}></span>}
      </div >
    )
  }
}