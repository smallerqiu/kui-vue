export default {
    inserted(el, binding, vnode) {
        if (el.dataset.transfer !== 'true') return false;
        const parentNode = el.parentNode;
        if (!parentNode) return;
        let home = document.createComment('')
        parentNode.replaceChild(home, el)
        el._transferData = {
            parentNode: parentNode
        }
        document.body.appendChild(el)
    },
    componentUpdated(el, binding) {
        // if (el.dataset.transfer !== 'true') return false;
    },
    unbind(el) {  // 父组件被移除时，把自己归位，不然会造成 父子组件不同步
        if (el.dataset.transfer !== 'true') return false;
        el._transferData.parentNode.appendChild(el)
        el._transferData = null
    }
}