
export default {
  mounted(el, { value }, vnode) {
    if (value) {
      const parentNode = el.parentNode
      if (!parentNode) return false;

      const target = (value === true ? document.body : value) || document.body

      if (target != document.body) {
        target.appendChild(el)
        el.__data = { parentNode, box: el }
      } else {

        let box = document.createElement('div')

        box.appendChild(el)
        target.appendChild(box)
        el.__data = { parentNode, box }
      }

    }
  },
  unmounted(el, { value },) {
    // if parentNode is removed, we need to remove the element
    if (value) {
      const target = value === true ? document.body : value || document.body
      // el.__data.parentNode.appendChild(el)
      target.removeChild(el.__data.box)
      el.__data = null
    }
  }
}