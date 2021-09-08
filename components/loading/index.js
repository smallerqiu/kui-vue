import Vue from 'vue';

const createInstance = (props = {}) => {
  const instance = new Vue({
    data: {
      visible: true,
      percent: 0,
      is_error: false,
    },
    render() {
      const barClasses = [
        "k-loading-line",
        {
          ["k-loading-line-error"]: this.is_error
        }
      ]
      const barStyles = {
        width: `${this.percent}%`,
      }
      return <transition name="fade">
        <div class="k-loading-warp" v-show={this.visible}>
          <div class={barClasses} style={barStyles}></div>
        </div>
      </transition>
    },
    methods: {
      start() {
        this.is_error = false
        this.visible = true
        this.percent = 0
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.percent += Math.floor(Math.random() * 3 + 5);
          if (this.percent >= 95) {
            this.percent = 95
            clearInterval(this.timer)
            clearTimeout(this.ftimer)
            this.timer = null
            this.ftimer = null
          }
        }, 200);
      },
      finish() {
        clearInterval(this.timer)
        clearTimeout(this.ftimer)
        this.percent = 100
        this.visible = true
        this.is_error = false
        this.ftimer = setTimeout(() => {
          this.visible = false
          clearTimeout(this.ftimer)
        }, 500);
      },
      error() {
        this.is_error = true
        this.percent = 100
        this.visible = true
        clearInterval(this.timer)
        this.timer = null
        this.ftimer = setTimeout(() => {
          this.visible = false
        }, 500)
      },
      upload(percent) {
        this.is_error = false
        this.visible = true
        this.percent = percent
      }
    },
    beforeDestroy() {
      clearInterval(this.timer)
      clearTimeout(this.ftimer)
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

let Loading = {
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
export default Loading