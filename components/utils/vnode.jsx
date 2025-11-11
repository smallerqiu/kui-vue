// import { isVNode, Comment, Fragment, Text, cloneVNode } from "vue"; // for v3
import Vue from "vue";
const { Comment, Fragment, Text } = Vue;

import { isVNode, cloneVNode } from "../utils/vue";
export function cloneNodes(vnode, props, merge = false, transition = false) {
  return vnode.length == 1
    ? cloneVNode(vnode[0], props, merge, transition)
    : cloneVNode(<span>{vnode}</span>, props, merge, transition);
}
export function getChildren(VNodes) {
  const result = [];
  const loop = (nodes) => {
    nodes?.forEach((vnode) => {
      if (!isVNode(vnode)) return;

      if (vnode.isComment) return;

      if (!vnode.tag && vnode.text?.toString().trim() === "") return;

      if (!vnode.tag && Array.isArray(vnode.children)) {
        loop(vnode.children);
        return;
      }

      result.push(vnode);
    });
  };

  loop(VNodes);
  return result;
}
export function getChildrenV3(VNodes) {
  const result = [];
  const loop = (nodes) => {
    nodes?.forEach((vnode) => {
      if (!isVNode(vnode)) return;
      console.log(vnode.type);
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
