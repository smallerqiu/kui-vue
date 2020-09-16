 
export default {
  inserted(el, { value }, vnode) {
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer !== 'true') return false;
    const pNode = el.parentNode
    if (!pNode) return false;
    let oPnode = document.createComment('')
    let removed = false
    if (value !== false) {
      pNode.replaceChild(oPnode, el)
      document.body.appendChild(el)
      removed = true
    }
    if (!el.__data) {
      el.__data = { pNode, oPnode, removed }
    }
  },
  componentUpdated(el, { value }) {
   /*  let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer !== 'true') return false;
    let { pNode, oPnode, removed } = el.__data
    if (!removed && value) {
      pNode.replaceChild(oPnode, el);
      document.body.appendChild(el);
      el.__data = Object.assign({}, el.__data, { removed: true });
    } else if (removed && value === false) {
      pNode.replaceChild(el, oPnode);
      el.__data = Object.assign({}, el.__data, { removed: false });
    } else if (value) {
      document.body.appendChild(el);
    } */
  },
  unbind(el) {
    // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer !== 'true') return false;
    if (!el.__data) return;
    if (el.__data.removed == true) {
      el.__data.pNode.appendChild(el)
    }
    el.__data = null
  }
}