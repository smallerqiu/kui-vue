import { isVNode, Comment, Fragment, Text, cloneVNode } from "vue";

export function cloneNodes(vnode, props, merge = false, child) {
  return vnode.length == 1
    ? cloneVNode(vnode[0], props, merge)
    : cloneVNode(<span>{vnode}</span>, props, merge, child);
}
export function getChildren(VNodes) {
  const result = [];
  const loop = (nodes) => {
    nodes?.forEach((vnode) => {
      if (!isVNode(vnode)) return;
      if (vnode.type === Comment) return;
      if (vnode.type === Text && vnode.children?.toString().trim() === "")
        return;

      // 处理 Fragment 节点
      if (vnode.type === Fragment && Array.isArray(vnode.children)) {
        loop(vnode.children);
        return;
      }

      result.push(vnode);
    });
  };

  loop(VNodes);
  return result;
}
