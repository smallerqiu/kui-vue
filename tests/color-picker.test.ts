import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import ColorPicker from "../components/color-picker";

const canvasContext = {
  clearRect: vi.fn(),
  createLinearGradient: () => ({ addColorStop: vi.fn() }),
  fillRect: vi.fn(),
  fillStyle: "",
};

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    canvasContext as unknown as CanvasRenderingContext2D
  );
  vi.spyOn(HTMLCanvasElement.prototype, "getBoundingClientRect").mockImplementation(function () {
    const width = this.classList.contains("k-color-picker-paint") ? 234 : 190;
    const height = this.classList.contains("k-color-picker-paint") ? 136 : 8;
    return { width, height, left: 0, top: 0, right: width, bottom: height } as DOMRect;
  });
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  document.body.innerHTML = "";
});

describe("ColorPicker", () => {
  it("synchronizes external color and mode changes", async () => {
    const wrapper = mount(ColorPicker, {
      props: { panelOnly: true, modelValue: "#ff0000", mode: "hex" },
    });

    await wrapper.setProps({ modelValue: "rgba(51, 102, 153, 0.5)", mode: "rgb" });
    await nextTick();

    expect(wrapper.findComponent({ name: "Paint" }).props("hue")).toBe(210);
    expect(wrapper.findComponent({ name: "Mode" }).props("mode")).toBe("rgb");
    expect(parseFloat(wrapper.find(".k-color-picker-hue-dot").element.style.left)).toBeCloseTo(
      103.83
    );
    expect(parseFloat(wrapper.find(".k-color-picker-alpha-dot").element.style.left)).toBe(88);
  });

  it("keeps panelOnly visible when opened is false", async () => {
    const wrapper = mount(ColorPicker, { props: { panelOnly: true, opened: true } });

    await wrapper.setProps({ opened: false });

    expect(wrapper.find(".k-color-picker-dropdown").isVisible()).toBe(true);
  });

  it("closes an initially opened panel when clicking outside", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ColorPicker, {
      attachTo: document.body,
      props: { opened: true, modelValue: "#336699" },
    });

    document.body.click();
    await vi.runAllTimersAsync();

    expect(wrapper.emitted("openChange")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });
});
