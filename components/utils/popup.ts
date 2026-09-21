/** One pending frame per owner; callbacks are replaced by the latest request. */
export function createFrameScheduler() {
  let frame: number | undefined;
  const cancel = () => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = undefined;
  };
  const schedule = (callback: FrameRequestCallback) => {
    cancel();
    frame = requestAnimationFrame((time) => {
      frame = undefined;
      callback(time);
    });
  };
  return { schedule, cancel };
}

type PopupElement = Node | { $el: Node } | null | undefined;

function elementOf(element: PopupElement): Node | null | undefined {
  return element && "$el" in element ? element.$el : element;
}

/** Includes composed paths so clicks inside a shadow-root trigger are not treated as outside. */
export function isEventOutside(event: Event, elements: PopupElement[], requireAll = true) {
  const nodes = elements.map(elementOf);
  if (requireAll && nodes.some((node) => !node)) return false;
  const target = event.target;
  if (!(target instanceof Node)) return false;
  const path = event.composedPath();
  return nodes.every((node) => !node || (!node.contains(target) && !path.includes(node)));
}
