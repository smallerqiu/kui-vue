export default {
  inserted(el, binding, vnode) {
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer !== 'true') return false;
    let id = 'k-transfer-' + new Date() * 1
    const box = document.getElementById('k-transfer') || document.createElement('span')
    box.id = id
    el.data = { id: id }
    box.appendChild(el)
    document.body.appendChild(box)
  },
  componentUpdated(el, binding) {
    // if (el.dataset.transfer !== 'true') return false;
  },
  unbind(el) {
    // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
    let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
    if (transfer !== 'true') return false;
    document.body.removeChild(document.getElementById(el.data.id))
  }
}