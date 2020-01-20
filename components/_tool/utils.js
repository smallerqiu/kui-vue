export function isEmptyNode(vnode = {}) {
  return !(vnode.eml || vnode.tag || (vnode.text && vnode.text.trim().length))
}
export function getChild(child = []) {
  return child.filter(c => !isEmptyNode(c))
}

export function contains(ele, target) {
  //ele是内部元素，target是你想找到的包裹元素
  console.log(ele, '--', target, '111')
  if (!ele || ele === document || !target) return false;
  return ele === target ? true : contains(ele.parentNode, target);
}

export function isNotEmpty(str) {
  return str !== '' && str !== undefined && str !== null
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