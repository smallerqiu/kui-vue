import { Comment, Fragment, Text, cloneVNode, isVNode, type VNode } from "vue";

export function cloneNodes(
  vnode: VNode[],
  props: Record<string, unknown>,
  merge = false,
  cloneTransition?: boolean
) {
  return vnode.length == 1 && vnode[0].type !== Text
    ? cloneVNode(vnode[0], props, merge)
    : cloneVNode(<span>{vnode}</span>, props, merge, cloneTransition);
}
export function getChildren(VNodes?: unknown[]) {
  const result: VNode[] = [];
  VNodes?.forEach((vnode) => {
    if (!isVNode(vnode)) return;
    if (vnode.type === Comment) return;
    if (vnode.type === Text && vnode.children?.toString().trim() === "") return;

    // 处理 Fragment 节点
    if (vnode.type === Fragment && Array.isArray(vnode.children)) {
      result.push(...getChildren(vnode.children));
      return;
    }

    result.push(vnode);
  });
  return result;
}

interface ScrollLockState {
  count: number;
  overflow: string;
  overflowY: string;
  width: string;
  paddingRight: string;
  scrollbarWidth: string;
  hadLockClass: boolean;
}

const scrollLocks = new Map<HTMLElement, ScrollLockState>();

export const toggleContainerScroll = (target: HTMLElement | null, lock: boolean) => {
  if (!target || typeof window === "undefined") return;

  if (lock) {
    const current = scrollLocks.get(target);
    if (current) {
      current.count += 1;
      return;
    }

    const state: ScrollLockState = {
      count: 1,
      overflow: target.style.overflow,
      overflowY: target.style.overflowY,
      width: target.style.width,
      paddingRight: target.style.paddingRight,
      scrollbarWidth: target.style.getPropertyValue("--kui-scrollbar-width"),
      hadLockClass: target.classList.contains("k-scroll-locked"),
    };
    const computedPadding = Number.parseFloat(window.getComputedStyle(target).paddingRight) || 0;
    const scrollbarWidth =
      target === document.body
        ? Math.max(0, window.innerWidth - document.documentElement.clientWidth)
        : Math.max(0, target.offsetWidth - target.clientWidth);

    target.classList.add("k-scroll-locked");
    target.style.setProperty("--kui-scrollbar-width", `${scrollbarWidth}px`);
    if (target === document.body) {
      target.style.overflowY = "hidden";
      // target.style.width = `calc(100% - ${scrollbarWidth}px)`;
    } else {
      target.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        target.style.paddingRight = `${computedPadding + scrollbarWidth}px`;
      }
    }
    scrollLocks.set(target, state);
    return;
  }

  const state = scrollLocks.get(target);
  if (!state) return;
  state.count -= 1;
  if (state.count > 0) return;

  target.style.overflow = state.overflow;
  target.style.overflowY = state.overflowY;
  target.style.width = state.width;
  target.style.paddingRight = state.paddingRight;
  if (state.scrollbarWidth) {
    target.style.setProperty("--kui-scrollbar-width", state.scrollbarWidth);
  } else {
    target.style.removeProperty("--kui-scrollbar-width");
  }
  if (!state.hadLockClass) target.classList.remove("k-scroll-locked");
  scrollLocks.delete(target);
};
