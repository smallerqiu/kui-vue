interface MenuKeyboardEvent {
  key: string;
  currentTarget: EventTarget | null;
  preventDefault: () => void;
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
  items[nextIndex]?.focus();
  event.preventDefault();
};
