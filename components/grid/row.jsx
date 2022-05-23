
export default {
  name: "Row",
  props: {
    gutter: [Number, Array],
    type: { type: String, default: 'flex' },
    justify: {
      type: String,
      validator: (value) => {
        return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) > -1
      }
    },
    align: {
      type: String,
      validator: (value) => {
        return ['top', 'middle', 'bottom'].indexOf(value) > -1
      }
    }
  },
  provide() {
    return {
      Row: this
    }
  },
  render() {
    let { $slots, align, justify, gutter } = this
    let props = {
      class: ['k-row', {
        'k-row-flex': this.type == 'flex',
        [`k-row-flex-${justify}`]: justify,
        [`k-row-flex-${align}`]: align,

      }],
      style: {

      }
    }
    if (Array.isArray(gutter)) {
      props.style.gap = gutter + 'px'
    } else if (!isNaN(Number(gutter))) {
      props.style.marginLeft = gutter / -2 + "px"
      props.style.marginRight = gutter / -2 + "px"
      props.style.gap = gutter + 'px'
    }
    return (<div {...props}>{$slots.default}</div >)
  }
};