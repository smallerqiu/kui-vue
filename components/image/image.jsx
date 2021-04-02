import Icon from '../icon'
import createInstance from './instance'

export default {
  // name: 'Image',
  props: {
    alt: String,
    src: String,
    origin: String,
    height: [String, Number],
    width: [String, Number],
    placeholder: String,
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
    preview && preview.destory()
    this.ImageGroup && this.ImageGroup.updateCollection(0, this.origin || this.src)
  },
  methods: {
    show(options) {
      // let { ImageGroup, preview, src, origin } = this
      let preview = this.preview || createInstance()
      preview.show(options)
    },
    showPreview(e) {
      let { origin, src, error, ImageGroup } = this
      if ((!src && !origin) || error) return;

      let showSwitch = ImageGroup != null
      let options = { src }
      // { data, src, index }
      if (showSwitch) {
        options.data = ImageGroup.data
        options.index = ImageGroup.data.indexOf(src)
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
        callback && callback()
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
        this.loadimg(src, () => {
          this.showImg = true
          this.imageUrl = src
          this.error = false
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
    }
  },
  mounted() {
    this.reload()
    this.ImageGroup && this.ImageGroup.updateCollection(1, this.origin || this.src)
  },
  render() {
    const { imageUrl, alt, width, height, showImg,
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
    return <div {...props}>
      {/* <Preview {...imageProps} /> */}
      {showImg || (!showImg && placeholder) ? <img src={imageUrl} alt={alt} class="k-image-img" /> : null}
      {(!showImg || error) && !placeholder ? <Icon type="image" class="k-image-error" /> : null}
      {loading ? <div class="k-image-loading" key="wocao">
        <Icon type="sync" spin class="k-image-loading-icon" />
      </div> : null}
    </div>
  }
}