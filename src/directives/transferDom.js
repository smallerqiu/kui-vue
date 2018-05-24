export default {
    inserted(el, binding, vnode) {
        let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
        if (transfer !== 'true') return false;
        const parentNode = el.parentNode;
        if (!parentNode) return;
        let home = document.createComment('div')
        // let home = document.createElement('div')
        // home.style.cssText = 'position: absolute; top: 0px; left: 0px; width: 100%;'
        // home.appendChild(el)
        parentNode.replaceChild(home, el)
        el._transferData = {
            parentNode: parentNode
        }
        document.body.appendChild(el)
        // document.body.appendChild(home)
    },
    componentUpdated(el, binding) {
        // if (el.dataset.transfer !== 'true') return false;
    },
    unbind(el) {  // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
        let transfer = el.getAttribute ? el.getAttribute('data-transfer') : el.dataset.transfer
        if (transfer !== 'true') return false;
        el._transferData.parentNode.appendChild(el)
        el._transferData = null
    }
}