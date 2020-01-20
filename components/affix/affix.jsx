
import scroll from '../_tool/scroll'
import resize from '../_tool/resize'

function getOffset(element, target) {
  let { top, height, width } = element.getBoundingClientRect()
  if (target === document) target = target.documentElement
  let targetRect = (target !== window) ? target.getBoundingClientRect() : { top: 0, let: 0, bottom: 0 }

  let scrollTop = (target !== window) ? target.scrollTop : target.pageYOffset
  return {
    top, height, width, scrollTop,
    targetHeight: targetRect.height,
    targetInnerHeight: target.innerHeight || target.clientHeight
  }
}

export default {
  name: 'Affix',
  directives: { scroll, resize },
  props: {
    offsetTop: { type: Number, default: 0 },
    offsetBottom: Number,
    target: { type: Function, default: () => { } }
  },
  data() {
    return {
      showBlob: false,
      width: 0,
      height: 0,
      offsetModeOfTop: false,
      offsetModeOfBottom: false
    }
  },

  mounted() {
    let target = this.target()
    if (target) {
      target.addEventListener('scroll', e => {
        // console.log(e)
      })
    }
    this.updatePosition(window)
  },
  methods: {
    updatePosition(e) {
      // console.log(e)
      let { offsetBottom, offsetTop, $refs } = this
      if (this.showBlob) {
        let { top, height, targetInnerHeight } = getOffset($refs.blob, document)

        if (typeof offsetBottom != undefined && offsetBottom >= 0) {
          // unfixedBottom
          // this.offsetModeOfBottom = false
          if (0 >= top + height + offsetBottom - targetInnerHeight) {
            this.offsetModeOfBottom = false
            this.showBlob = false
          }
        } else if (top >= offsetTop) { // unfixedTop
          this.offsetModeOfTop = false
          this.showBlob = false
        }
        if (!this.showBlob) {
          this.showBlob = false
          this.$emit('change', false)
        }
      } else {
        let { top, height, width, targetInnerHeight } = getOffset($refs.blob, document)
        if (typeof offsetBottom != undefined && offsetBottom >= 0) {
          //fixedBottom
          if (0 <= top + height + offsetBottom - targetInnerHeight) {
            this.offsetModeOfBottom = true
            this.showBlob = true
          }
        } else if (top <= offsetTop) { //fixedTop
          this.showBlob = true
          this.offsetModeOfTop = true
        }
        if (this.showBlob) {
          this.showBlob = true
          this.$emit('change', true)
          this.width = width
          this.height = height
        }
      }
    }
  },
  render() {
    let blobStyle = null, fixedStyle = null, classes = null;
    if (this.showBlob) {
      blobStyle = {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
      fixedStyle = {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
      if (this.offsetModeOfBottom) {
        fixedStyle.bottom = `${this.offsetBottom}px`
      }
      if (this.offsetModeOfTop) {
        fixedStyle.top = `${this.offsetTop}px`
      }
      classes = { ['k-affix']: this.showBlob }
    }

    return (
      <div style={blobStyle} v-scroll={this.updatePosition} ref="blob" v-resize={this.updatePosition}>
        <div style={fixedStyle} class={classes} ref="affix" >
          {this.$slots.default}
        </div>
      </div >
    )
  }
}