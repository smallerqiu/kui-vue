// import icons from 'kui-icons'
// import icons from './lib/kui-icons'
// import src from './lib/sprite.svg'
const sty2obj = stl => {
  stl = stl.replace(/ /g, '')
  let s = stl.split(';')
  let obj = {}
  s.map(atr => {
    let [k, v] = atr.split(':')
    if (k) {
      obj[k] = v
    }
  })
  return obj
}
const obj2sty = obj => {
  let sty = ''
  for (let k in obj) {
    sty += `${k}:${obj[k]};`
  }
  return sty
}

export default {
  name: "Icon",
  props: {
    type: [String, Array],
    size: [String, Number],
    color: String,
    spin: Boolean,
    strokeWidth: [String, Number],
    // sprite: Boolean
  },

  render() {
    const { $listeners, type, spin, color, size } = this
    const classes = ['k-icon', { 'k-load-loop': spin }];
    const styles = {
      color
    };
    if (size) {
      styles.fontSize = `${size}px`
    }

    const props = {
      style: styles,
      class: classes,
      on: {
        ...$listeners,
        click: e => this.$emit('click', e)
      }
    }
    // console.log(type)
    // if (!sprite) {
    //   return <i {...props}><svg id={type} width="1em" height="1em"><use xlinkHref={`${src}#${type}`}></use></svg>{this.$slots.default}</i>
    // }
    let paths = Array.isArray(type) ? type : [];
    const pathNode = paths.map(i => {
      let sty = i.s ? i.s : 'fill:currentColor';
      if (this.strokeWidth) {
        let o = sty2obj(sty)
        if (o['stroke-width']) {
          o['stroke-width'] = this.strokeWidth;
          sty = obj2sty(o)
        }
      }
      return <path d={i.d} style={sty} />
    })
    return (<i {...props}><svg viewBox='0 0 512 512' width="1em" height="1em">{pathNode}</svg>{this.$slots.default}</i>)
  }
};
