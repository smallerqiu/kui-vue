import Vue from 'vue';
import Modal from './modal.vue'
import Button from '../button'

let modalInstance;
let showPos = {}
let mousedown = e => {
  if (!modalInstance) {
    showPos = { x: e.clientX, y: e.clientY }
  }
}
if (typeof window != 'undefined') {
  document.addEventListener('mousedown', mousedown)
}
const createModal = options => {
  const props = options || {}
  const Instance = new Vue({
    data: Object.assign({}, props, { isLoading: false, closing: false }),
    computed: {
      iconClasses() {
        let icons = {
          info: "ios-information-circle",
          error: "ios-close-circle",
          success: "ios-checkmark-circle",
          warning: "ios-alert"
        };
        let cls = ["k-toast-icon"]
        if (this.icon) {
          if (icons[this.icon]) {
            cls.push(`k-ion-${icons[this.icon]}`)
          } else {
            cls.push(`k-ion-${this.icon}`)
          }
        }
        return cls;
      },
      iconStyles() {
        return this.color ? { color: this.color } : {};
      },
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', mousedown)
    },
    render(h) {
      //header 
      let header = h('div', { attrs: { class: 'k-toast-header' } }, [
        h('span', { style: this.iconStyles, class: this.iconClasses }),
        h('span', { attrs: { class: 'k-toast-title' } }, this.title || '温馨提示')
      ])

      //body
      let body = h('div', { attrs: { class: 'k-toast-content' } }, [this.content || '我是内容'])
      //footer
      let footerNode = [h(Button, {
        props: { type: 'primary', icon: this.loading ? 'ios-sync' : '' },
        class: [this.loading ? (this.isLoading ? 'k-btn-icon-loop' : '') : ''],
        on: { click: this.ok }
      }, this.okText || '确定')]

      if (this.confrim) {
        footerNode.unshift(h(Button, { on: { click: this.cancel } }, this.cancelText || '取消'))
      }
      let footer = h('div', { attrs: { class: 'k-toast-footer' } }, footerNode)

      let content = h('template', { slot: 'content' }, [header, body, footer])

      return h(Modal, { props: { type: 'toast' }, }, [content]);
    },
    methods: {
      cancel() {
        this.onCancel && this.onCancel()
        this.remove()
      },
      ok() {
        if (this.closing) return;
        if (this.loading) {
          this.isLoading = true
        } else {
          this.remove()
        }
        this.onOk && this.onOk()
        this.closing = true
      },
      remove() {
        // modal.close()
        this.$children[0].close()
        clearTimeout(this.timer)
        this.timer = setTimeout(e => {
          document.body.removeChild(this.$el)
          this.destory()
        }, 300)
      }
    }
  })
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  let modal = Instance.$children[0];
  return {
    show() {
      modal.showPos = showPos
      modal.setPos()
      modal.visiblew = true;
      modal.visible = true;
    },
    remove() {
      modal.close()
      modal.$parent.remove()
    }
  }
}



let getModal = (props = {}) => {
  props.showPos = showPos
  props.destory = () => {
    modalInstance = null;
  }
  modalInstance = modalInstance || createModal(props)
  // modalInstance.value = true
  modalInstance.show()
  return modalInstance
}
Modal.show = (props = {}) => {
  return getModal(props)
}

Modal.info = (props = {}) => {
  props.icon = 'info'
  return getModal(props)
}

Modal.success = (props = {}) => {
  props.icon = 'success'
  return getModal(props)
}
Modal.warning = (props = {}) => {
  props.icon = 'warning'
  return getModal(props)
}
Modal.error = (props = {}) => {
  props.icon = 'error'
  return getModal(props)
}
Modal.comfirm = (props = {}) => {
  props.icon = 'ios-help-circle'
  props.confrim = true
  return getModal(props)
}
Modal.close = () => {
  if (modalInstance) {
    let t = getModal()
    t.remove()
  }
}
export default Modal