export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: [String],
    spin: Boolean,
  },
  methods: {
    click(e) {
      this.$emit('click', e)
    }
  },
  render() {
    const { $listeners, click, type, spin, color, size } = this
    const classes = [`k-ion-${type}`, { 'k-load-loop': spin }];
    const styles = {
      fontSize: `${size}px`,
      color: color
    };
    const props = {
      style: styles,
      class: classes,
      on: {
        ...$listeners,
        click: click
      }
    }
    return (      <i {...props} />   )
  }
};
