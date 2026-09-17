/** Preview a reorder with transforms; commit data only after the card settles. */
export function startPictureSort(
  event: PointerEvent,
  card: HTMLElement,
  onSort: (oldIndex: number, newIndex: number) => void,
): () => void {
  const parent = card.parentElement;
  if (
    !parent ||
    event.button !== 0 ||
    event.isPrimary === false ||
    (event.target instanceof Element && event.target.closest("button, a, input"))
  )
    return () => {};
  const list = parent;
  const cards = Array.from(
    list.querySelectorAll<HTMLElement>(":scope > .k-upload-file-picture-item"),
  );
  const oldIndex = cards.indexOf(card);
  if (oldIndex < 0 || cards.length < 2) return () => {};
  const rects = cards.map((item) => item.getBoundingClientRect());
  const styles = cards.map((item) => item.getAttribute("style"));
  const origin = rects[oldIndex];
  let newIndex = oldIndex;
  let dragging = false;
  let settling = false;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let clickTimer: ReturnType<typeof setTimeout> | undefined;
  let placeholder: HTMLElement | undefined;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const duration = reducedMotion ? 0 : 180;
  const transition = `transform ${duration}ms ease`;
  const suppressClick = (click: MouseEvent) => {
    click.preventDefault();
    click.stopImmediatePropagation();
  };
  const restore = () => {
    cards.forEach((item, index) => {
      const style = styles[index];
      if (style === null) item.removeAttribute("style");
      else item.setAttribute("style", style);
      item.classList.remove("k-upload-sort-dragging");
    });
    placeholder?.remove();
    list.classList.remove("k-upload-sorting");
  };
  const detach = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    document.removeEventListener("pointercancel", cancel);
    document.removeEventListener("keydown", keydown);
    window.removeEventListener("blur", cancel);
    window.removeEventListener("scroll", cancel, true);
    window.removeEventListener("resize", cancel);
  };
  const cleanup = () => {
    clearTimeout(timer);
    clearTimeout(clickTimer);
    detach();
    document.removeEventListener("click", suppressClick, true);
    restore();
  };
  const place = () => {
    const order = cards.map((_, index) => index);
    order.splice(oldIndex, 1);
    order.splice(newIndex, 0, oldIndex);
    order.forEach((index, slot) => {
      if (index === oldIndex) return;
      cards[index].style.transition = transition;
      cards[index].style.transform =
        `translate3d(${rects[slot].left - rects[index].left}px, ${rects[slot].top - rects[index].top}px, 0)`;
    });
    if (placeholder) {
      placeholder.style.left = `${cards[newIndex].offsetLeft}px`;
      placeholder.style.top = `${cards[newIndex].offsetTop}px`;
    }
  };
  function move(next: PointerEvent) {
    if (next.pointerId !== event.pointerId || settling) return;
    const dx = next.clientX - event.clientX;
    const dy = next.clientY - event.clientY;
    if (!dragging) {
      if (Math.hypot(dx, dy) < 5) return;
      dragging = true;
      document.addEventListener("click", suppressClick, true);
      list.classList.add("k-upload-sorting");
      card.classList.add("k-upload-sort-dragging");
      card.style.transition = "none";
      placeholder = document.createElement("div");
      placeholder.className = "k-upload-sort-placeholder";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.style.width = `${origin.width}px`;
      placeholder.style.height = `${origin.height}px`;
      list.appendChild(placeholder);
      place();
    }
    next.preventDefault();
    card.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    // Hit-test original slots, not the moving cards, to avoid oscillation.
    const hit = rects.findIndex(
      (rect) =>
        next.clientX >= rect.left &&
        next.clientX <= rect.right &&
        next.clientY >= rect.top &&
        next.clientY <= rect.bottom,
    );
    if (hit >= 0 && hit !== newIndex) {
      newIndex = hit;
      place();
    }
  }
  function finish(commit: boolean) {
    if (settling) return;
    settling = true;
    detach();
    if (!dragging) {
      cleanup();
      return;
    }
    if (!commit) newIndex = oldIndex;
    place();
    card.style.transition = transition;
    card.style.transform = `translate3d(${rects[newIndex].left - origin.left}px, ${rects[newIndex].top - origin.top}px, 0)`;
    timer = setTimeout(() => {
      restore();
      if (commit && oldIndex !== newIndex) onSort(oldIndex, newIndex);
    }, duration);
    clickTimer = setTimeout(() => document.removeEventListener("click", suppressClick, true), 350);
  }
  function up(next: PointerEvent) {
    if (next.pointerId !== event.pointerId) return;
    const bounds = list.getBoundingClientRect();
    finish(
      next.clientX >= bounds.left &&
        next.clientX <= bounds.right &&
        next.clientY >= bounds.top &&
        next.clientY <= bounds.bottom,
    );
  }
  function cancel() {
    finish(false);
  }
  function keydown(next: KeyboardEvent) {
    if (next.key === "Escape") {
      next.preventDefault();
      cancel();
    }
  }
  document.addEventListener("pointermove", move, { passive: false });
  document.addEventListener("pointerup", up);
  document.addEventListener("pointercancel", cancel);
  document.addEventListener("keydown", keydown);
  window.addEventListener("blur", cancel);
  window.addEventListener("scroll", cancel, true);
  window.addEventListener("resize", cancel);
  return cleanup;
}
