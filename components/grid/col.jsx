
export default {
  name: "Col",
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      const gutter = this.$parent.gutter
      if (gutter) {
        return { paddingLeft: gutter / 2 + "px", paddingRight: gutter / 2 + "px" };
      }
    },
    classes() {
      let { span, offset } = this
      return [`k-col`, {
        [`k-col-${span}`]: span,
        [`k-col-offset-${offset}`]: offset > 0 && offset <= 24
      }];
    }
  },
  render() {
    let { classes, styles, $slots } = this
    const props = {
      class: classes,
      style: styles
    }
    return (
      <div {...props}>
        {$slots.default}
      </div>
    )
  }
}; 