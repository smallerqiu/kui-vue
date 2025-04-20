import { isVNode, Comment, Fragment, Text } from "vue";
export function getChildren(vnodes) {
  // const childs = [];
  // for(let i = 0; i < vnodes?.length; i++){
  //   if (isVNode(vnodes[i])) {
  //     childs.push(vnodes[i]);
  //   }
  //   if (vnodes[i].type === Comment) continue;
  //   if (vnodes[i].type === Text) {
  //     if (vnodes[i].children?.toString().trim() !== "") {
  //       // childs.push(vnodes[i]);
  //     }
  //   }
  //   if (vnodes[i].children && vnodes[i].children.length == 0) continue;
  //   if (vnodes[i].type === Fragment && Array.isArray(vnodes[i].children)) {
  //     // childs.push(...getChildren(vnodes[i].children));
  //     childs.push(...vnodes[i].children);
  //   }
  // }
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

  // return childs;
  // const result = [];

  // const loop = (nodes) => {
  //   nodes?.forEach((vnode) => {
  //     if (!isVNode(vnode)) return;
  //     if (vnode.type === Comment) return;
  //     if (vnode.type === Text && vnode.children?.toString().trim() === "") return;

  //     // 处理 Fragment 节点
  //     if (vnode.type === Fragment && Array.isArray(vnode.children)) {
  //       loop(vnode.children);
  //       return;
  //     }

  //     result.push(vnode);
  //   });
  //   return result;
  // };
}
