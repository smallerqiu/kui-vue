import { isVNode, Comment, Fragment, Text } from "vue";
export function getChildren(vnodes) {
  const result = [];
  const loop = (nodes) => {
    nodes?.forEach((vnode) => {
      if (!isVNode(vnode)) return;
      if (vnode.type === Comment) return;
      if (vnode.type === Text && vnode.children?.toString().trim() === "") return;

      // 处理 Fragment 节点
      if (vnode.type === Fragment && Array.isArray(vnode.children)) {
        loop(vnode.children);
        return;
      }

      result.push(vnode);
    });
  };

  loop(vnodes);
  return result;
}
