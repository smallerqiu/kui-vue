import { Comment, Fragment, Text, cloneVNode, isVNode, type VNode } from "vue";

export function cloneNodes(
  vnode: VNode[],
  props: Record<string, unknown>,
  merge = false,
  cloneTransition?: boolean,
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

/**
 * The appearance keys a group hands down as *inherited*, minus the ones the child already states.
 *
 * A control picks its own look with "what was written on me, else what I inherited" — `useFormAppearance`
 * decides that by reading `hasOwnProperty` on the control's own vnode props. A group has no injection
 * channel of its own here: handing a tier or a size down *is* writing it on the child's vnode, and
 * `cloneVNode(child, props, true)` overwrites the child's own value, so an unconditional patch makes the
 * group's value look like the child wrote it and silently outranks an explicit `theme` / `size` /
 * `shape`. Dropping the keys the child wrote is what makes this side agree with the react build, where
 * the item reads `props ?? group ?? provider`.
 */
export const inheritableAppearance = (
  child: VNode,
  values: Record<string, unknown>,
): Record<string, unknown> =>
  Object.fromEntries(
    Object.entries(values).filter(
      ([name]) => !Object.prototype.hasOwnProperty.call(child.props ?? {}, name),
    ),
  );

/**
 * Whether an optional content prop deserves its wrapper element.
 *
 * `null` and `undefined` are the documented way to omit a slot, but callers also
 * pass `false` (a conditional like `isAdmin && <Icon />`) or an empty string, and
 * the framework renders `false` as nothing while still mounting the wrapper —
 * which keeps its padding, border and flex gap in the layout with nothing inside
 * it. Numbers count as content, including `0`.
 *
 * Slot output arrives as VNodes, so the vnode rules below are where this differs
 * from the React build; the value rules above are shared.
 */
export function hasRenderableContent(value: unknown): boolean {
  if (value == null || value === false || value === true) return false;
  if (typeof value === "string") return value.trim() !== "";
  if (isVNode(value)) {
    if (value.type === Comment) return false;
    if (typeof value.children === "string") return value.children.trim() !== "";
    if (Array.isArray(value.children)) return value.children.some(hasRenderableContent);
    return true;
  }
  if (Array.isArray(value)) return value.some(hasRenderableContent);
  return true;
}

// 两个仓库这段实现逐字符相同（vue 在 utils/vnode.tsx，react 在 utils/react-node.tsx）：
// 弹层可以叠着开，锁必须引用计数，否则先关的那一层会把还开着的层的滚动锁一起解掉。
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
