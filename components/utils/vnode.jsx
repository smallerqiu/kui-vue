// import { isVNode, Comment, Fragment, Text, cloneVNode } from "vue"; // for v3
// import Vue from "vue";
// const { Comment, Fragment, Text } = Vue;
import hashId from "hash-sum";
import { isVNode, cloneVNode } from "../utils/vue";
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
let scrollbarWidth = null;

const getScrollbarWidth = () => {
  if (scrollbarWidth !== null) {
    return scrollbarWidth;
  }

  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  outer.style.msOverflowStyle = "scrollbar";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  scrollbarWidth = outer.offsetWidth - outer.clientWidth;

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
};
const injectedStyles = new Map();
export const toggleContainerScroll = (target, lock) => {
  if (!target || target != document.body) return;
  if (lock) {
    if (injectedStyles.has("body")) return;
    const scrollbarWidth = getScrollbarWidth();
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    const styleContent = `html body { overflow: hidden !important; width: calc(100vw - ${scrollbarWidth}px); }`;
    styleElement.appendChild(document.createTextNode(styleContent));
    document.head.appendChild(styleElement);

    injectedStyles.set("body", styleElement);
  } else {
    // 移除对应的样式
    const styleElement = injectedStyles.get("body");
    if (styleElement && styleElement.parentNode) {
      styleElement.parentNode.removeChild(styleElement);
      injectedStyles.delete("body");
    }
  }
};
