export function isEmptyNode(vnode = {}) {
  return !(vnode.tag || (vnode.text && vnode.text.trim().length))
}
export function getChild(child = []) {
  return child.filter(c => !isEmptyNode(c))
}

export function hasProp(context, key) {
  const options = context.$options || {}
  const props = options.propsData || {}
  return key in props
}

export function getElementPos(element) {
  var parent = element//.offsetParent;
  let pos = {
    left: 0,
    top: 0,
    width: parent.offsetWidth,
    height: parent.offsetHeight,
  }
  while (parent !== null) {
    pos.left += parent.offsetLeft;
    pos.top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return pos;
}