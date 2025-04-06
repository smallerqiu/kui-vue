export function getChildren(vnodes) {
  // 处理子组件为 v-for 构建
  let children = [];
  for (let i = 0; i < vnodes?.length; i++) {
    const vnode = vnodes[i];
    if (Array.isArray(vnode.children)) {
      children = children.concat(vnode.children);
    } else {
      children.push(vnode);
    }
  }
  return children;
}
