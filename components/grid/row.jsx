
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
      let [v = 0, h = 0] = gutter;
      if ((v == h && v > 0)) {
        props.style.margin = `-${v/2}px`
      } else if (v > 0 && h > 0) {
        props.style.margin = `-${h/2}px -${v/2}px`
      } else {
        if (v > 0) {
          props.style.marginLeft = `-${v/2}px`
          props.style.marginRight = `-${v/2}px`
        }
        if (h > 0) {
          props.style.marginTop = `-${v/2}px`
          props.style.marginTop = `-${v/2}px`
        }
      }

    } else if (!isNaN(Number(gutter)) && gutter > 0) {
      props.style.marginLeft = `-${gutter / 2}px`
      props.style.marginRight = `-${gutter / 2}px`
    }
    return (<div {...props}>{$slots.default}</div >)
  }
};