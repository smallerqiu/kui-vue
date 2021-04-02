import Vue from 'vue'
import Preview from './preview'

export default function createInstance() {

  let instance = new Vue({
    methods: {
      show({ data, src, index }) {
        this.src = src

        if (Array.isArray(data) && data.length) {
          this.data = data
          this.src = src || data[index || 0]
          this.showSwitch = true
        } else {
          this.showSwitch = false
          this.data = []
          this.src = src
        }
        this.visible = true
      },
      destory() {
        let instance = this.$children[0]
        if (instance) {
          instance.visible = false
          clearTimeout(this.timer)
          this.timer = setTimeout(e => {
            instance.$destroy()
            Vue.prototype.preview = null
            setTimeout(() => {
              document.body.removeChild(this.$el)
            });
          }, 300)
        }
      },
    },
    data() {
      return {
        src: '',
        visible: false,
        data: null,
        showSwitch: false,
      }
    },
    render() {
      let { src, visible, showSwitch, data } = this
      const imageProps = {
        props: {
          origin: src,
          value: visible,
          showSwitch,
          data
        },
        on: {
          input: val => {
            this.visible = val
          }
        }
      }
      return <Preview {...imageProps} />
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  Vue.prototype.preview = instance
  return instance;
}