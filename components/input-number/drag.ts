import Big from "big.js";

interface DragOptions {
  value: string;
  step: number | string;
  blocked: () => boolean;
  update: (value: string) => void;
}

/** Start-relative movement keeps speed independent of pointer-event frequency. */
export function startNumberDrag(
  event: Pick<
    PointerEvent,
    "button" | "isPrimary" | "clientX" | "pointerId" | "currentTarget" | "preventDefault"
  >,
  options: DragOptions,
): () => void {
  if (event.button !== 0 || event.isPrimary === false || options.blocked()) return () => {};
  event.preventDefault();
  const handle = event.currentTarget as HTMLElement;
  const input = handle.parentElement?.querySelector("input");
  const startX = event.clientX;
  const initial = new Big(options.value || 0);
  let step = new Big(1);
  try {
    const candidate = new Big(options.step);
    if (candidate.gt(0)) step = candidate;
  } catch {
    /* Match keyboard and button fallback. */
  }
  let moved = false;
  let previous = initial.toFixed();
  const move = (next: PointerEvent) => {
    if (next.pointerId !== event.pointerId) return;
    if (options.blocked()) {
      cleanup();
      return;
    }
    const delta = next.clientX - startX;
    if (!moved && Math.abs(delta) < 4) return;
    moved = true;
    if (next.cancelable) next.preventDefault();
    const distance = Math.abs(delta);
    const steps = Math.floor((distance / 4) * (1 + Math.min(9, distance / 80)));
    const value = initial.plus(step.times(delta < 0 ? -steps : steps)).toFixed();
    if (value !== previous) {
      previous = value;
      options.update(value);
    }
  };
  const up = (next: PointerEvent) => {
    if (next.pointerId !== event.pointerId) return;
    cleanup();
    if (!moved && !options.blocked()) input?.focus();
  };
  const cancel = (next: PointerEvent) => {
    if (next.pointerId === event.pointerId) cleanup();
  };
  const cleanup = () => {
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerup", up);
    document.removeEventListener("pointercancel", cancel);
    window.removeEventListener("blur", cleanup);
  };
  document.addEventListener("pointermove", move, { passive: false });
  document.addEventListener("pointerup", up);
  document.addEventListener("pointercancel", cancel);
  window.addEventListener("blur", cleanup);
  return cleanup;
}
