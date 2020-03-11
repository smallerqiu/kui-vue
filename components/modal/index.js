import Modal from './modal.jsx'
import Icon from '../icon'
import Vue from 'vue'
import Button from '../button'


let modalInstance;

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
        h(Icon, { style: { color: color }, class: 'k-toast-icon', props: { type } }),
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
        (typeof onOk == 'function') && onOk()
        if (props.loading) {
          this.loading = true
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
        this.$children[0].show = false
        clearTimeout(this.timer)
        this.timer = setTimeout(e => {
          this.$children[0].showInner = false
          document.body.removeChild(this.$el)
          modalInstance = null
        }, 300)
      }
    }
  })
  const compoent = instance.$mount()
  document.body.appendChild(compoent.$el)
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
  modalInstance = modalInstance || createInstance(props)
  modalInstance.show()
  return modalInstance
}

['info', 'success', 'warning', 'error', 'confirm'].forEach(type => {
  Modal[type] = (props = {}) => getModal(Object.assign({ icon: type }, props))
})

Modal.show = (props = {}) => {
  return getModal(props)
}
Modal.destroy = e => {
  if (modalInstance) modalInstance.destroy()
}

export default Modal