import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { createSplitterController, emptyState } from "../components/splitter/controller";
it("does not repeatedly publish an invalid supplied layout during parent rerenders", () => {
  const onState = vi.fn();
  const h = setup({ value: [NaN, Infinity], onState });
  onState.mockClear();
  h.configure({ value: [NaN, Infinity] });
  expect(onState).not.toHaveBeenCalled();
});
it("accepts the same external layout again after temporarily removing the binding", async () => {
  const h = setup({ value: [300, 700] });
  await drag(h, 300, 400);
  pointer(window, "pointerup", 400);
  h.configure({ value: undefined });
  expect(h.state.sizes).toEqual([400, 600]);
  h.configure({ value: [300, 700] });
  expect(h.state.sizes).toEqual([300, 700]);
});
type Options = Parameters<ReturnType<typeof createSplitterController>["configure"]>[0];
const disposers: (() => void)[] = [];
let resizeObservers: (() => void)[] = [];
beforeEach(() => {
  vi.useFakeTimers();
  resizeObservers = [];
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        resizeObservers.push(callback);
      }
      observe() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  disposers.splice(0).forEach((dispose) => dispose());
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});
const pointer = (target: EventTarget, type: string, x: number, y = 0, extras = {}) => {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    button: 0,
    clientX: x,
    clientY: y,
  });
  Object.defineProperties(
    event,
    Object.fromEntries(
      Object.entries({
        pointerId: 1,
        isPrimary: true,
        pointerType: "mouse",
        ...extras,
      }).map(([key, value]) => [key, { value }]),
    ),
  );
  target.dispatchEvent(event);
};
const setup = (overrides: Partial<Options> = {}) => {
  let state = emptyState();
  let width = 1004,
    height = 604;
  const onChange = vi.fn(),
    onResize = vi.fn(),
    onResizeStart = vi.fn(),
    onResizeEnd = vi.fn(),
    onCollapse = vi.fn();
  const element = document.createElement("div"),
    handle = document.createElement("div");
  handle.tabIndex = 0;
  element.append(handle);
  document.body.append(element);
  vi.spyOn(element, "getBoundingClientRect").mockImplementation(
    () => ({ width, height, left: 0, top: 0 }) as DOMRect,
  );
  const controller = createSplitterController();
  let options: Options = {
    panels: [
      { key: "a", size: 300, resizable: true, collapsible: true },
      { key: "b", resizable: true, collapsible: true },
    ],
    direction: "horizontal",
    disabled: false,
    lazy: false,
    onState: (next) => {
      state = next;
    },
    onChange,
    onResize,
    onResizeStart,
    onResizeEnd,
    onCollapse,
    ...overrides,
  };
  controller.configure(options);
  controller.mount(element);
  handle.addEventListener("pointerdown", (e) => controller.start(0, e));
  handle.addEventListener("keydown", (e) => controller.keydown(0, e));
  const dispose = () => {
    controller.dispose();
    element.remove();
  };
  disposers.push(dispose);
  return {
    controller,
    handle,
    onChange,
    onResize,
    onResizeStart,
    onResizeEnd,
    onCollapse,
    dispose,
    get state() {
      return state;
    },
    configure(next: Partial<Options>) {
      options = { ...options, ...next };
      controller.configure(options);
    },
    resize(w: number, h = height) {
      width = w;
      height = h;
      resizeObservers.forEach((cb) => cb());
      vi.advanceTimersByTime(20);
    },
  };
};
const drag = async (h: ReturnType<typeof setup>, start: number, end: number, extras = {}) => {
  pointer(h.handle, "pointerdown", start, 0, extras);
  pointer(window, "pointermove", end, 0, extras);
  await vi.advanceTimersByTimeAsync(20);
};

it("starts with valid sizes and enforces minimums before the first drag", () => {
  const h = setup({
    panels: [
      { key: "a", size: 50, min: 200, resizable: true, collapsible: false },
      { key: "b", resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes).toEqual([200, 800]);
});
it("contains impossible minimums and fills space when maximums cannot fill the container", () => {
  const h = setup({
    panels: [
      { key: "a", min: 800, resizable: true, collapsible: false },
      { key: "b", min: 800, resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes).toEqual([500, 500]);
  h.configure({
    panels: [
      { key: "a", max: 100, resizable: true, collapsible: false },
      { key: "b", max: 100, resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes).toEqual([100, 900]);
});
it("rejects non-finite and malformed sizes without NaN or negative layout", () => {
  const h = setup({
    panels: [
      { key: "a", size: NaN, min: "-20px", resizable: true, collapsible: false },
      { key: "b", size: "broken%", max: Infinity, resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes).toEqual([500, 500]);
});
it("drags by pointer delta and keeps dragging through value echoes and fresh panel objects", async () => {
  const h = setup();
  await drag(h, 307, 407);
  expect(h.state.sizes).toEqual([400, 600]);
  h.configure({ value: [400, 600] });
  expect(h.state.dragging).toBe(0);
  pointer(window, "pointermove", 457);
  await vi.advanceTimersByTimeAsync(20);
  expect(h.state.sizes).toEqual([450, 550]);
  pointer(window, "pointerup", 457);
  expect(h.onResizeEnd).toHaveBeenCalledExactlyOnceWith([450, 550]);
  h.configure({
    panels: [
      { key: "a", size: 300, resizable: true, collapsible: true },
      { key: "b", resizable: true, collapsible: true },
    ],
  });
  expect(h.state.sizes).toEqual([450, 550]);
  h.resize(2004);
  expect(h.state.sizes).toEqual([900, 1100]);
});
it("keeps locked panel pixels on container resize and scales the remaining space", () => {
  const h = setup({
    panels: [
      { key: "a", size: 200, resizable: false, collapsible: false },
      { key: "b", resizable: true, collapsible: false },
    ],
  });
  h.resize(1504);
  expect(h.state.sizes).toEqual([200, 1300]);
});
it("applies external layout updates and percentage constraints", () => {
  const h = setup({
    panels: [
      { key: "a", min: "20%", max: "60%", resizable: true, collapsible: false },
      { key: "b", resizable: true, collapsible: false },
    ],
  });
  h.configure({ value: [800, 200] });
  expect(h.state.sizes).toEqual([600, 400]);
});
it("collapses to zero and restores the last expanded size, including external flags", async () => {
  const h = setup();
  await drag(h, 300, 400);
  pointer(window, "pointerup", 400);
  h.controller.toggle(0, 1);
  expect(h.state.sizes).toEqual([0, 1000]);
  expect(h.onCollapse).toHaveBeenLastCalledWith(0, true);
  h.controller.toggle(0, 1);
  expect(h.state.sizes).toEqual([400, 600]);
  expect(h.onCollapse).toHaveBeenLastCalledWith(0, false);
  h.configure({
    panels: [
      { key: "a", size: 300, collapsed: true, resizable: true, collapsible: true },
      { key: "b", resizable: true, collapsible: true },
    ],
  });
  expect(h.state.sizes).toEqual([0, 1000]);
  h.configure({
    panels: [
      { key: "a", size: 300, collapsed: false, resizable: true, collapsible: true },
      { key: "b", resizable: true, collapsible: true },
    ],
  });
  expect(h.state.sizes).toEqual([400, 600]);
});
it("moves only the guide in lazy mode and commits on release", async () => {
  const h = setup({ lazy: true });
  await drag(h, 300, 450);
  expect(h.state.sizes).toEqual([300, 700]);
  expect(h.state.preview).toBe(150);
  expect(h.onChange).not.toHaveBeenCalled();
  expect(h.onResize).toHaveBeenLastCalledWith([450, 550]);
  pointer(window, "pointerup", 450);
  expect(h.state.sizes).toEqual([450, 550]);
  expect(h.onChange).toHaveBeenCalledExactlyOnceWith([450, 550]);
  expect(h.state.preview).toBeNull();
});
it.each(["pointercancel", "blur"])(
  "restores the start layout on %s and cleans up the cursor",
  async (type) => {
    document.body.style.cursor = "crosshair";
    document.body.style.userSelect = "text";
    const h = setup();
    await drag(h, 300, 400);
    pointer(window, type, 400);
    expect(h.state.sizes).toEqual([300, 700]);
    expect(h.state.dragging).toBeNull();
    expect(document.body.style.cursor).toBe("crosshair");
    expect(document.body.style.userSelect).toBe("text");
    expect(document.body.classList.contains("k-splitter-dragging")).toBe(false);
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  },
);
it("cancels with Escape and discards pending moves on unmount", async () => {
  const h = setup();
  await drag(h, 300, 400);
  window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  expect(h.state.sizes).toEqual([300, 700]);
  pointer(h.handle, "pointerdown", 300);
  pointer(window, "pointermove", 500);
  h.onChange.mockClear();
  h.dispose();
  await vi.advanceTimersByTimeAsync(50);
  expect(h.onChange).not.toHaveBeenCalled();
  expect(document.body.classList.contains("k-splitter-dragging")).toBe(false);
});
it("ignores disabled, locked, right-button and non-primary pointer interactions", async () => {
  const h = setup({ disabled: true });
  await drag(h, 300, 400);
  h.controller.toggle(0, 1);
  expect(h.onResizeStart).not.toHaveBeenCalled();
  expect(h.onCollapse).not.toHaveBeenCalled();
  h.configure({ disabled: false });
  pointer(h.handle, "pointerdown", 300, 0, { button: 2 });
  pointer(h.handle, "pointerdown", 300, 0, { isPrimary: false });
  expect(h.onResizeStart).not.toHaveBeenCalled();
  h.configure({
    panels: [
      { key: "a", resizable: false, collapsible: false },
      { key: "b", resizable: true, collapsible: false },
    ],
  });
  await drag(h, 300, 400);
  expect(h.onResizeStart).not.toHaveBeenCalled();
});
it("supports touch pointers and vertical movement", async () => {
  const h = setup({ direction: "vertical" });
  pointer(h.handle, "pointerdown", 0, 300, { pointerType: "touch" });
  pointer(window, "pointermove", 0, 350, { pointerType: "touch" });
  await vi.advanceTimersByTimeAsync(20);
  pointer(window, "pointerup", 0, 350, { pointerType: "touch" });
  expect(h.state.sizes).toEqual([350, 250]);
});
it("supports keyboard constraints and fine adjustments without duplicate boundary events", () => {
  const h = setup({
    panels: [
      { key: "a", size: 300, min: 100, max: 600, resizable: true, collapsible: false },
      { key: "b", min: 200, resizable: true, collapsible: false },
    ],
  });
  h.handle.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", shiftKey: true }));
  expect(h.state.sizes).toEqual([301, 699]);
  h.handle.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
  expect(h.state.sizes).toEqual([600, 400]);
  h.onChange.mockClear();
  h.handle.dispatchEvent(new KeyboardEvent("keydown", { key: "End" }));
  expect(h.onChange).not.toHaveBeenCalled();
});
it("keeps keyed panels across insertion and ignores hidden measurements", () => {
  const h = setup();
  h.resize(0, 0);
  expect(h.state.sizes).toEqual([300, 700]);
  h.resize(1004, 604);
  expect(h.state.sizes).toEqual([300, 700]);
  h.configure({
    panels: [
      { key: "b", resizable: true, collapsible: false },
      { key: "a", size: 300, resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes).toEqual([700, 300]);
});

it("allocates space for a newly inserted panel without discarding the existing proportions", () => {
  const h = setup();
  h.configure({
    panels: [
      { key: "a", size: 300, resizable: true, collapsible: true },
      { key: "b", resizable: true, collapsible: true },
      { key: "c", resizable: true, collapsible: false },
    ],
  });
  expect(h.state.sizes.every((size) => size > 0)).toBe(true);
  expect(h.state.sizes[0] / h.state.sizes[1]).toBeCloseTo(3 / 7);
  expect(h.state.sizes.reduce((sum, size) => sum + size, 0)).toBeCloseTo(996);
});
