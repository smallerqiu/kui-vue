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
    canvasContext as unknown as CanvasRenderingContext2D,
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
  it("supports keyboard opening and slider adjustments", async () => {
    const wrapper = mount(ColorPicker, { props: { modelValue: "#ff0000" } });
    await wrapper.trigger("keydown", { key: "Enter" });
    await nextTick();

    expect(wrapper.attributes("aria-expanded")).toBe("true");
    const hue = document.body.querySelector<HTMLElement>(".k-color-picker-hue");
    expect(hue?.getAttribute("role")).toBe("slider");
    hue?.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
    await nextTick();
    expect(wrapper.emitted("change")).toBeTruthy();
    wrapper.unmount();
  });

  it("forwards native attributes and merges root classes", () => {
    const wrapper = mount(ColorPicker, {
      attrs: { id: "brand-color", class: "custom-picker", "aria-label": "Brand color" },
    });

    expect(wrapper.attributes("id")).toBe("brand-color");
    expect(wrapper.classes()).toContain("custom-picker");
    expect(wrapper.attributes("aria-label")).toBe("Brand color");
  });

  it("supports theme and shape appearance classes", async () => {
    const wrapper = mount(ColorPicker, {
      props: { theme: "fill", shape: "circle" },
    });

    expect(wrapper.classes()).toContain("k-color-picker-fill");
    expect(wrapper.classes()).toContain("k-color-picker-circle");

    await wrapper.setProps({ theme: "plain", shape: "square" });

    expect(wrapper.classes()).toContain("k-color-picker-plain");
    expect(wrapper.classes()).toContain("k-color-picker-square");
    expect(wrapper.classes()).not.toContain("k-color-picker-circle");
  });

  it("synchronizes external color and mode changes", async () => {
    const wrapper = mount(ColorPicker, {
      props: { panelOnly: true, modelValue: "#ff0000", mode: "hex" },
    });

    await wrapper.setProps({ modelValue: "rgba(51, 102, 153, 0.5)", mode: "rgb" });
    await nextTick();

    expect(wrapper.findComponent({ name: "Paint" }).props("hue")).toBe(210);
    expect(wrapper.findComponent({ name: "Mode" }).props("mode")).toBe("rgb");
    expect(parseFloat(wrapper.find(".k-color-picker-hue-dot").element.style.left)).toBeCloseTo(
      103.83,
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
