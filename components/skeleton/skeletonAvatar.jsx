export default {
  props: {
    animated: Boolean,
    radius: Number,
    shape: String,
    size: String
  },
  render() {
    let { size, animated, radius, shape } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let btnProps = {
      class: ['k-skeleton-avatar', {
        'k-skeleton-avatar-lg': size == 'large',
        'k-skeleton-avatar-sm': size == 'small',
        [`k-skeleton-avatar-${shape}`]: shape != 'default',
      }],
      style: {
        'border-radius': radius ? radius + 'px' : ''
      }
    }
    return (
      <div {...props}>
        <span {...btnProps}></span>
      </div >
    )
  }
}