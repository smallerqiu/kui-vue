import Icon from '../icon'
export default {
  props: {
    animated: Boolean,
    radius: Number,
  },
  render() {
    let { animated, radius } = this
    let props = {
      class: ['k-skeleton k-skeleton-ele', {
        'k-skeleton-animated': animated,
      }]
    }
    let btnProps = {
      class: ['k-skeleton-image'],
      style: {
        'border-radius': radius ? radius + 'px' : ''
      }
    }
    return (
      <div {...props}>
        <span {...btnProps}><Icon type="image-outline" class="k-skeleton-image-icon" /></span>
      </div >
    )
  }
}