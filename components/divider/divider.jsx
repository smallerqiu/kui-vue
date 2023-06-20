export default {
  name: 'Divider',
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    },
    text: String,
    dashed: Boolean,
    orientation: {
      type: String,
      default: 'center',
      validator(value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0
      }
    }
  },
  render() {
    let { type, text, orientation, dashed } = this
    let textNode = this.$slots.default || text

    const classes = [
      'k-divider', {
        [`k-divider-${type}`]: type,
        'k-divider-dashed': dashed,
        [`k-divider-with-text-${orientation}`]: orientation && textNode,
      }
    ]
    return <div class={classes}>
      {textNode ? <span class="k-divider-inner-text">{textNode}</span> : null}
    </div>

  }
}