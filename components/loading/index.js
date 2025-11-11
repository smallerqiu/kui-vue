import Vue from 'vue';
import { withInstall } from '../utils/vue'

const createInstance = () => {
  const instance = new Vue({
    data: {
      visible: true,
      percent: 0,
      isError: false,
      animate: true,
    },
    render(h) {
      const barClasses = [
        "k-loading-line",
        {
          ["k-loading-line-error"]: this.isError
        }
      ]
      const barStyles = {
        width: `${this.percent}%`,
        transitionDuration: !this.animate ? "0s" : null
      }
      return h('transition', { props: { name: 'fade' } }, [
        this.visible
          ? h('div', { class: 'k-loading-warp' }, [
            h('div', { class: barClasses, style: barStyles })
          ])
          : null
      ])
    },
    methods: {
      start() {
        this.isError = false
        this.visible = true
        this.percent = 0
        clearInterval(this.updateTimer)
        this.updateTimer = setInterval(() => {
          this.animate = true
          this.percent += Math.floor(Math.random() * 3 + 5);
          if (this.percent >= 95) {
            this.percent = 95
            clearInterval(this.updateTimer)
            clearTimeout(this.finishTimer)
            this.updateTimer = null
            this.finishTimer = null
          }
        }, 200);
      },
      finish() {
        clearInterval(this.updateTimer)
        clearTimeout(this.finishTimer)
        this.percent = 100
        this.visible = true
        this.isError = false
        this.finishTimer = setTimeout(() => {
          this.visible = false
          clearTimeout(this.finishTimer)
        }, 500);
      },
      error() {
        this.isError = true
        this.percent = 100
        this.visible = true
        clearInterval(this.updateTimer)
        this.updateTimer = null
        this.finishTimer = setTimeout(() => {
          this.visible = false
        }, 500)
      },
      upload(percent) {
        this.isError = false
        this.visible = true
        this.animate = percent > this.percent
        this.percent = percent
      }
    },
    beforeDestroy() {
      clearInterval(this.updateTimer)
      clearTimeout(this.finishTimer)
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  return instance
}
let loadInstance = null

const getLoading = (props = {}) => {
  let instance = loadInstance || createInstance(props)
  if (!loadInstance) loadInstance = instance
  return instance
}

const Loading = {
  name: 'Loading',
  start() {
    getLoading().start()
  },
  finish() {
    getLoading().finish()
  },
  error() {
    getLoading().error()
  },
  upload(percent) {
    getLoading().upload(percent)
  },
  destroy() {
    if (loadInstance) {
      document.body.removeChild(loadInstance.$el)
      loadInstance.$destroy()
      loadInstance = null
    }
  }
};
export default withInstall(Loading)