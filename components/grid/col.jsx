
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
    const props = {
      class: [`k-col`, {
        [`k-col-${span}`]: span,
        [`k-col-offset-${offset}`]: offset > 0 && offset <= 24
      }],
      style: {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
        flex: flex ? this.parseFlex(flex) : null
      }
    }
    return (
      <div {...props}>
        {$slots.default}
      </div>
    )
  }
}; 