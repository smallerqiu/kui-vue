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

export function cloneVNode(vnode, opts = {}) {
  const componentOptions = vnode.componentOptions;
  const data = vnode.data;

  let listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = { ...componentOptions.listeners };
  }

  let on = {...opts.on};
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