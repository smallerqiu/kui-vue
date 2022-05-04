export default {
  props: {
    animated: Boolean,
    size: String
  },
  render() {
    let { size, animated, block, shape } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let btnProps = {
      class: ['k-skeleton-text', {
        'k-skeleton-text-lg': size == 'large',
        'k-skeleton-text-sm': size == 'small',
      }],
    }
    return (
      <div {...props}>
        <span {...btnProps}></span>
      </div >
    )
  }
}