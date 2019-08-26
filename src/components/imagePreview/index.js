import Vue from 'vue';
import './imagepreview.less'
import ImagePreview from './imagePreview'


let imageInstance;
let showPos = {}
let mousedown = e => {
  if (!imageInstance) {
    showPos = { x: e.clientX, y: e.clientY }
  }
}
if (typeof window != 'undefined') {
  document.addEventListener('mousedown', mousedown)
}
const createPreview = options => {
  const props = options || {}
  const Instance = new Vue({
    data: Object.assign({}, props),
    render(h) {
      return h(ImagePreview, {
        props: { url: props.url },
        on: {
          input: show => {
            if (!show) {
              this.remove()
            } 
          }
        },
      })
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', mousedown)
    },
    methods: {
      remove() {
        clearTimeout(this.timer)
        this.timer = setTimeout(e => {
          document.body.removeChild(this.$el)
          this.destory()
          // this.$destroy()
        }, 300)
      }
    },
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  let preview = Instance.$children[0];
  return {
    show() {
      preview.showPos = showPos;
      preview.show = true;
      preview.$nextTick(e => preview.setPos())
    },
  }
}
let getPreview = (props = {}) => {
  imageInstance = imageInstance || createPreview(props)
  imageInstance.show()
  return imageInstance
}

ImagePreview.show = (url) => {
  let props = { url }
  props.destory = () => {
    imageInstance = null
  }
  return getPreview(props)
}



export default ImagePreview