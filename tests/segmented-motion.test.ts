import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { afterEach, expect, it, vi } from "vitest";
import Segmented from "../components/segmented";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it.each([false, true])(
  "only animates selection changes, not visibility or layout (vertical=%s)",
  async (vertical) => {
    let hidden = false;
    let size = 50;
    let notify = () => {};
    const disconnect = vi.fn();
    vi.stubGlobal(
      "ResizeObserver",
      class {
        constructor(callback: () => void) {
          notify = callback;
        }
        observe() {}
        disconnect = disconnect;
      },
    );
    for (const key of ["offsetWidth", "offsetHeight", "offsetLeft", "offsetTop"] as const) {
      vi.spyOn(HTMLElement.prototype, key, "get").mockImplementation(function (this: HTMLElement) {
        if (hidden) return 0;
        if (key === "offsetWidth" || key === "offsetHeight") return size;
        return this.textContent === "B" ? size : 0;
      });
    }
    const wrapper = mount(Segmented, {
      props: {
        options: ["A", "B"],
        modelValue: "A",
        direction: vertical ? "vertical" : "horizontal",
      },
    });
    try {
      await nextTick();
      const indicator = () => wrapper.get(".k-segmented-indicator");
      expect(indicator().classes()).toContain("is-ready");
      expect(indicator().classes()).not.toContain("is-animating");
      await wrapper.setProps({ modelValue: "B" });
      await nextTick();
      expect(indicator().classes()).toContain("is-animating");
      notify();
      await nextTick();
      expect(indicator().classes()).toContain("is-animating");
      hidden = true;
      notify();
      await nextTick();
      expect(indicator().classes()).not.toContain("is-ready");
      await wrapper.setProps({ modelValue: "A" });
      hidden = false;
      notify();
      await nextTick();
      expect(indicator().classes()).toContain("is-ready");
      expect(indicator().classes()).not.toContain("is-animating");
      await wrapper.setProps({ modelValue: "B" });
      await nextTick();
      expect(indicator().classes()).toContain("is-animating");
      size = 80;
      notify();
      await nextTick();
      expect(indicator().classes()).not.toContain("is-animating");
      expect(indicator().attributes("style")).toContain(vertical ? "top: 80px" : "left: 80px");
    } finally {
      wrapper.unmount();
    }
    expect(disconnect).toHaveBeenCalled();
  },
);

it("positions directly when mounted hidden, including after an unmatched value", async () => {
  let size = 0;
  let notify = () => {};
  vi.stubGlobal(
    "ResizeObserver",
    class {
      constructor(callback: () => void) {
        notify = callback;
      }
      observe() {}
      disconnect() {}
    },
  );
  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockImplementation(() => size);
  vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockImplementation(() => size);
  const wrapper = mount(Segmented, { props: { options: ["A", "B"], modelValue: "B" } });
  try {
    await nextTick();
    expect(wrapper.get(".k-segmented-indicator").classes()).not.toContain("is-ready");
    size = 50;
    notify();
    await nextTick();
    expect(wrapper.get(".k-segmented-indicator").classes()).toContain("is-ready");
    expect(wrapper.get(".k-segmented-indicator").classes()).not.toContain("is-animating");
    await wrapper.setProps({ modelValue: "missing" });
    await nextTick();
    await wrapper.setProps({ modelValue: "A" });
    await nextTick();
    expect(wrapper.get(".k-segmented-indicator").classes()).not.toContain("is-animating");
  } finally {
    wrapper.unmount();
  }
});
