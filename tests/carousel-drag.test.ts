import { afterEach, describe, expect, it, vi } from "vitest";
import { bindCarouselDrag, retargetCarousel } from "../components/carousel/drag";

const disposers: (() => void)[] = [];
afterEach(() => {
  disposers.splice(0).forEach((dispose) => dispose());
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});
function setup(overrides = {}) {
  const root = document.createElement("div");
  root.className = "k-carousel";
  root.innerHTML =
    '<div class="k-carousel-wrapper"><a href="#link">Slide</a><button>Action</button></div>';
  document.body.append(root);
  const options = {
    swipeable: true,
    vertical: false,
    size: 300,
    count: 3,
    index: 0,
    loop: true,
    ...overrides,
  };
  const callbacks = {
    options: () => options,
    start: vi.fn(),
    offset: vi.fn(),
    settle: vi.fn(),
    finish: vi.fn(),
  };
  disposers.push(bindCarouselDrag(root, callbacks));
  const pointer = (
    type: string,
    x: number,
    y = 0,
    pointerType = "touch",
    target: EventTarget = type === "pointerdown" ? root.querySelector("a")! : window,
  ) => {
    const event = new MouseEvent(type, {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
      button: 0,
    });
    Object.defineProperties(event, {
      pointerId: { value: 1 },
      pointerType: { value: pointerType },
      isPrimary: { value: true },
    });
    target.dispatchEvent(event);
    return event;
  };
  return { root, callbacks, pointer, options };
}
describe("carousel pointer gestures", () => {
  it("keeps a large interrupted offset when the pointer starts moving", () => {
    const { pointer, callbacks } = setup();
    callbacks.start.mockReturnValue(450);
    pointer("pointerdown", 200);
    pointer("pointermove", 180);
    expect(callbacks.offset).toHaveBeenLastCalledWith(430);
  });
  it.each([
    [-1050, 1, 1, 5],
    [-350, 1, -1, -1],
    [-1950, 1, 1, 5],
  ])(
    "rebases a running loop at %d without changing its visible content",
    (rendered, next, step, target) => {
      const { root } = setup();
      const track = root.querySelector<HTMLElement>(".k-carousel-wrapper")!;
      track.style.transform = `matrix(1, 0, 0, 1, ${rendered}, 0)`;
      track.style.transitionDuration = "280ms";
      const flush = vi.spyOn(track, "getBoundingClientRect").mockImplementation(() => {
        expect(track.style.transitionDuration).toBe("0s");
        const offset = Number(track.style.transform.match(/translate3d\(([-\d.]+)px/)![1]);
        const cycles = (offset - rendered) / 900;
        expect(cycles).toBeCloseTo(Math.round(cycles));
        return new DOMRect();
      });
      expect(retargetCarousel(root, false, 300, 3, next, step)).toBe(target);
      expect(flush).toHaveBeenCalledOnce();
      expect(track.style.transform).toBe(`translate3d(${-target * 300}px, 0, 0)`);
      expect(track.style.transitionDuration).toBe("280ms");
    },
  );
  it.each([
    [300, 6, 1],
    [301, 6, 0],
    [301, 149, 0],
    [301, 151, 1],
    [200, 4, 0],
    [1000, 151, 1],
  ])("uses short/long swipe rules at %dms and %dpx", (elapsed, distance, step) => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    time = elapsed;
    pointer("pointermove", 200 - distance);
    pointer("pointerup", 200 - distance);
    expect(callbacks.finish).toHaveBeenLastCalledWith(step);
  });
  it("does not subtract unfinished animation travel from this gesture's distance", () => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup();
    callbacks.start.mockReturnValue(100);
    pointer("pointerdown", 200);
    time = 600;
    pointer("pointermove", 0);
    pointer("pointerup", 0);
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
  });
  it.each([false, true])(
    "recognizes a fast release after holding down (vertical=%s)",
    (vertical) => {
      let time = 0;
      vi.spyOn(performance, "now").mockImplementation(() => time);
      const { pointer, callbacks } = setup({ vertical });
      const send = (type: string, delta: number) =>
        pointer(type, vertical ? 0 : 200 + delta, vertical ? 200 + delta : 0);
      send("pointerdown", 0);
      time = 1000;
      send("pointermove", -5);
      time = 1020;
      send("pointermove", -10);
      time = 1040;
      send("pointermove", -40);
      send("pointerup", -40);
      expect(callbacks.finish).toHaveBeenLastCalledWith(1);
    },
  );
  it("recognizes repeated short flicks even with duplicate final move events", () => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup();
    for (let i = 0; i < 5; i++) {
      pointer("pointerdown", 100);
      time += 40;
      pointer("pointermove", 90);
      time += 30;
      pointer("pointermove", 90);
      pointer("pointerup", 90);
      expect(callbacks.finish).toHaveBeenLastCalledWith(1);
    }
    expect(callbacks.finish).toHaveBeenCalledTimes(5);
  });
  it("does not reverse a long drag because of a tiny release-time correction", () => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    time = 500;
    pointer("pointermove", 20);
    time = 501;
    pointer("pointermove", 22);
    pointer("pointerup", 22);
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
  });
  it("includes movement delivered only by pointerup", () => {
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    pointer("pointerup", 180);
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
  });
  it("uses release momentum for decelerating snap duration, including vertical gestures", () => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup({ vertical: true });
    pointer("pointerdown", 0, 200);
    time = 20;
    pointer("pointermove", 0, 100);
    pointer("pointerup", 0, 100);
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
    expect(callbacks.settle).toHaveBeenLastCalledWith(140);
    pointer("pointerdown", 0, 200);
    time = 120;
    pointer("pointermove", 0, 100);
    pointer("pointerup", 0, 100);
    expect(callbacks.settle).toHaveBeenLastCalledWith(280);
  });
  it("interrupts an in-flight CSS animation from its rendered offset", () => {
    const { root, pointer, callbacks } = setup();
    Object.defineProperty(root.querySelector(".k-carousel-wrapper")!, "getAnimations", {
      value: () => [{ playState: "running" }],
    });
    callbacks.start.mockReturnValue(80);
    pointer("pointerdown", 200);
    expect(callbacks.offset).toHaveBeenLastCalledWith(80);
    pointer("pointermove", 150);
    expect(callbacks.offset).toHaveBeenLastCalledWith(30);
  });
  it("does not cancel when touch capture transfers from a slide to the root", () => {
    const { root, pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    pointer("pointermove", 100);
    pointer("lostpointercapture", 100, 0, "touch", root.querySelector("a")!);
    expect(callbacks.finish).not.toHaveBeenCalled();
    pointer("pointerup", 100);
    expect(callbacks.finish).toHaveBeenCalledExactlyOnceWith(1);
  });
  it("cancels safely if gesture settings change before release", () => {
    const { pointer, callbacks, options } = setup();
    pointer("pointerdown", 200);
    pointer("pointermove", 100);
    options.swipeable = false;
    pointer("pointerup", 100);
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
  });
  it("follows touch movement by default, switches once and suppresses the resulting click", () => {
    const { root, pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    expect(pointer("pointermove", 100).defaultPrevented).toBe(true);
    expect(callbacks.offset).toHaveBeenLastCalledWith(-100);
    pointer("pointerup", 100);
    expect(callbacks.finish).toHaveBeenCalledExactlyOnceWith(1);
    const click = new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 });
    root.querySelector("a")!.dispatchEvent(click);
    expect(click.defaultPrevented).toBe(true);
  });
  it("snaps back on short movement or pointer cancellation", () => {
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    pointer("pointermove", 197);
    pointer("pointerup", 197);
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
    pointer("pointerdown", 200);
    pointer("pointermove", 80);
    pointer("pointercancel", 80);
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
    expect(callbacks.offset).toHaveBeenLastCalledWith(0);
  });
  it("does not intercept cross-axis scrolling or a tap", () => {
    const { root, pointer, callbacks } = setup();
    pointer("pointerdown", 100);
    expect(pointer("pointermove", 102, 90).defaultPrevented).toBe(false);
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
    const click = new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 });
    root.querySelector("a")!.dispatchEvent(click);
    expect(click.defaultPrevented).toBe(false);
  });
  it("supports vertical gestures and applies resistance at non-looping boundaries", () => {
    const { pointer, callbacks } = setup({ vertical: true, loop: false });
    pointer("pointerdown", 0, 100);
    pointer("pointermove", 0, 200);
    expect(callbacks.offset).toHaveBeenLastCalledWith(30);
    pointer("pointerup", 0, 200);
    expect(callbacks.finish).toHaveBeenLastCalledWith(-1);
  });
  it("uses swipeable to control both mouse and touch", () => {
    const { pointer, callbacks, options } = setup({ swipeable: false });
    pointer("pointerdown", 100);
    pointer("pointerdown", 100, 0, "mouse");
    expect(callbacks.start).not.toHaveBeenCalled();
    options.swipeable = true;
    pointer("pointerdown", 100, 0, "mouse");
    pointer("pointermove", 0, 0, "mouse");
    pointer("pointerup", 0, 0, "mouse");
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
  });
  it("ignores controls and single slides", () => {
    const { pointer, callbacks, options, root } = setup();
    pointer("pointerdown", 100, 0, "touch", root.querySelector("button")!);
    options.count = 1;
    pointer("pointerdown", 100);
    expect(callbacks.start).not.toHaveBeenCalled();
  });
  it("recognizes a short fast flick but not a stationary hold", () => {
    let time = 0;
    vi.spyOn(performance, "now").mockImplementation(() => time);
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 100);
    time = 20;
    pointer("pointermove", 80);
    pointer("pointerup", 80);
    expect(callbacks.finish).toHaveBeenLastCalledWith(1);
    pointer("pointerdown", 100);
    time = 40;
    pointer("pointermove", 80);
    time = 500;
    pointer("pointerup", 80);
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
  });
  it("cancels on window blur and removes global listeners when disposed", () => {
    const { pointer, callbacks } = setup();
    pointer("pointerdown", 200);
    pointer("pointermove", 100);
    window.dispatchEvent(new Event("blur"));
    expect(callbacks.finish).toHaveBeenLastCalledWith(0);
    disposers.pop()!();
    pointer("pointerdown", 200);
    expect(callbacks.start).toHaveBeenCalledTimes(1);
  });
});
