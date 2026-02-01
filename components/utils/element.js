export function isEmptyNode(vnode = {}) {
  return !(vnode.eml || vnode.tag || (vnode.text && vnode.text.trim() !== ""));
}

export function getChildren(children = [], name) {
  // return child.filter(c => !isEmptyNode(c, name) )
  return children.filter((c) => {
    let tag_name = "";
    if (name && c.componentOptions != null && c.componentOptions.Ctor != undefined) {
      tag_name = c.componentOptions.Ctor.extendOptions.name;
    }
    if (!isEmptyNode(c) && name !== tag_name) {
      return true;
    } else {
      return false;
    }
  });
}

export function contains(ele, target) {
  //ele是内部元素，target是你想找到的包裹元素
  if (!ele || ele === document || !target) return false;
  return ele === target ? true : contains(ele.parentNode, target);
}

//此处不能判断数组，要判断数组自行判断
export function isNotEmpty(str) {
  return str !== "" && str !== undefined && str !== null;
}
export function isEmpty(str) {
  return str === "" || str === undefined || str === null || str.length === 0;
}

export function hasProp(context, key) {
  const options = context.$options || {};
  const props = options.propsData || {};
  return key in props;
}

export function getElementPosBody(element) {
  let pos = {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  };
  if (element) {
    pos = element.getBoundingClientRect();
  }
  return pos;
}

export function getElementPos(element) {
  var parent = element; //.offsetParent;
  let pos = {
    left: 0,
    top: 0,
    width: parent.offsetWidth,
    height: parent.offsetHeight,
  };
  while (parent !== null) {
    pos.left += parent.offsetLeft;
    pos.top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return pos;
}

export function getOffset(el) {
  // const rect = el.getBoundingClientRect();
  const pos = el
    ? {
        left: el.offsetLeft, //rect.left,
        top: el.offsetTop,
      }
    : { left: 0, top: 0 };
  return pos;
}

//

let _scrollBarWidth;
let _scrollBarHeight;

export function measureScrollBar(direction = "vertical") {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return 0;
  }
  const isVertical = direction == "vertical";

  if (isVertical && _scrollBarWidth) return _scrollBarWidth;
  if (!isVertical && _scrollBarHeight) return _scrollBarHeight;

  const div = document.createElement("div");
  const style = {
    position: "absolute",
    top: "-9999px",
    width: "50px",
    height: "50px",
  };
  Object.keys(style).forEach((st) => {
    div.style[st] = style[st];
  });
  if (isVertical) {
    div.style.overflowY = "scroll";
  } else {
    div.style.overflowX = "scroll";
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
