import { Comment, Fragment, Text, cloneVNode, isVNode } from "vue";

export function cloneNodes(vnode:any, props:any, merge = false, cloneTransition?: boolean) {
  return vnode.length == 1
    ? cloneVNode(vnode[0], props, merge)
    : cloneVNode(<span>{vnode}</span>, props, merge, cloneTransition);
}
export function getChildren(VNodes?: any[]) {
  const result: any[] = [];
  const loop = (nodes?: any[]) => {
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

  loop(VNodes);
  return result;
}

let scrollbarWidth: number | null = null;

const getScrollbarWidth = () => {
  if (scrollbarWidth !== null) {
    return scrollbarWidth;
  }

  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  scrollbarWidth = outer.offsetWidth - outer.clientWidth;

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
};
const injectedStyles = new Map<string, HTMLStyleElement>();
export const toggleContainerScroll = (target: HTMLElement | null, lock: boolean) => {
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
