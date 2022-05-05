import Icon from '../icon'
export default {
  props: {
    animated: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    radius: Number,
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
    let { animated, radius, show } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let innerProps = {
      class: ['k-skeleton-image'],
      style: {
        'border-radius': radius ? radius + 'px' : ''
      }
    }
    let child = this.$slots.default
    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}><Icon type="image-outline" class="k-skeleton-image-icon" /></span>}
      </div >
    )
  }
}