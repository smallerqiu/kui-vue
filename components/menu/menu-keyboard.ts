interface MenuKeyboardEvent {
  key: string;
  currentTarget: EventTarget | null;
  preventDefault: () => void;
  stopPropagation: () => void;
}

export const handleMenuItemKeydown = (event: MenuKeyboardEvent, activate: () => void) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activate();
    return;
  }

  const menu = (event.currentTarget as HTMLElement).closest("ul");
  if (!menu) return;
  const horizontal = menu.classList.contains("k-menu-horizontal");
  const previousKey = horizontal ? "ArrowLeft" : "ArrowUp";
  const nextKey = horizontal ? "ArrowRight" : "ArrowDown";
  if (![previousKey, nextKey, "Home", "End"].includes(event.key)) return;

  const items = Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
    (item) =>
      item.closest("ul") === menu &&
      item.getAttribute("aria-disabled") !== "true" &&
      item.getClientRects().length > 0,
  );
  if (!items.length) return;
  const current = items.indexOf(event.currentTarget as HTMLElement);
  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? items.length - 1
        : (Math.max(current, 0) + (event.key === nextKey ? 1 : -1) + items.length) % items.length;
  event.preventDefault();
  items[nextIndex]?.focus({ preventScroll: true });
};

/**
 * The first menu item directly inside `list`. Nested submenu lists and group lists own
 * their items, so they are skipped. Unlike sibling navigation this does not require a
 * laid-out box, because it runs right after the list has just been opened.
 */
export const firstMenuItemOf = (list: HTMLElement | null): HTMLElement | null => {
  if (!list) return null;
  const items = Array.from(list.querySelectorAll<HTMLElement>('[role="menuitem"]')).filter(
    (item) => item.closest("ul") === list && item.getAttribute("aria-disabled") !== "true",
  );
  return items[0] ?? null;
};

/**
 * Expands a submenu with the arrow that belongs to the orientation of the list holding it
 * (ArrowDown inside a horizontal menubar, ArrowRight inside a vertical/inline menu), and
 * with Enter/Space while it is still closed. Returns `true` when the event was consumed.
 */
export const handleSubMenuTitleKeydown = (
  event: MenuKeyboardEvent,
  state: { isMenubarItem: boolean; opened: boolean },
  actions: { expandAndFocusFirst: () => void },
) => {
  const expandKey = state.isMenubarItem ? "ArrowDown" : "ArrowRight";
  if (event.key === expandKey) {
    event.preventDefault();
    actions.expandAndFocusFirst();
    return true;
  }
  if (!state.opened && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    actions.expandAndFocusFirst();
    return true;
  }
  return false;
};

/**
 * Escape inside an open submenu closes just that level and hands focus back to its
 * trigger, so nested levels unwind one step at a time.
 */
export const handleSubMenuListKeydown = (
  event: MenuKeyboardEvent,
  closeAndRefocusTrigger: () => void,
) => {
  if (event.key !== "Escape") return false;
  event.preventDefault();
  event.stopPropagation();
  closeAndRefocusTrigger();
  return true;
};
