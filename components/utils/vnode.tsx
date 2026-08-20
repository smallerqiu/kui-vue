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
  paddingRight: string;
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
      paddingRight: target.style.paddingRight,
    };
    const computedPadding = Number.parseFloat(window.getComputedStyle(target).paddingRight) || 0;
    const scrollbarWidth =
      target === document.body
        ? Math.max(0, window.innerWidth - document.documentElement.clientWidth)
        : Math.max(0, target.offsetWidth - target.clientWidth);

    target.style.overflow = "hidden";
    if (scrollbarWidth > 0) target.style.paddingRight = `${computedPadding + scrollbarWidth}px`;
    scrollLocks.set(target, state);
    return;
  }

  const state = scrollLocks.get(target);
  if (!state) return;
  state.count -= 1;
  if (state.count > 0) return;

  target.style.overflow = state.overflow;
  target.style.paddingRight = state.paddingRight;
  scrollLocks.delete(target);
};
