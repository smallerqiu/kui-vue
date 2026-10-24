import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, expect, it, vi } from "vitest";
import Thumb from "../components/slider/thumb";
import Slider from "../components/slider";

const wrappers: ReturnType<typeof mount>[] = [];
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount());
  vi.useRealTimers();
  vi.restoreAllMocks();
});
it.each([false, true])(
  "keeps the tooltip open during a real document drag (vertical=%s)",
  async (vertical) => {
    vi.useFakeTimers();
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue(
      new DOMRect(0, 0, 200, 200),
    );
    const wrapper = mount(Slider, { attachTo: document.body, props: { modelValue: 30, vertical } });
    wrappers.push(wrapper);
    const thumb = wrapper.get('[role="slider"]');
    await thumb.trigger("mouseenter");
    await thumb.trigger("mousedown", { button: 0 });
    await thumb.trigger("mouseleave");
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: 150, clientY: 150, buttons: 1 }));
    await vi.advanceTimersByTimeAsync(1000);
    await nextTick();
    expect(thumb.attributes("aria-expanded")).toBe("true");
    expect(document.querySelector(".k-tooltip-title")?.textContent).toBe(
      thumb.attributes("aria-valuenow"),
    );
    document.dispatchEvent(new MouseEvent("mouseup"));
    await nextTick();
    expect(thumb.attributes("aria-expanded")).toBe("false");
  },
);
it.each([null, true, false])(
  "keeps tooltip visibility correct during dragging with tooltipVisible=%s",
  async (tooltipVisible) => {
    vi.useFakeTimers();
    const wrapper = mount(Thumb, {
      attachTo: document.body,
      props: { value: 30, dragging: true, tooltipVisible },
    });
    wrappers.push(wrapper);
    const thumb = wrapper.get('[role="slider"]');
    await thumb.trigger("mouseenter");
    await thumb.trigger("mouseleave");
    await vi.advanceTimersByTimeAsync(1000);
    await nextTick();
    expect(thumb.attributes("aria-expanded")).toBe(String(tooltipVisible !== false));
    await wrapper.setProps({ value: 60 });
    expect(thumb.attributes("aria-expanded")).toBe(String(tooltipVisible !== false));
    if (tooltipVisible !== false)
      expect(document.querySelector(".k-tooltip-title")?.textContent).toBe("60");
    await wrapper.setProps({ dragging: false });
    await nextTick();
    expect(thumb.attributes("aria-expanded")).toBe(String(tooltipVisible === true));
  },
);
it("still opens on hover and closes after leaving without dragging", async () => {
  vi.useFakeTimers();
  const wrapper = mount(Thumb, { attachTo: document.body, props: { value: 30 } });
  wrappers.push(wrapper);
  const thumb = wrapper.get('[role="slider"]');
  await thumb.trigger("mouseenter");
  await vi.advanceTimersByTimeAsync(1000);
  expect(thumb.attributes("aria-expanded")).toBe("true");
  await thumb.trigger("mouseleave");
  await vi.advanceTimersByTimeAsync(1000);
  expect(thumb.attributes("aria-expanded")).toBe("false");
});

it.each([false, true])(
  "repositions on repeated position-only changes (vertical=%s)",
  async (vertical) => {
    vi.useFakeTimers();
    let position = 100;
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (
      this: HTMLElement,
    ) {
      return this.classList.contains("k-slider-thumb")
        ? new DOMRect(vertical ? 100 : position, vertical ? position : 100, 24, 24)
        : new DOMRect(0, 0, 40, 20);
    });
    const wrapper = mount(Thumb, {
      attachTo: document.body,
      props: { value: 30, dragging: true, vertical, tipFormatter: () => "fixed" },
    });
    wrappers.push(wrapper);
    await vi.advanceTimersByTimeAsync(1000);
    const popup = document.querySelector<HTMLElement>(".k-tooltip")!;
    const coordinate = () => (vertical ? popup.style.top : popup.style.left);
    let previous = coordinate();
    for (const [value, nextPosition] of [
      [31, 180],
      [32, 120],
      [33, 200],
    ]) {
      position = nextPosition;
      await wrapper.setProps({ value });
      await vi.advanceTimersByTimeAsync(50);
      expect(coordinate()).not.toBe(previous);
      expect(popup.textContent).toContain("fixed");
      previous = coordinate();
    }
  },
);
