export default {
  inserted(el, { value }, vnode) {
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer === 'true') {
      const parentNode = el.parentNode
      if (!parentNode) return false;
      let empty = document.createComment('')
      if (value !== false) {
        parentNode.replaceChild(empty, el)
        document.body.appendChild(el)
        removed = true
      }
      if (!el.__data) {
        el.__data = { parentNode, empty, removed }
      }
    }
  },

  unbind(el) {
    // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer === 'true' && el.__data) {
      if (el.__data.removed == true) {
        el.__data.parentNode.appendChild(el)
      }
      el.__data = null
    }
  }
} 