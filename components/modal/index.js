import Modal from './modal.jsx'
import Icon from '../icon'
import Vue from 'vue'
import Button from '../button'

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

let modalList = [];
let createInstance = (props = {}) => {
  const instance = new Vue({
    data: { loading: false },
    render(h) {
      //icons
      let { icon, title, content, color, cancelText, okText } = props
      let icons = {
        info: "ios-information-circle",
        error: "ios-close-circle",
        success: "ios-checkmark-circle",
        warning: "ios-alert",
        confirm: 'ios-help-circle'
      }
      let type = icons[icon] || icon
      //header 
      let header = h('div', { attrs: { class: 'k-toast-header' } }, [
        type ? h(Icon, { style: { color: color }, class: 'k-toast-icon', props: { type } }) : null,
        h('div', { attrs: { class: 'k-toast-title' } }, title)
      ])

      //body
      let body = h('div', { attrs: { class: 'k-toast-content' } }, [content])
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
        instance.show = false
        setTimeout(e => {
          instance.showInner = false
          if (this.$el.parentElement == document.body) {
            document.body.removeChild(this.$el)
          }
        }, 300)
      }
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  let modal = instance.$children[0]
  return {
    show() {
      modal.show = true
      modal.showInner = true
    },
    destroy() {
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
  modalList = []
}

export default Modal