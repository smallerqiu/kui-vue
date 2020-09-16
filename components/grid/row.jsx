
export default {
  name: "Row",
  props: {
    gutter: Number,
    type: String,
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
        marginLeft: gutter / -2 + "px",
        marginRight: gutter / -2 + "px"
      }
    }
    return (<div {...props}>{$slots.default}</div >)
  }
}; 