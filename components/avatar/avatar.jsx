import Icon from '../icon'
import { getChild, isVnode } from '../_tool/utils'
export default {
  props: {
    icon: String,
    shape: { type: String, },
    size: {
      type: [Number, String],
      default: 'default',
      validator: (val) => typeof val == 'number' ? 1 : ['large', 'small', 'default'].indexOf(val) >= 0
    },
    src: String
  },
  updated() {
    this.udpateSize()
  },
  methods: {
    udpateSize() {
      let inner = this.$refs.inner
      if (inner) {
        let scale = 1, max = this.$el.offsetWidth - 8;
        if (inner.scrollWidth > max)
          scale = (max) / inner.scrollWidth
        inner.style = 'transform: scale(' + scale + ') translateX(-50%);'
      }
    }
  },
  mounted() {
    this.udpateSize()
  },
  render() {
    let { size, shape, src, icon } = this
    let styles = {}
    if (typeof size == 'number') {
      styles = {
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`,
        fontSize: `${size / 2}px`,
      }
    }
    let child = getChild(this.$slots.default)
    let hasIcon = child.filter(x => (x.componentOptions || {}).tag == 'Icon').length
    let text = child.filter(x => !x.context).length == child.length

    let cls = ['k-avatar', {
      'k-avatar-lg': size == 'large',
      'k-avatar-sm': size == 'small',
      'k-avatar-image': src,
      'k-avatar-icon': icon || hasIcon,
      'k-avatar-square': shape == 'square'
    }]
    return <div class={cls} style={styles} >
      {
        icon ?
          <Icon type={icon} /> :
          (
            src ? <img src={src} /> : (text ? <span class="k-avatar-string" ref="inner">{child}</span> : child)
          )
      }
    </div >
  }
}