
export default {
  name: "Col",
  props: {
    span: Number,
    offset: Number,
    flex: [String, Number],
  },
  inject: {
    Row: { default: () => { } }
  },
  methods: {
    parseFlex(flex) {
      if (typeof flex === 'number') {
        return `${flex} ${flex} auto`;
      }
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
      return flex;
    },
  },
  render() {
    let { offset, span, $slots, flex } = this
    const gutter = this.Row.gutter
    let props = {
      class: [`k-col`, {
        [`k-col-${span}`]: span,
        // [`k-col-offset-${offset}`]: offset > 0 && offset <= 24
      }],
      style: {
        // paddingLeft: gutter ? `${gutter / 2}px` : null,
        // paddingRight: gutter ? `${gutter / 2}px` : null,
        // flex: flex ? this.parseFlex(flex) : null
      }
    }
    // console.log(gutter)
    if (Array.isArray(gutter)) {
      let [v = 0, h = 0] = gutter;
      if ((v == h && v > 0)) {
        props.style.padding = `${v / 2}px`
      } else if (v > 0 && h > 0) {
        props.style.padding = `${h / 2}px ${v / 2}px`
      } else {
        if (v > 0) {
          props.style.paddingLeft = `${v / 2}px`
          props.style.paddingRight = `${v / 2}px`
        }
        if (h > 0) {
          props.style.paddingTop = `${v / 2}px`
          props.style.paddingTop = `${v / 2}px`
        }
      }

    } else if (!isNaN(Number(gutter)) && gutter > 0) {
      props.style.paddingLeft = `${gutter / 2}px`
      props.style.paddingRight = `${gutter / 2}px`
    }
    if (flex) {
      props.style.flex = this.parseFlex(flex)
    }
    if (offset > 0 && offset <= 24) {
      props.class.push(`k-col-offset-${offset}`)
    }

    return (
      <div {...props}>
        {$slots.default}
      </div>
    )
  }
};