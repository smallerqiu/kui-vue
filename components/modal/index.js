import Modal from './modal.jsx'
import Icon from '../icon'
import Vue from 'vue'
import Button from '../button'

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

let showPoint = {}
let mousedown = e => {
  showPoint = { x: e.clientX, y: e.clientY }
}
if (typeof window !== undefined) {
  document.addEventListener('mousedown', mousedown)
}


let modalList = [];
let createInstance = (props = {}) => {

  const instance = new Vue({
    data: { loading: false, show: false },
    render(h) {
      //icons
      let { icon, title, content, color, cancelText, okText } = props
      let icons = {
        info: "information-circle",
        error: "close-circle",
        success: "checkmark-circle",
        warning: "alert-circle",
        confirm: 'help-circle'
      }
      let type = icons[icon] || icon
      //header 
      let header = h('div', { attrs: { class: 'k-toast-header' } }, [
        type ? h(Icon, { style: { color: color }, class: 'k-toast-icon', props: { type } }) : null,
        h('div', { attrs: { class: 'k-toast-title' } }, title)
      ])

      //body
      let body = h('div', { attrs: { class: 'k-toast-content' }, domProps: { innerHTML: [content] } })
      //footer
      let footerNode = [h(Button, {
        props: { type: 'primary', loading: this.loading },
        on: { click: this.ok }
      }, okText || '确定')]

      if (icon == 'confirm') {
        footerNode.unshift(h(Button, { on: { click: this.cancel } }, cancelText || '取消'))
      }
      let footer = h('div', { attrs: { class: 'k-toast-footer' } }, footerNode)

      let contentNode = h('template', { slot: 'content' }, [header, body, footer])
      let classes = 'k-modal k-toast ' + (icons[icon] ? 'k-toast-' + icon : '')
      return h(Modal, { attrs: { class: classes } }, [contentNode]);
    },
    methods: {
      ok() {
        let { onOk } = props;
        let fun = onOk ? onOk() : {}
        if (isPromise(fun)) {
          this.loading = true
          fun.then(e => {
            this.destroy()
          }).catch(e => {

          })
        } else {
          this.destroy()
        }
      },
      cancel() {
        let { onCancel } = props;
        (typeof onCancel == 'function') && onCancel()
        this.destroy()
      },
      destroy() {
        let instance = this.$children[0]
        if (instance) {
          instance.show = false

          clearTimeout(this.timer)
          this.timer = setTimeout(e => {
            instance.showInner = false
            instance.$destroy()
            setTimeout(() => {
              document.body.removeChild(this.$el)
            });
            modalList.splice(modalList.indexOf(instance), 1)

            if (modalList.length == 0) {
              modal.resetBodyStyle(false)
            }
          }, 300)
        }
      }
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)

  let modal = instance.$children[0]
  modal.init = true

  return {
    show() {
      modal.showPoint = showPoint
      modal.$nextTick(e => {
        modal.show = true
        modal.showInner = true
        modal.resetBodyStyle(true)
      })
    },
    destroy() {
      // document.removeEventListener('mousedown', mousedown)
      modal.$parent.destroy()
    }
  }
}

let getModal = (props = {}) => {
  let instance = createInstance(props)
  instance.show()
  modalList.push(instance)
  return instance
}

['info', 'success', 'warning', 'error', 'confirm'].forEach(type => {
  Modal[type] = (props = {}) => getModal(Object.assign({ icon: type }, props))
})

Modal.show = (props = {}) => {
  return getModal(props)
}

Modal.destroyAll = e => {
  modalList.forEach(modal => {
    modal.destroy()
  })
}
Modal.install = function (Vue) {

  Vue.component(Modal.name, Modal);
};
export default Modal