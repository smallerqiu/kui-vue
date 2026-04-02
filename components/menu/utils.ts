export function getParent(vnode, key:string) {
  let node = vnode || {};
  if (vnode && vnode[key]) {
    node = getParent(vnode[key], key);
  }
  return node;
}
