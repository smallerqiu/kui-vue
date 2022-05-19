import Icon from '../icon'
export default {
  props: {
    animated: Boolean,
    loading: Boolean,
    delay: { type: Number, default: 500 },
    radius: Number,
    size: [Number, Array]
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
    let { animated, radius, show, size } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let innerProps = {
      class: ['k-skeleton-image'],
      style: {}
      // style: {
      //   'border-radius': radius ? radius + 'px' : ''
      // }
    }
    let child = this.$slots.default


    if (radius) {
      innerProps.style['border-radius'] = `${radius}px`
    }

    if (!isNaN(Number(size))) {
      innerProps.style.width = `${size}px`
      innerProps.style.height = `${size}px`
    }

    if (Array.isArray(size)) {
      innerProps.style.width = `${size[0]}px`
      innerProps.style.height = `${size[1]}px`
    }

    return (
      <div {...props}>
        {child && !show ? child : <span {...innerProps}><Icon type="image-outline" class="k-skeleton-image-icon" /></span>}
      </div >
    )
  }
}