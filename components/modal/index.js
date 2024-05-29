import Modal from './modal.jsx'
import Icon from '../icon'
import Vue from 'vue'
import {Button} from '../button'
import { t } from '../locale'
import{InformationCircle,CloseCircle,CheckmarkCircle,AlertCircle,HelpCircle} from 'kui-icons'
const SSR = Vue && Vue.prototype.$isServer

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

let showPoint = {}
let mousedown = e => {
  showPoint = { x: e.clientX, y: e.clientY }
}
if (!SSR && typeof window !== undefined) {
  document.addEventListener('mousedown', mousedown)
}


let modalList = [];
let createInstance = (props = {}) => {
  const instance = new Vue({
    data: { loading: false, visible: false },
    render(h) {
      //icons
      let { title, content, color, type, icon, cancelText, okText } = props
      let icons = {
        info: InformationCircle,
        error: CloseCircle,
        success: CheckmarkCircle,
        warning: AlertCircle,
        confirm: HelpCircle
      }
      //header 
      let header = h('div', { attrs: { class: 'k-toast-header' } }, [
        (type || icon) ? h(Icon, { class: 'k-toast-icon', props: { type: (icons[type] || icon), color } }) : null,
        h('div', { attrs: { class: 'k-toast-title' } }, title)
      ])

      //body
      let body = h('div', { attrs: { class: 'k-toast-content' }, domProps: { innerHTML: content } })
      //footer
      let footerNode = [h(Button, {
        props: { type: 'primary', loading: this.loading },
        on: { click: this.ok }
      }, okText || t('k.modal.ok'))]

      if (type == 'confirm') {
        footerNode.unshift(h(Button, { on: { click: this.cancel } }, cancelText || t('k.modal.cancel')))
      }
      let footer = h('div', { attrs: { class: 'k-toast-footer' } }, footerNode)

      let contentNode = h('template', { slot: 'content' }, [header, body, footer])
      let classes = 'k-modal k-toast ' + (icons[type] ? 'k-toast-' + type : '')
      return h(Modal, {
        attrs: { class: classes },
        props: {
          value: this.visible,
          maskClosable: false
        },
        on: {
          input: (e) => {
            this.visible = e
          }
        }
      }, [contentNode]);
    },
    methods: {
      show() {
        this.visible = true
      },
      ok() {
        let { onOk } = props;
        let fun = onOk ? onOk() : {}
        if (isPromise(fun)) {
          this.loading = true
          fun.then(e => { this.destroy() }).catch(e => { })
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
        this.visible = false
        setTimeout(() => {
          modalList.splice(modalList.indexOf(instance), 1)
          this.$destroy()
          if (!SSR && document.body.contains(this.$el))
            document.body.removeChild(this.$el)
        }, 300);
      }
    }
  })
  const component = instance.$mount();
  !SSR && document.body.appendChild(component.$el);
  let toast = component.$children[0]
  toast.showPoint = showPoint
  toast.tasks = modalList
  return instance
}

let getModal = (props = {}) => {
  let instance = createInstance(props)
  instance.show()
  modalList.push(instance)
  return instance
}

['info', 'success', 'warning', 'error', 'confirm'].forEach(type => {
  Modal[type] = (props = {}) => getModal(Object.assign({ type }, props))
})

Modal.show = (props = {}) => {
  return getModal(props)
}

Modal.destroyAll = e => {
  modalList.forEach(toast => {
    toast.destroy()
  })
}
Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal);
};
export default Modal