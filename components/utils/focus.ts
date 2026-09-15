const focusableSelector = [
  "[autofocus]",
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

const getFocusableElements = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(
    (element) => !element.hidden && element.getAttribute("aria-hidden") !== "true",
  );

export const createFocusTrap = (getContainer: () => HTMLElement | null | undefined) => {
  let previousFocus: HTMLElement | null = null;

  const activate = () => {
    const active = document.activeElement;
    previousFocus = active instanceof HTMLElement ? active : null;
    queueMicrotask(() => {
      const container = getContainer();
      if (!container) return;
      const first = getFocusableElements(container)[0];
      (first ?? container).focus({ preventScroll: true });
    });
  };

  const deactivate = () => {
    const target = previousFocus;
    previousFocus = null;
    if (target?.isConnected) queueMicrotask(() => target.focus({ preventScroll: true }));
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key !== "Tab") return;
    const container = getContainer();
    if (!container) return;
    const focusable = getFocusableElements(container);
    if (!focusable.length) {
      event.preventDefault();
      container.focus({ preventScroll: true });
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (
      event.shiftKey &&
      (document.activeElement === first || !container.contains(document.activeElement))
    ) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return { activate, deactivate, handleKeydown };
};
