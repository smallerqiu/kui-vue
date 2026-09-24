import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Carousel from "../components/carousel/carousel";
import CarouselItem from "../components/carousel/carousel-item";

async function pointer(target: EventTarget, type: string, x: number, y = 0, pointerType = "touch") {
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
  await nextTick();
}
const wrappers: { unmount: () => void }[] = [];
beforeEach(() => {
  vi.useFakeTimers();
  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(300);
});
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  vi.clearAllTimers();
  vi.useRealTimers();
  vi.restoreAllMocks();
});
async function setup(props = {}) {
  const wrapper = mount(Carousel, {
    attachTo: document.body,
    props,
    slots: {
      default: () =>
        [0, 1, 2].map((n) =>
          h(CarouselItem, { key: n }, () => h("a", { href: "#slide" }, String(n))),
        ),
    },
  });
  wrappers.push(wrapper);
  await nextTick();
  await nextTick();
  return { wrapper, track: wrapper.find<HTMLElement>(".k-carousel-wrapper").element };
}
describe("Carousel swipe integration", () => {
  it.each([false, true])(
    "accepts repeated ref calls and reversals through loop boundaries (vertical=%s)",
    async (vertical) => {
      const { wrapper } = await setup({ vertical });
      const api = wrapper.vm as unknown as { next: () => void; prev: () => void };
      for (let i = 0; i < 7; i++) api.next();
      for (let i = 0; i < 4; i++) api.prev();
      expect(wrapper.emitted("change")).toEqual(
        [1, 2, 0, 1, 2, 0, 1, 0, 2, 1, 0].map((index) => [index]),
      );
      vi.advanceTimersByTime(600);
      await nextTick();
      expect(wrapper.find('[aria-label="Go to slide 1"]').attributes("aria-selected")).toBe("true");
    },
  );
  it.each([false, true])(
    "commits initial value without animation (vertical=%s)",
    async (vertical) => {
      const committed: string[][] = [];
      vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (
        this: HTMLElement,
      ) {
        if (this.classList.contains("k-carousel-wrapper"))
          committed.push([this.style.transform, this.style.transitionDuration]);
        return new DOMRect();
      });
      const wrapper = mount(Carousel, {
        attachTo: document.body,
        props: { value: 5, vertical },
        slots: {
          default: () =>
            Array.from({ length: 10 }, (_, n) => h(CarouselItem, { key: n }, () => String(n))),
        },
      });
      wrappers.push(wrapper);
      await nextTick();
      await nextTick();
      await nextTick();
      expect(committed).toContainEqual([
        vertical ? "translate3d(0px, -1536px, 0)" : "translate3d(-1800px, 0px, 0)",
        "0s",
      ]);
      expect(wrapper.emitted("change")).toBeUndefined();
    },
  );
  it("regrabs an unfinished transition without jumping or waiting for its timer", async () => {
    const { wrapper, track } = await setup();
    await pointer(track, "pointerdown", 200);
    await pointer(window, "pointermove", 100);
    await pointer(window, "pointerup", 100);
    track.style.transform = "matrix(1, 0, 0, 1, -450, 0)";
    await pointer(track, "pointerdown", 200);
    expect(track.style.transform).toBe("translate3d(-450px, 0px, 0)");
    await pointer(window, "pointermove", 100);
    expect(track.style.transform).toBe("translate3d(-550px, 0px, 0)");
    vi.advanceTimersByTime(600);
    await nextTick();
    expect(track.style.transform).toBe("translate3d(-550px, 0px, 0)");
    // This is now a long drag: continue past the halfway snap point.
    await pointer(window, "pointermove", -200);
    await pointer(window, "pointerup", -200);
    expect(wrapper.emitted("change")).toEqual([[1], [2]]);
  });
  it("accepts the next drag as soon as the inertia transition ends", async () => {
    const { wrapper, track } = await setup({ vertical: true });
    await pointer(track, "pointerdown", 0, 200);
    await pointer(window, "pointermove", 0, 100);
    await pointer(window, "pointerup", 0, 100);
    const end = new Event("transitionend", { bubbles: true });
    Object.defineProperty(end, "propertyName", { value: "transform" });
    track.dispatchEvent(end);
    await nextTick();
    await pointer(track, "pointerdown", 0, 200);
    await pointer(window, "pointermove", 0, 100);
    await pointer(window, "pointerup", 0, 100);
    expect(wrapper.emitted("change")).toEqual([[1], [2]]);
  });
  it.each(["mouse", "touch"])(
    "supports default vertical %s dragging and inertial settling",
    async (kind) => {
      const { wrapper, track } = await setup({ vertical: true });
      expect(track.style.touchAction).toBe("pan-x");
      await pointer(track, "pointerdown", 0, 200, kind);
      await pointer(window, "pointermove", 0, 100, kind);
      expect(track.style.transform).toBe("translate3d(0px, -356px, 0)");
      await pointer(window, "pointerup", 0, 100, kind);
      expect(wrapper.emitted("change")).toEqual([[1]]);
      expect(track.style.transform).toBe("translate3d(0px, -512px, 0)");
      expect(track.style.transitionTimingFunction).toBe("cubic-bezier(0.22, 1, 0.36, 1)");
      expect(parseFloat(track.style.transitionDuration)).toBeGreaterThanOrEqual(140);
    },
  );
  it("allows disabling default mouse dragging", async () => {
    const { wrapper, track } = await setup({ draggable: false });
    await pointer(track, "pointerdown", 200, 0, "mouse");
    await pointer(window, "pointermove", 100, 0, "mouse");
    await pointer(window, "pointerup", 100, 0, "mouse");
    expect(wrapper.emitted("change")).toBeUndefined();
  });
  it("keeps the looping clone transition when the parent synchronizes the model", async () => {
    const { wrapper, track } = await setup({ modelValue: 2 });
    await pointer(track, "pointerdown", 200);
    await pointer(window, "pointermove", 100);
    await pointer(window, "pointerup", 100);
    await wrapper.setProps({ modelValue: 0 });
    expect(track.style.transform).toBe("translate3d(-1200px, 0px, 0)");
    expect(track.style.transitionDuration).not.toBe("0s");
    vi.advanceTimersByTime(520);
    await nextTick();
    expect(track.style.transform).toBe("translate3d(-300px, 0px, 0)");
  });
  it("moves the track while touching and updates the model only on release", async () => {
    const { wrapper, track } = await setup();
    await pointer(track, "pointerdown", 200);
    await pointer(window, "pointermove", 100);
    expect(track.style.transform).toBe("translate3d(-400px, 0px, 0)");
    expect(track.style.transitionDuration).toBe("0s");
    expect(wrapper.emitted("change")).toBeUndefined();
    await pointer(window, "pointerup", 100);
    expect(wrapper.emitted("change")).toEqual([[1]]);
    expect(wrapper.emitted("update:modelValue")).toEqual([[1]]);
    expect(track.style.transform).toBe("translate3d(-600px, 0px, 0)");
    const click = new MouseEvent("click", { bubbles: true, cancelable: true, detail: 1 });
    expect(track.querySelector("a")!.dispatchEvent(click)).toBe(false);
  });
  it("settles a looping clone then permits another swipe", async () => {
    const { wrapper, track } = await setup({ value: 2 });
    await pointer(track, "pointerdown", 200);
    await pointer(window, "pointermove", 100);
    await pointer(window, "pointerup", 100);
    expect(wrapper.emitted("change")).toEqual([[0]]);
    vi.advanceTimersByTime(520);
    await nextTick();
    expect(track.style.transform).toBe("translate3d(-300px, 0px, 0)");
    await pointer(track, "pointerdown", 200);
    await pointer(window, "pointermove", 100);
    await pointer(window, "pointerup", 100);
    expect(wrapper.emitted("change")).toEqual([[0], [1]]);
  });
  it("pauses autoplay while held and resumes after cancellation", async () => {
    const { wrapper, track } = await setup({ autoplay: true, delay: 1000 });
    await pointer(track, "pointerdown", 200);
    vi.advanceTimersByTime(3000);
    expect(wrapper.emitted("change")).toBeUndefined();
    await pointer(window, "pointercancel", 200);
    vi.advanceTimersByTime(1000);
    await nextTick();
    expect(wrapper.emitted("change")).toEqual([[1]]);
  });
  it("rebounds at a non-loop boundary without emitting change", async () => {
    const { wrapper, track } = await setup({ loop: false });
    await pointer(track, "pointerdown", 100);
    await pointer(window, "pointermove", 200);
    expect(track.style.transform).toBe("translate3d(30px, 0px, 0)");
    await pointer(window, "pointerup", 200);
    expect(track.style.transform).toBe("translate3d(0px, 0px, 0)");
    expect(wrapper.emitted("change")).toBeUndefined();
  });
});
