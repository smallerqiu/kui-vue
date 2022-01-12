export function isEmptyNode(vnode = {}) {
  return !(vnode.eml || vnode.tag || (vnode.text && vnode.text.trim() !== ''))
}
export function getChild(child = []) {
  return child.filter(c => !isEmptyNode(c))
}

export function contains(ele, target) {
  //ele是内部元素，target是你想找到的包裹元素 
  if (!ele || ele === document || !target) return false;
  return ele === target ? true : contains(ele.parentNode, target);
}

//此处不能判断数组，要判断数组自行判断
export function isNotEmpty(str) {
  return str !== '' && str !== undefined && str !== null
}

export function hasProp(context, key) {
  const options = context.$options || {}
  const props = options.propsData || {}
  return key in props
}

export function getElementPosBody(element) {
  let pos = {
    left: 0, top: 0, width: 0, height: 0
  }
  if (element) {
    pos = element.getBoundingClientRect()
  }
  return pos
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


/*
see: https://github.com/vuejs/vue/blob/dev/src/core/vdom/vnode.js
*/

export function cloneVNode(vnode, options = {}, childs) {
  let { componentOptions, data = {}, children } = vnode
  if (childs && children) {
    children = children.concat(childs)
  } else if (componentOptions && componentOptions.children) {
    // componentOptions.children.push(childs)
    // console.log(componentOptions.children)
    let hasPushed = componentOptions.children.map(x => x.tag).indexOf(childs.tag) >= 0
    if (!hasPushed) {
      componentOptions.children = componentOptions.children.concat(childs)
    }
  }
  let ndata = JSON.parse(JSON.stringify(data))
  let { attrs = {}, on = {}, style = {} } = data

  data.attrs = Object.assign(attrs, options.attrs)
  data.style = Object.assign(style, options.style)
  if (options.on) {
    for (let eKey in options.on) {
      on[eKey] = (e) => {
        // on[eKey] && on[eKey]()
        options.on[eKey](e)
      }
    }
  }
  data.on = on
  const cloned = new vnode.constructor(
    vnode.tag,
    data,//vnode.data,
    children,// vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions, // vnode.componentOptions
    vnode.asyncFactory
  )
  cloned.ns = vnode.ns
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isComment = vnode.isComment
  cloned.fnContext = vnode.fnContext
  cloned.fnOptions = vnode.fnOptions
  cloned.fnScopeId = vnode.fnScopeId
  cloned.asyncMeta = vnode.asyncMeta
  cloned.isCloned = true
  return cloned
}


export function isVnode(element) {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  );
}
export function getPosition(selection, picker, transfer, placement = 'bottom-left', callback) {
  let top = 0, left = 0, offset = 3;
  let origins = {
    top: 'center bottom', 'top-left': 'left bottom', 'top-right': 'right bottom',
    left: 'right center', 'left-top': 'right top', 'left-bottom': 'right bottom',
    right: 'left center', 'right-top': 'left top', 'right-bottom': 'left bottom',
    bottom: 'center top', 'bottom-left': 'left top', 'bottom-right': 'right top'
  }

  if (picker && selection) {

    let selectionRect = selection.getBoundingClientRect();
    let pickerHeight = picker.offsetHeight
    let pickerWidth = picker.offsetWidth
    let clientHeight = document.documentElement.clientHeight
    let clientWidth = document.documentElement.clientWidth
    let scrollTop = document.documentElement.scrollTop
    let scrollLeft = document.documentElement.scrollLeft
    //是否有足够的空间
    //底部
    let showInBottom = clientHeight - selectionRect.bottom > pickerHeight
    //上面
    let showInTop = clientHeight - (clientHeight - selectionRect.top) > pickerHeight
    //左边
    let showInLeft = clientWidth - (clientWidth - selectionRect.left) > pickerWidth
    //右边
    let showInRight = clientWidth - selectionRect.right > pickerWidth


    // console.log(placement, 'showInTop:', showInTop, 'showInBottom:', showInBottom, clientHeight, scrollTop, selectionRect.top, pickerHeight)

    let hasBottom = placement.slice(0, 6) == 'bottom'
    let hasTop = placement.slice(0, 3) == 'top'
    let hasLeft = placement.slice(0, 4) == 'left'
    let hasRight = placement.slice(0, 5) == 'right'

    if (hasBottom || hasTop) {
      if ((hasBottom && showInBottom) || (hasTop && !showInTop)) { //正常在底部显示
        if (transfer) {
          top = selectionRect.bottom + offset + scrollTop;
          left = selectionRect.left + scrollLeft
          if (placement == 'bottom' || placement == 'top') {
            left = selectionRect.left - (pickerWidth - selectionRect.width) / 2 + scrollLeft
          }
          if (placement == 'bottom-right' || placement == 'top-right') {
            left = selectionRect.left - (pickerWidth - selectionRect.width) + scrollLeft
          }
          if (hasTop) {
            placement = placement.replace('top', 'bottom')
          }
        } else {
          top = selectionRect.height + offset;
          left = 0;
        }
      } else if ((hasBottom && !showInBottom) || (hasTop && showInTop)) {
        if (transfer) {
          left = selectionRect.left + scrollLeft
          top = selectionRect.top - pickerHeight - offset + scrollTop
          if (placement == 'top' || placement == 'bottom') {
            left = selectionRect.left - (pickerWidth - selectionRect.width) / 2 + scrollLeft
          }
          if (placement == 'top-right' || placement == 'bottom-right') {
            left = selectionRect.left - (pickerWidth - selectionRect.width) + scrollLeft
          }
          if (hasBottom) {
            placement = placement.replace('bottom', 'top')
          }
        } else {
          top = -(pickerHeight + offset);
          left = 0;
        }
      }
    } else if (hasLeft || hasRight) {
      if ((hasLeft && showInLeft) || (hasRight && !showInRight)) {
        if (transfer) {
          top = selectionRect.top + scrollTop
          left = selectionRect.left - pickerWidth - offset + scrollLeft
          if (placement == 'left' || placement == 'right') {
            top = selectionRect.top - (pickerHeight - selectionRect.height) / 2 + scrollTop
          }
          if (placement == 'left-bottom' || placement == 'right-bottom') {
            top = selectionRect.top - (pickerHeight - selectionRect.height) + scrollTop
          }
          if (hasRight) {
            placement = placement.replace('right', 'left')
          }
        } else {
          top = 0
          left = -(pickerWidth + offset)
        }
      } else if ((hasRight && showInRight) || (hasLeft && !showInLeft)) {
        if (transfer) {
          top = selectionRect.top + scrollTop
          left = selectionRect.left + selectionRect.width + offset + scrollLeft
          if (placement == 'right' || placement == 'left') {
            top = selectionRect.top + scrollTop - (pickerHeight - selectionRect.height) / 2
          }
          if (placement == 'right-bottom' || placement == 'left-bottom') {
            top = selectionRect.top + scrollTop - (pickerHeight - selectionRect.height)
          }
          if (hasLeft) {
            placement = placement.replace('left', 'right')
          }
        } else {

        }
      }
      if (transfer && !showInBottom && (hasRight || hasLeft)) {
        top = selectionRect.top - (pickerHeight - selectionRect.height) + scrollTop
        if (hasRight) {
          placement = showInRight ? 'right-bottom' : 'left-bottom'
        }
        if (hasLeft) {
          placement = showInLeft ? 'left-bottom' : 'right-bottom'
        }
      }
    }
    // console.log(placement, showInBottom,picker, pickerHeight,pickerWidth)
  }
  let origin = origins[placement]
  if (callback) {
    callback(top, left, origin, placement)
  }
}
export function getOffset(el) {
  // const rect = el.getBoundingClientRect();
  const pos = el ? {
    left: el.offsetLeft,//rect.left,
    top: el.offsetTop,
  } : { left: 0, top: 0 }
  return pos;
}

// 

let _scrollBarWidth;
let _scrollBarHeight;

export function measureScrollBar(direction = 'vertical') {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }
  const isVertical = direction = 'vertical'

  if (isVertical && _scrollBarWidth) return _scrollBarWidth
  if (!isVertical && _scrollBarHeight) return _scrollBarHeight

  const div = document.createElement('div')
  const style = {
    position: 'absolute',
    top: '-9999px',
    width: '50px',
    height: '50px',
  }
  Object.keys(style).forEach(st => {
    div.style[st] = style[st];
  });
  if (isVertical) {
    div.style.overflowY = 'scroll';
  } else {
    div.style.overflowX = 'scroll';
  }
  document.body.appendChild(div);
  let size = 0;
  if (isVertical) {
    size = _scrollBarWidth = div.offsetWidth - div.clientWidth;
  } else {
    size = _scrollBarHeight = div.offsetHeight - div.clientHeight;
  }
  document.body.removeChild(div);
  return size;
}

//简易的判断
export function easyEqual(a, b) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  if (a == null || b == null) return a === b;
  if (a !== a) return b !== b;
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  if (Object.keys(a).length != Object.keys(b).length) return false;
  for (let o in a) {
    if (a[o] != b[o]) {
      return false
    }
  }
  return true
};
