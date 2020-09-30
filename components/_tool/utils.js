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

export function cloneVNode(vnode, opts = {}) {
  const componentOptions = vnode.componentOptions;
  const data = vnode.data;

  let listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = { ...componentOptions.listeners };
  }

  let on = { ...opts.on };
  if (data && data.on) {
    on = { ...data.on };
    // on = Object.assign(data.on, );

    // merge event ,mouseenter & mouseleave & click 
    let { mouseenter, mouseleave, click } = on
    on.mouseenter = e => {
      opts.on.mouseenter();
      mouseenter && mouseenter();
    }
    on.mouseleave = e => {
      opts.on.mouseleave();
      mouseleave && mouseleave();
    }
    on.click = e => {
      opts.on.click();
      click && click();
    }

  }
  let children = vnode.children || []
  if (opts.children)
    children = children.concat(opts.children)

  // console.log(children)
  const cloned = new vnode.constructor(
    vnode.tag,
    // data ? { ...data, on } : data,
    { ...data, on },
    // vnode.children,
    children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions ? { ...componentOptions, listeners } : componentOptions,
    vnode.asyncFactory,
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  // if (deep) {
  //   if (vnode.children) {
  //     cloned.children = cloneVNodes(vnode.children, true);
  //   }
  //   if (componentOptions && componentOptions.children) {
  //     componentOptions.children = cloneVNodes(componentOptions.children, true);
  //   }
  // }
  return cloned;
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
export function setPosition(selection, picker, transfer, callback) {
  let top = 0, left = 0, offset = 3, placement = 'bottom';

  if (picker) {

    let selectionRect = selection.getBoundingClientRect();
    let pickerHeight = picker.offsetHeight

    let showInTop = document.documentElement.clientHeight - selectionRect.top - selectionRect.height > pickerHeight //是否从上往下展示，默认

    let scrollTop = document.documentElement.scrollTop

    if (showInTop) { //正常
      placement = 'bottom'
      if (transfer) {
        top = selectionRect.bottom + offset + scrollTop;
        left = selectionRect.left + 1;
      } else {
        top = selectionRect.height + offset;
        left = 0;
      }
    } else {
      placement = 'top'
      if (transfer) {
        left = selectionRect.left + 1;
        top = selectionRect.top - pickerHeight - offset + scrollTop
      } else {
        top = -(pickerHeight + offset);
        left = 0;
      }
    }
  }
  if (callback) {
    callback(top, left, placement)
  }
}
export function getOffset(el) {
  // const rect = el.getBoundingClientRect();
  const pos = {
    left: el.offsetLeft,//rect.left,
    top: el.offsetTop,
  };
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