export default {
  props: {
    animated: Boolean,
    block: Boolean,
    shape: String,
    size: String
  },
  render() {
    let { size, animated, block, shape } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
        'k-skeleton-block': block,
      }]
    }
    let btnProps = {
      class: ['k-skeleton-btn', {
        'k-skeleton-btn-lg': size == 'large',
        'k-skeleton-btn-sm': size == 'small',
        [`k-skeleton-btn-${shape}`]: shape != 'default',
      }],
    }
    return (
      <div {...props}>
        <span {...btnProps}></span>
      </div >
    )
  }
}