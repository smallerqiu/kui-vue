interface DragOptions {
  swipeable: boolean;
  draggable: boolean;
  vertical: boolean;
  size: number;
  count: number;
  index: number;
  loop: boolean;
}
interface DragCallbacks {
  options: () => DragOptions;
  start: () => number | void;
  offset: (value: number) => void;
  settle?: (duration: number) => void;
  finish: (step: -1 | 0 | 1) => void;
}

// Keep Swiper-style short swipes, with an independent release-speed threshold.
// Gesture distance must not include the previous transition's remaining travel.
const swipeThreshold = 5;
const shortSwipeMs = 300;
const longSwipeRatio = 0.5;
const flickVelocity = 0.5; // px/ms

// Native pointer events keep mouse and touch behavior identical in both renderers.
export function bindCarouselDrag(root: HTMLElement, callbacks: DragCallbacks) {
  let gesture:
    | {
        id: number;
        x: number;
        y: number;
        axis: boolean;
        delta: number;
        base: number;
        last: number;
        time: number;
        velocity: number;
        started: number;
        samples: { time: number; delta: number }[];
        options: DragOptions;
        mouse: boolean;
      }
    | undefined;
  let suppressClickUntil = 0;
  const view = root.ownerDocument.defaultView!;
  const changed = (active: NonNullable<typeof gesture>, options: DragOptions) =>
    active.options.vertical !== options.vertical ||
    active.options.size !== options.size ||
    active.options.count !== options.count ||
    active.options.index !== options.index ||
    active.options.loop !== options.loop ||
    (active.mouse ? !options.draggable : !options.swipeable);
  const finish = (cancel = false) => {
    const active = gesture;
    if (!active) return;
    gesture = undefined;
    const options = callbacks.options();
    const distance = Math.abs(active.delta);
    const now = performance.now();
    const velocity = active.velocity * Math.max(0, 1 - (now - active.time) / 140);
    const shortSwipe = now - active.started <= shortSwipeMs;
    const progress = distance / options.size;
    const flick =
      Math.sign(velocity) === Math.sign(active.delta) && Math.abs(velocity) >= flickVelocity;
    const step =
      !cancel &&
      !changed(active, options) &&
      active.axis &&
      distance >= swipeThreshold &&
      (shortSwipe || flick || progress >= longSwipeRatio)
        ? active.delta < 0
          ? 1
          : -1
        : 0;
    if (active.axis) suppressClickUntil = Date.now() + 400;
    const atEdge =
      !options.loop && (options.index + step < 0 || options.index + step >= options.count);
    const target = atEdge ? 0 : -step * options.size;
    const remaining = Math.abs(
      target - Math.max(-options.size, Math.min(options.size, active.base + active.delta)),
    );
    // Continue the release motion and decelerate into an adjacent snap point.
    const duration =
      !cancel && step && !atEdge
        ? Math.max(140, Math.min(280, (remaining * 1.5) / Math.max(0.5, Math.abs(velocity))))
        : 200;
    if (active.axis) callbacks.settle?.(duration);
    callbacks.offset(0);
    callbacks.finish(step);
    if (root.hasPointerCapture?.(active.id)) root.releasePointerCapture(active.id);
  };
  const down = (event: PointerEvent) => {
    if (gesture) {
      if (event.pointerId !== gesture.id) finish(true);
      return;
    }
    const options = callbacks.options();
    const target = event.target as HTMLElement;
    if (
      (target !== root && !target.closest?.(".k-carousel-wrapper")) ||
      target.closest(".k-carousel") !== root ||
      target.closest(
        "input, textarea, select, button, [contenteditable]:not([contenteditable=false])",
      ) ||
      options.count < 2 ||
      options.size <= 0 ||
      event.isPrimary === false ||
      event.button !== 0 ||
      (event.pointerType === "mouse" ? !options.draggable : !options.swipeable)
    )
      return;
    suppressClickUntil = 0;
    const now = performance.now();
    gesture = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      axis: false,
      delta: 0,
      base: 0,
      last: 0,
      time: now,
      velocity: 0,
      started: now,
      samples: [{ time: now, delta: 0 }],
      options: { ...options },
      mouse: event.pointerType === "mouse",
    };
    gesture.base = callbacks.start() ?? 0;
    callbacks.offset(gesture.base);
  };
  const move = (event: PointerEvent) => {
    if (!gesture || event.pointerId !== gesture.id) return;
    const options = callbacks.options();
    if (changed(gesture, options)) {
      finish(true);
      return;
    }
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    const delta = options.vertical ? dy : dx;
    const cross = options.vertical ? dx : dy;
    if (!gesture.axis) {
      if (Math.max(Math.abs(delta), Math.abs(cross)) < swipeThreshold) return;
      if (Math.abs(cross) > Math.abs(delta)) {
        finish(true);
        return;
      }
      gesture.axis = true;
      if (event.type === "pointermove") root.setPointerCapture?.(event.pointerId);
    }
    if (event.cancelable) event.preventDefault();
    const now = performance.now();
    if (delta !== gesture.last) {
      gesture.samples.push({ time: now, delta });
      while (gesture.samples.length > 2 && gesture.samples[0].time < now - 80)
        gesture.samples.shift();
      const sample = gesture.samples[0];
      gesture.velocity = (delta - sample.delta) / Math.max(1, now - sample.time);
      gesture.time = now;
    }
    gesture.last = delta;
    gesture.delta = delta;
    const atEdge =
      !options.loop &&
      ((options.index === 0 && delta > 0) || (options.index === options.count - 1 && delta < 0));
    callbacks.offset(
      gesture.base + Math.max(-options.size, Math.min(options.size, delta * (atEdge ? 0.3 : 1))),
    );
  };
  const up = (event: PointerEvent) => {
    // Touch starts with implicit capture on the slide. Transferring capture to
    // the root emits a bubbling lostpointercapture from that child, not a cancel.
    if (event.type === "lostpointercapture" && event.target !== root) return;
    // The final movement can arrive only with pointerup when input events are coalesced.
    if (
      event.type === "pointerup" &&
      gesture?.id === event.pointerId &&
      (event.clientX !== gesture.x + (gesture.options.vertical ? 0 : gesture.last) ||
        event.clientY !== gesture.y + (gesture.options.vertical ? gesture.last : 0))
    )
      move(event);
    if (gesture?.id === event.pointerId) finish(event.type !== "pointerup");
  };
  const blur = () => finish(true);
  const click = (event: MouseEvent) => {
    if (Date.now() < suppressClickUntil && event.detail !== 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const nativeDrag = (event: DragEvent) => {
    if (gesture) event.preventDefault();
  };
  root.addEventListener("pointerdown", down);
  root.addEventListener("click", click, true);
  root.addEventListener("dragstart", nativeDrag);
  root.addEventListener("lostpointercapture", up);
  view.addEventListener("pointermove", move, { passive: false });
  view.addEventListener("pointerup", up);
  view.addEventListener("pointercancel", up);
  view.addEventListener("blur", blur);
  return () => {
    const active = gesture;
    gesture = undefined;
    if (active && root.hasPointerCapture?.(active.id)) root.releasePointerCapture(active.id);
    root.removeEventListener("pointerdown", down);
    root.removeEventListener("click", click, true);
    root.removeEventListener("dragstart", nativeDrag);
    root.removeEventListener("lostpointercapture", up);
    view.removeEventListener("pointermove", move);
    view.removeEventListener("pointerup", up);
    view.removeEventListener("pointercancel", up);
    view.removeEventListener("blur", blur);
  };
}

// Retarget a loop from its rendered position, not the previous destination.
// The surrounding repeated slides make rebasing by a full cycle invisible.
export function retargetCarousel(
  root: HTMLElement,
  vertical: boolean,
  size: number,
  count: number,
  next: number,
  step: number,
) {
  const track = root.querySelector<HTMLElement>(".k-carousel-wrapper");
  if (!track || !size) return next + 1;
  const rendered = -readCarouselOffset(root, vertical, 0, size) / size;
  const visible = ((((rendered - 1) % count) + count) % count) + 1;
  let target = next + 1;
  if (step > 0 && target < visible) target += count;
  if (step < 0 && target > visible) target -= count;
  const duration = track.style.transitionDuration;
  track.style.transitionDuration = "0s";
  track.style.transform = vertical
    ? `translate3d(0, ${-visible * size}px, 0)`
    : `translate3d(${-visible * size}px, 0, 0)`;
  track.getBoundingClientRect();
  track.style.transitionDuration = duration;
  // Also write the destination for several imperative calls in one render batch,
  // where the final virtual-DOM transform may equal its previous value.
  track.style.transform = vertical
    ? `translate3d(0, ${-target * size}px, 0)`
    : `translate3d(${-target * size}px, 0, 0)`;
  return target;
}

// Preserve the rendered (interpolated) position when interrupting a CSS transition.
export function readCarouselOffset(
  root: HTMLElement,
  vertical: boolean,
  position: number,
  size: number,
) {
  const track = root.querySelector<HTMLElement>(".k-carousel-wrapper");
  if (!track) return 0;
  const transform = root.ownerDocument.defaultView!.getComputedStyle(track).transform;
  const values = transform
    .slice(transform.indexOf("(") + 1, -1)
    .split(",")
    .map(parseFloat);
  const offset = transform.startsWith("matrix3d")
    ? values[vertical ? 13 : 12]
    : transform.startsWith("matrix")
      ? values[vertical ? 5 : 4]
      : transform.startsWith("translate3d")
        ? values[vertical ? 1 : 0]
        : undefined;
  return Number.isFinite(offset) ? offset! + position * size : 0;
}
