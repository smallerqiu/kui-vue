
export default {
  name: "Row",
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    styles() {
      const gutter = this.gutter
      if (gutter) {
        return {
          marginLeft: gutter / -2 + "px",
          marginRight: gutter / -2 + "px"
        };
      }
    }
  },
  render() {
    let { $slots, styles } = this
    let props = {
      class: 'k-row',
      style: styles
    }
    return (
      <div {...props}>
        {$slots.default}
      </div>
    )
  }
}; 