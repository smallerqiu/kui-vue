
export default {
  inserted(el, { value }, vnode) {
    if (value) {
      const parentNode = el.parentNode
      if (!parentNode) return false;

      // let empty = document.createComment('')
      let box = document.createElement('div')
      box.style.top = 0
      box.style.left = 0
      box.style.width = '100%'
      box.style.position = 'absolute'
      let height = el.offsetHeight

      // parentNode.replaceChild(empty, el)
      box.appendChild(el)
      document.body.appendChild(box)
      if (!el.__data) {
        el.__data = { parentNode, box, height }
      }
    }
  },
  unbind(el, { value }, ) {
    // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
    if (value) {
      el.__data.parentNode.appendChild(el)
      document.body.removeChild(el.__data.box)
      el.__data = null
    }
  }
} 