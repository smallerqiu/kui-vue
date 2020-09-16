import icons from 'kui-icons'

export default {
  name: "Icon",
  props: {
    type: String,
    size: [String, Number],
    color: { type: String, default: 'currentColor' },
    spin: Boolean,
  },
  render() {
    const { $listeners, click, type, spin, color, size } = this
    const classes = ['k-icon', { 'k-load-loop': spin }];
    const styles = {
      fontSize: `${size}px`,
    };
    // let s = root.getElementsByTagName('glyph')
    const props = {
      style: styles,
      class: classes,
      on: {
        ...$listeners,
        click: e => this.$emit('click', e)
      }
    }
    // const pathNode = icons[type].map(d => {
    //   if (Array.isArray(d))
    //     return d.map(c=> <circle cx={c[0]} cy={c[1]} r={c[2]}/>)
    //   else
    //     return <path d={d} />
    // })
    const pathNode = <path d={icons[type]} />
    return (<i {...props}><svg viewBox='0 0 512 512' width="1em" height="1em" fill={color}>{pathNode}</svg></i>)
  }
};
