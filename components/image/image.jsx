import Icon from '../icon'
import createInstance from './instance'
// import { easyEqual } from '../_tool/utils'
export default {
  name: 'kImage',
  props: {
    alt: String,
    src: String,
    type: String,
    origin: String,
    height: [String, Number],
    width: [String, Number],
    placeholder: String,
    imgStyle: Object,
    showPanel: Boolean
  },
  inject: {
    ImageGroup: { default: null },
  },
  data() {
    return {
      loading: false,
      showImg: false,
      imageUrl: '',
      error: false,
      imgWidth: 0,
      imgHeight: 0
      // visible: false,
      // origins: ''
    }
  },
  watch: {
    src(src) {
      this.reload()
    },
    // origin(origin) {

    // }
  },
  beforeDestroy() {
    let preview = this.preview
    preview && preview.destroy()
    this.ImageGroup && this.ImageGroup.updateCollection(0, this.origin || this.src || this._uid + '')
  },
  methods: {
    togglePanel() {
      if (this.preview) {
        this.preview.togglePanel()
      }
    },
    show(options) {
      let preview = this.preview || createInstance({ type: options.type })
      preview.show(options)
    },
    destroy() {
      if (this.preview) {
        this.preview.destroy()
      }
    },
    showPreview(e) {
      let { origin, src, error, ImageGroup, $slots, showPanel, $listeners, type } = this
      if ((!src && !origin) || error) return;

      let showSwitch = ImageGroup != null
      let options = { src, slots: $slots, showPanel, on: { ...$listeners }, _globle: false, type }
      // { data, src, index }
      if (showSwitch) {
        options.data = ImageGroup.data
        options.index = ImageGroup.data.indexOf(src)
        options.on.switch = (index) => {
          this.$emit('switch', index)
          if (ImageGroup) {
            let { $slots, $props } = ImageGroup.$children[index]
            options.slots = $slots
            options.src = ImageGroup.data[index]//$props.origin || $props.src
            this.show(options)
          }
        }
      }

      if (!origin) {
        this.show(options);
      } else {
        this.loading = true
        this.loadimg(origin, () => {
          // this.origins = this.origin
          // this.visible = true
          this.loading = false
          options.src = origin

          this.show(options);
        }, () => {
          this.loading = false
        })
      }
      e.preventDefault()
    },
    loadimg(src, callback, err) {
      if (!src) return;
      let image = new Image()

      image.onload = () => {
        let { width, height } = image
        callback && callback({ width, height })
        image = null
      }
      image.onerror = () => {
        err && err()
        image = null
      }
      image.src = src
    },
    reload() {
      let { src, placeholder } = this
      if (src) {
        this.loadimg(src, ({ width, height }) => {
          this.showImg = true
          this.imageUrl = src
          this.error = false
          this.imgWidth = width
          this.imgHeight = height
        }, () => {
          this.error = true
          this.showImg = !!placeholder || false
          this.imageUrl = placeholder || null
        })
      } else {
        this.error = true
        this.showImg = false
        this.imageUrl = null
      }
    },

  },
  mounted() {
    this.reload()
    this.ImageGroup && this.ImageGroup.updateCollection(1, this.origin || this.src || this._uid + '')
  },
  render() {
    const { imageUrl, alt, width, height, showImg, imgStyle,
      error, loading, placeholder } = this
    const props = {
      style: {
        width: `${width}px`,
        height: `${height}px`,
      },
      class: 'k-image',
      on: {
        click: this.showPreview
      }
    }
    // const imageProps = {
    //   props: {
    //     origin: origins,
    //     value: visible,
    //   },
    //   on: {
    //     input: val => {
    //       this.visible = val
    //     }
    //   }
    // }
    const imgProps = {
      style: imgStyle,
      class: 'k-image-img',
      attrs: { alt, src: imageUrl },
    }
    return <div {...props}>
      {/* <Preview {...imageProps} /> */}
      {showImg || (!showImg && placeholder) ? <img {...imgProps} /> : null}
      {(!showImg || error) && !placeholder ? <Icon type="image" class="k-image-error" /> : null}
      {loading ? <div class="k-image-loading" key="wocao">
        <Icon type="sync" spin class="k-image-loading-icon" />
      </div> : null}
      {this.$slots.default}
    </div>
  }
}