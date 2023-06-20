
import Vue from 'vue';
export default {
  inserted(el, { value }, vnode) {
    const SSR = Vue && Vue.prototype.$isServer
    if (!SSR && value) {
      const parentNode = el.parentNode
      if (!parentNode) return false;

      const target = value === true ? document.body : value || document.body
      // let empty = document.createComment('')

      if (target != document.body) {
        target.appendChild(el)
        el.__data = { parentNode, box: el }
      } else {

        let box = document.createElement('div')
        box.style.top = 0
        box.style.left = 0
        box.style.width = '100%'
        box.style.position = 'absolute'

        // parentNode.replaceChild(empty, el)

        box.appendChild(el)
        target.appendChild(box)
        el.__data = { parentNode, box }
      }

    }
  },
  unbind(el, { value },) {
    // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
    if (value) {
      const target = value === true ? document.body : value || document.body
      el.__data.parentNode.appendChild(el)
      target.removeChild(el.__data.box)
      el.__data = null
    }
  }
}