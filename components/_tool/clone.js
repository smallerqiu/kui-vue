// import _ from 'lodash'
const pick = require('lodash.pick');
const assign = require('lodash.assign');
const DATA_KEYS = [
  'class', 'staticClass', 'style', 'staticStyle',
  'attrs', 'props', 'domProps',
  'on', 'nativeOn',
  'directives', 'scopedSlots',
  'slot', 'ref', 'key', 'refInFor'
]

// let cid = 0
// function mutateKey(key) {
//   return '' + key + `-cloned-${cid++}`
// }
// function pick(obj, keys) {
//   return keys.reduce((acc, key) => {
//     if (obj[key] !== undefined) {
//       acc[key] = obj[key];
//     }
//     return acc;
//   }, {});
// }

// function assign(...objs) {
//   if (objs.length === 0) {
//     return {};
//   }

//   const result = {};

//   for (const obj of objs) {
//     for (const [key, value] of Object.entries(obj)) {
//       result[key] = value;
//     }
//   }

//   return result;
// }

function extractData(vnode, isComp) {
  const data = pick(vnode.data, DATA_KEYS)
  if (isComp) {
    const cOpts = vnode.componentOptions
    assign(data, {
      props: cOpts.propsData,
      on: cOpts.listeners
    })
  }

  // if (data.key) {
  //   data.key = mutateKey(data.key)
  // }

  return data
}

export default function cloneVNode2(vnode, createElement) {
  const cloned = createElement(vnode.tag, vnode.data, vnode.children);
  cloned.text = vnode.text;
  cloned.isComment = vnode.isComment;
  cloned.componentOptions = vnode.componentOptions;
  cloned.elm = vnode.elm;
  cloned.context = vnode.context;
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned;
}

export default function cloneVNode(vnode, options = {}, child) {
  if (!vnode) return vnode
  // use the context that the original vnode was created in.
  const h = vnode.context && vnode.context.$createElement
  const isComp = !!vnode.componentOptions
  const isText = !vnode.tag // this will also match comments but those will be dropped, essentially
  let children = isComp
    ? vnode.componentOptions.children
    : vnode.children
  if (child) {
    children = (children || []).concat(child)
  }
  if (isText) return vnode.text

  let data = extractData(vnode, isComp)

  // let { attrs, props, style } = data
  // data.props = { ...props, ...options.props }
  // data.attrs = { ...attrs, ...options.attrs }
  // data.style = { ...style, ...options.style }

  let ops1 = { ...options }
  let ops2 = { ...data }

  for (let key in ops1) {
    key != 'on' && (data[key] = { ...ops2[key], ...options[key] })
  }

  let nEven = { ...options.on };
  let oEven = { ...data.on }

  for (let eKey in nEven) {
    nEven[eKey] = (e) => {
      options.on[eKey](e)
      oEven[eKey] && oEven[eKey](e)
    }
  }
  data.on = { ...oEven, ...nEven }
  // console.log(data, oEven, nEven)
  const tag = isComp
    ? vnode.componentOptions.Ctor
    : vnode.tag
  // const childNodes = children ? children.map(c => cloneVNode(c)) : undefined
  // return h(tag, data, children)
  // let c = cloneNode(vnode,)
  // return 

  const cloned = new vnode.constructor(
    vnode.tag,
    data,//vnode.data,
    children,// vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions, // vnode.componentOptions
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