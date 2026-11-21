export type PanelSize = number | string;
export interface PanelOptions {
  key: string;
  size?: PanelSize;
  min?: PanelSize;
  max?: PanelSize;
  resizable: boolean;
  collapsible: boolean;
  collapsed?: boolean;
}
export interface SplitterState {
  sizes: number[];
  min: number[];
  max: number[];
  collapsed: boolean[];
  dragging: number | null;
  preview: number | null;
}
interface SplitterOptions {
  panels: PanelOptions[];
  direction: "horizontal" | "vertical";
  disabled: boolean;
  lazy: boolean;
  value?: number[];
  onState: (state: SplitterState) => void;
  onChange: (sizes: number[]) => void;
  onResize: (sizes: number[]) => void;
  onResizeStart: (sizes: number[]) => void;
  onResizeEnd: (sizes: number[]) => void;
  onCollapse: (index: number, collapsed: boolean) => void;
}
export const emptyState = (): SplitterState => ({
  sizes: [],
  min: [],
  max: [],
  collapsed: [],
  dragging: null,
  preview: null,
});
const finite = (value: number) => (Number.isFinite(value) ? Math.max(0, value) : null);
export const parseSize = (value: PanelSize | undefined, total: number): number | null => {
  if (value === undefined || value === "") return null;
  if (typeof value === "number") return finite(value);
  if (typeof value !== "string") return null;
  const match = /^([+-]?(?:\d+\.?\d*|\.\d+))\s*(%|px)?$/.exec(value.trim());
  return match ? finite(Number(match[1]) * (match[2] === "%" ? total / 100 : 1)) : null;
};
const same = (a: number[], b: number[]) =>
  a.length === b.length &&
  a.every((size, i) => Object.is(size, b[i]) || Math.abs(size - b[i]) < 0.001);
const round = (sizes: number[]) => sizes.map((size) => Number(size.toFixed(3)));

// Clamp first, then distribute remaining space among panels with capacity.
export function fitSizes(requested: number[], min: number[], max: number[], total: number) {
  const result = requested.map((size, i) => Math.max(min[i], Math.min(max[i], size)));
  for (let pass = 0; pass <= result.length; pass++) {
    const delta = total - result.reduce((sum, size) => sum + size, 0);
    if (Math.abs(delta) < 0.001) break;
    const available = result.map((size, i) => (delta > 0 ? max[i] - size : size - min[i]));
    const count = available.filter((capacity) => capacity > 0.001).length;
    if (!count) break;
    result.forEach((size, i) => {
      if (available[i] > 0.001)
        result[i] = size + Math.sign(delta) * Math.min(available[i], Math.abs(delta) / count);
    });
  }
  return result;
}

export function createSplitterController() {
  let options: SplitterOptions;
  let container: HTMLElement | undefined;
  let observer: ResizeObserver | undefined;
  let state = emptyState();
  let signature = "";
  let previousPanels: PanelOptions[] = [];
  let previousValue: number[] | undefined;
  let total = 0;
  let initialized = false;
  const remembered = new Map<string, number>();
  let drag:
    | {
        index: number;
        id: number;
        start: number;
        sizes: number[];
        proposed: number[];
        target: HTMLElement;
        cursor: string;
        userSelect: string;
        hadClass: boolean;
      }
    | undefined;
  let frame = 0;
  let resizeFrame = 0;
  let pending: number | undefined;
  const publish = () =>
    options.onState({
      ...state,
      sizes: [...state.sizes],
      min: [...state.min],
      max: [...state.max],
      collapsed: [...state.collapsed],
    });
  const emitChange = () => options.onChange(round(state.sizes));
  const horizontal = () => options.direction === "horizontal";
  const coordinate = (event: Pick<PointerEvent, "clientX" | "clientY">) =>
    horizontal() ? event.clientX : event.clientY;
  const measure = () => {
    if (!container) return 0;
    const rect = container.getBoundingClientRect();
    const style = getComputedStyle(container);
    const num = (value: string) => Number.parseFloat(value) || 0;
    const border = (width: string, line: string) =>
      !line || line === "none" || line === "hidden" ? 0 : num(width);
    const extent = horizontal()
      ? rect.width -
        border(style.borderLeftWidth, style.borderLeftStyle) -
        border(style.borderRightWidth, style.borderRightStyle) -
        num(style.paddingLeft) -
        num(style.paddingRight)
      : rect.height -
        border(style.borderTopWidth, style.borderTopStyle) -
        border(style.borderBottomWidth, style.borderBottomStyle) -
        num(style.paddingTop) -
        num(style.paddingBottom);
    return Math.max(0, extent - Math.max(0, options.panels.length - 1) * 4);
  };
  const bounds = (available: number, collapsed: boolean[]) => {
    const min = options.panels.map((p, i) =>
      collapsed[i] ? 0 : (parseSize(p.min, available) ?? 0),
    );
    const max = options.panels.map((p, i) =>
      collapsed[i] ? 0 : Math.max(min[i], parseSize(p.max, available) ?? available),
    );
    // When constraints cannot fit the container, containment takes precedence.
    const minimum = min.reduce((sum, size) => sum + size, 0);
    if (minimum > available)
      min.forEach((size, i) => {
        min[i] = (size * available) / minimum;
      });
    const maximum = max.reduce((sum, size) => sum + size, 0);
    const last = collapsed.lastIndexOf(false);
    if (maximum < available && last !== -1) max[last] += available - maximum;
    return { min, max };
  };
  const sync = () => {
    if (!container || !options) return;
    const nextTotal = measure();
    // A hidden container has no usable geometry. Keep its last valid layout.
    if (nextTotal <= 0 || !options.panels.length) return;
    const oldByKey = new Map(previousPanels.map((p, i) => [p.key, i]));
    const collapsed = options.panels.map((p) => {
      const old = oldByKey.get(p.key);
      return old === undefined || p.collapsed !== previousPanels[old]?.collapsed
        ? !!p.collapsed
        : !!state.collapsed[old];
    });
    // Keep one panel visible even if all supplied flags request collapse.
    if (collapsed.every(Boolean)) collapsed[collapsed.length - 1] = false;
    const limits = bounds(nextTotal, collapsed);
    const valueChanged =
      options.value !== undefined && (!previousValue || !same(options.value, previousValue));
    const raw = options.panels.map((p, i) => {
      const old = oldByKey.get(p.key);
      if (collapsed[i]) {
        if (old !== undefined && state.sizes[old] > 0) remembered.set(p.key, state.sizes[old]);
        return 0;
      }
      if (valueChanged && options.value?.[i] !== undefined) return finite(options.value[i]) ?? null;
      if (!initialized || old === undefined || p.size !== previousPanels[old]?.size)
        return parseSize(p.size, nextTotal);
      if (state.collapsed[old]) return remembered.get(p.key) ?? parseSize(p.size, nextTotal);
      return state.sizes[old];
    });
    const membershipChanged =
      previousPanels.length !== options.panels.length ||
      options.panels.some((p) => !oldByKey.has(p.key));
    if (initialized && membershipChanged && !valueChanged) {
      const openCount = collapsed.filter((value) => !value).length;
      raw.forEach((size, i) => {
        if (size === null) raw[i] = nextTotal / openCount;
      });
      const flexible = options.panels
        .map((p, i) => (oldByKey.has(p.key) && p.resizable && !collapsed[i] ? i : -1))
        .filter((i) => i >= 0);
      const fixed = raw.reduce<number>(
        (sum, size, i) => sum + (flexible.includes(i) ? 0 : (size ?? 0)),
        0,
      );
      const previous = flexible.reduce((sum, i) => sum + (raw[i] ?? 0), 0);
      if (previous > 0)
        flexible.forEach((i) => {
          raw[i] = ((raw[i] ?? 0) * Math.max(0, nextTotal - fixed)) / previous;
        });
    }
    const expanding = options.panels.map((p, i) => {
      const old = oldByKey.get(p.key);
      return old !== undefined && state.collapsed[old] && !collapsed[i];
    });
    if (initialized && expanding.some(Boolean) && !valueChanged) {
      const restored = raw.reduce<number>(
        (sum, size, i) => sum + (expanding[i] ? (size ?? 0) : 0),
        0,
      );
      const remainder = raw.reduce<number>(
        (sum, size, i) => sum + (expanding[i] ? 0 : (size ?? 0)),
        0,
      );
      if (remainder > 0)
        raw.forEach((size, i) => {
          if (!expanding[i]) raw[i] = ((size ?? 0) * Math.max(0, nextTotal - restored)) / remainder;
        });
    }
    if (initialized && total !== nextTotal && total > 0 && !valueChanged) {
      const flexible = options.panels
        .map((p, i) => (p.resizable && !collapsed[i] ? i : -1))
        .filter((i) => i >= 0);
      const fixed = raw.reduce<number>(
        (sum, size, i) => sum + (flexible.includes(i) ? 0 : (size ?? 0)),
        0,
      );
      const oldFlexible = flexible.reduce((sum, i) => sum + (raw[i] ?? 0), 0);
      if (oldFlexible > 0)
        flexible.forEach((i) => {
          raw[i] = ((raw[i] ?? 0) * Math.max(0, nextTotal - fixed)) / oldFlexible;
        });
    }
    const undefinedCount = raw.filter((size) => size === null).length;
    const defined = raw.reduce<number>((sum, size) => sum + (size ?? 0), 0);
    const automatic = undefinedCount ? Math.max(0, nextTotal - defined) / undefinedCount : 0;
    const sizes = fitSizes(
      raw.map((size) => size ?? automatic),
      limits.min,
      limits.max,
      nextTotal,
    );
    const changed = !same(state.sizes, sizes);
    const resized = initialized && total !== nextTotal;
    total = nextTotal;
    state = { ...state, sizes, ...limits, collapsed };
    previousPanels = options.panels.map((p) => ({ ...p }));
    previousValue = options.value ? [...options.value] : undefined;
    initialized = true;
    publish();
    if (changed && (resized || (options.value && !same(options.value, sizes)))) emitChange();
  };
  const range = (index: number) => {
    if (!initialized) return { min: 0, max: 0 };
    const pair = state.sizes[index] + state.sizes[index + 1];
    return {
      min: Math.max(state.min[index], pair - state.max[index + 1]),
      max: Math.min(state.max[index], pair - state.min[index + 1]),
    };
  };
  const canResize = (index: number) => {
    if (
      !options ||
      options.disabled ||
      !options.panels[index]?.resizable ||
      !options.panels[index + 1]?.resizable ||
      state.collapsed[index] ||
      state.collapsed[index + 1] ||
      !initialized
    )
      return false;
    const limits = range(index);
    return limits.max - limits.min > 0.001;
  };
  const pairSizes = (index: number, requested: number) => {
    const limits = range(index);
    const next = [...state.sizes];
    next[index] = Math.max(limits.min, Math.min(limits.max, requested));
    next[index + 1] = state.sizes[index] + state.sizes[index + 1] - next[index];
    return next;
  };
  const commit = (sizes: number[]) => {
    if (same(state.sizes, sizes)) return false;
    state.sizes = sizes;
    emitChange();
    return true;
  };
  const flush = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    if (!drag || pending === undefined) return;
    const next = pairSizes(drag.index, drag.sizes[drag.index] + pending - drag.start);
    pending = undefined;
    if (same(drag.proposed, next)) return;
    drag.proposed = next;
    if (options.lazy) state.preview = next[drag.index] - drag.sizes[drag.index];
    else commit(next);
    publish();
    options.onResize(round(next));
  };
  const move = (event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.id) return;
    event.preventDefault();
    pending = coordinate(event);
    if (!frame) frame = requestAnimationFrame(flush);
  };
  const finish = (cancel = false, emit = true) => {
    if (!drag) return;
    if (emit) flush();
    else {
      cancelAnimationFrame(frame);
      frame = 0;
      pending = undefined;
    }
    const current = drag;
    drag = undefined;
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", up);
    window.removeEventListener("pointercancel", cancelDrag);
    window.removeEventListener("blur", cancelDrag);
    window.removeEventListener("keydown", escape);
    current.target.removeEventListener("lostpointercapture", cancelDrag);
    try {
      current.target.releasePointerCapture(current.id);
    } catch {
      /* Already released. */
    }
    document.body.style.cursor = current.cursor;
    document.body.style.userSelect = current.userSelect;
    if (!current.hadClass) document.body.classList.remove("k-splitter-dragging");
    if (emit) commit(cancel ? current.sizes : current.proposed);
    state.dragging = null;
    state.preview = null;
    if (emit) {
      publish();
      options.onResizeEnd(round(state.sizes));
    }
  };
  const up = (event: PointerEvent) => {
    if (!drag || event.pointerId !== drag.id) return;
    pending = coordinate(event);
    finish();
  };
  const cancelDrag = () => finish(true);
  const escape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      finish(true);
    }
  };
  const start = (
    index: number,
    event: Pick<
      PointerEvent,
      | "button"
      | "isPrimary"
      | "pointerId"
      | "clientX"
      | "clientY"
      | "currentTarget"
      | "preventDefault"
    >,
  ) => {
    if (event.button !== 0 || event.isPrimary === false || drag || !canResize(index)) return;
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    target.focus({ preventScroll: true });
    drag = {
      index,
      id: event.pointerId,
      start: coordinate(event),
      sizes: [...state.sizes],
      proposed: [...state.sizes],
      target,
      cursor: document.body.style.cursor,
      userSelect: document.body.style.userSelect,
      hadClass: document.body.classList.contains("k-splitter-dragging"),
    };
    state.dragging = index;
    document.body.style.cursor = horizontal() ? "col-resize" : "row-resize";
    document.body.style.userSelect = "none";
    document.body.classList.add("k-splitter-dragging");
    try {
      target.setPointerCapture(event.pointerId);
    } catch {
      /* Synthetic events / older engines. */
    }
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", cancelDrag);
    window.addEventListener("blur", cancelDrag);
    window.addEventListener("keydown", escape);
    target.addEventListener("lostpointercapture", cancelDrag);
    publish();
    options.onResizeStart(round(state.sizes));
  };
  const keydown = (
    index: number,
    event: Pick<KeyboardEvent, "target" | "currentTarget" | "key" | "shiftKey" | "preventDefault">,
  ) => {
    if (event.target !== event.currentTarget || !canResize(index)) return;
    const previous = horizontal() ? "ArrowLeft" : "ArrowUp";
    const next = horizontal() ? "ArrowRight" : "ArrowDown";
    if (![previous, next, "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const limits = range(index);
    const requested =
      event.key === "Home"
        ? limits.min
        : event.key === "End"
          ? limits.max
          : state.sizes[index] + (event.key === previous ? -1 : 1) * (event.shiftKey ? 1 : 10);
    const sizes = pairSizes(index, requested);
    if (same(sizes, state.sizes)) return;
    options.onResizeStart(round(state.sizes));
    commit(sizes);
    publish();
    options.onResize(round(state.sizes));
    options.onResizeEnd(round(state.sizes));
  };
  const collapseResult = (index: number, neighbor: number) => {
    if (
      !initialized ||
      options.disabled ||
      !options.panels[index]?.collapsible ||
      !options.panels[index].resizable ||
      !options.panels[neighbor]?.resizable ||
      state.collapsed[neighbor]
    )
      return null;
    const collapsed = [...state.collapsed];
    collapsed[index] = !collapsed[index];
    const limits = bounds(total, collapsed);
    const pair = state.sizes[index] + state.sizes[neighbor];
    const desired = collapsed[index]
      ? 0
      : (remembered.get(options.panels[index].key) ??
        parseSize(options.panels[index].size, total) ??
        pair / 2);
    const lower = Math.max(limits.min[index], pair - limits.max[neighbor]);
    const upper = Math.min(limits.max[index], pair - limits.min[neighbor]);
    if (
      lower > upper ||
      (collapsed[index] && lower > 0.001) ||
      (!collapsed[index] && upper <= 0.001)
    )
      return null;
    const sizes = [...state.sizes];
    sizes[index] = Math.max(lower, Math.min(upper, desired));
    sizes[neighbor] = pair - sizes[index];
    return { sizes, collapsed, ...limits };
  };
  return {
    configure(next: SplitterOptions) {
      const nextSignature = JSON.stringify([next.direction, next.disabled, next.lazy, next.panels]);
      const valueChanged =
        next.value !== undefined &&
        (!previousValue || !same(next.value, previousValue)) &&
        !same(next.value, state.sizes);
      options = next;
      if (next.value === undefined) previousValue = undefined;
      if (next.value && same(next.value, state.sizes)) previousValue = [...next.value];
      if (signature === nextSignature && !valueChanged) return;
      signature = nextSignature;
      finish(true);
      sync();
    },
    mount(element: HTMLElement) {
      container = element;
      sync();
      observer =
        typeof ResizeObserver === "undefined"
          ? undefined
          : new ResizeObserver(() => {
              if (resizeFrame) return;
              resizeFrame = requestAnimationFrame(() => {
                resizeFrame = 0;
                if (measure() === total) return;
                finish(true);
                sync();
              });
            });
      observer?.observe(element);
    },
    dispose() {
      finish(true, false);
      observer?.disconnect();
      cancelAnimationFrame(resizeFrame);
      resizeFrame = 0;
      observer = undefined;
      container = undefined;
    },
    start,
    keydown,
    canResize,
    range,
    canCollapse: (index: number, neighbor: number) => !!collapseResult(index, neighbor),
    toggle(index: number, neighbor: number) {
      const next = collapseResult(index, neighbor);
      if (!next) return;
      finish(true);
      if (!state.collapsed[index]) remembered.set(options.panels[index].key, state.sizes[index]);
      state = { ...state, ...next };
      publish();
      emitChange();
      options.onCollapse(index, state.collapsed[index]);
    },
  };
}
