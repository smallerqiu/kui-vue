import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { nextTick, h, ref } from "vue";
import GradientPicker from "../components/gradient-picker";
import {
  createCornerGradient,
  createLinearGradient,
  formatGradient,
  normalizeGradient,
  mixGradientColor,
  type CornerGradientValue,
  type GradientStop,
  type GradientValue,
} from "../components/gradient-picker/types";

const canvasContext = {
  clearRect: vi.fn(),
  createLinearGradient: () => ({ addColorStop: vi.fn() }),
  fillRect: vi.fn(),
  fillStyle: "",
};

const linear = (): GradientValue => [
  { color: "#ff0000", offset: 0 },
  { color: "#00ff00", offset: 50 },
  { color: "#0000ff", offset: 100 },
];

const stopsOf = (value: GradientValue) => value as GradientStop[];
const colorsOf = (value: GradientValue) => value as CornerGradientValue;

// The lane and the hue slider are both 190px wide from x = 0, so clientX / 1.9 is the offset.
const mousedown = (element: Element, x: number, y = 0) =>
  element.dispatchEvent(new MouseEvent("mousedown", { clientX: x, clientY: y, bubbles: true }));
const mousemove = (x: number, y = 0) =>
  document.dispatchEvent(new MouseEvent("mousemove", { clientX: x, clientY: y }));
const mouseup = () => document.dispatchEvent(new MouseEvent("mouseup"));
const pressKey = (element: Element, key: string, shiftKey = false) =>
  element.dispatchEvent(new KeyboardEvent("keydown", { key, shiftKey, bubbles: true }));

const lastValue = (wrapper: ReturnType<typeof mount>) => {
  const emitted = wrapper.emitted("update:modelValue") as GradientValue[][];
  return emitted.at(-1)![0] as GradientValue;
};

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    canvasContext as unknown as CanvasRenderingContext2D,
  );
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function () {
    const width = this.classList?.contains("k-color-picker-paint") ? 234 : 190;
    const height = this.classList?.contains("k-color-picker-paint") ? 136 : 8;
    return { width, height, left: 0, top: 0, right: width, bottom: height } as DOMRect;
  });
});

afterEach(() => {
  vi.restoreAllMocks();
  document.body.innerHTML = "";
});

describe("GradientPicker", () => {
  it("accepts an external value even after it was emitted earlier", async () => {
    const a = linear();
    const wrapper = mount(GradientPicker, { props: { modelValue: a } });
    await wrapper.get('[role="slider"]').trigger("keydown", { key: "ArrowRight" });
    const b = lastValue(wrapper);
    await wrapper.setProps({ modelValue: b });
    await wrapper.setProps({ modelValue: a });
    await wrapper.setProps({ modelValue: b });
    expect(wrapper.get('[role="slider"]').attributes("aria-valuenow")).toBe("1");
    wrapper.unmount();
  });

  it("keeps duplicate and tightly spaced stops within their neighbours", async () => {
    const wrapper = mount(GradientPicker, {
      props: {
        modelValue: [
          { color: "#f00", offset: 0 },
          { color: "#0f0", offset: 0 },
          { color: "#00f", offset: 0.05 },
          { color: "#fff", offset: 100 },
        ],
      },
    });
    await wrapper.findAll('[role="slider"]')[0].trigger("keydown", { key: "ArrowRight" });
    expect(stopsOf(lastValue(wrapper))[0].offset).toBe(0);
    await wrapper.findAll('[role="slider"]')[2].trigger("keydown", { key: "Home" });
    expect(stopsOf(lastValue(wrapper))[2].offset).toBe(0.05);
    wrapper.unmount();
  });

  it("interpolates premultiplied alpha when adding a color stop", () => {
    expect(mixGradientColor("#ff000000", "#0000ff", 0.5)).toBe("#0000ff80");
    expect(mixGradientColor("#ff000000", "#0000ff00", 0.5)).toBe("#00000000");
  });

  it("supports touch dragging and cancels without deleting", async () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });
    const marker = wrapper.findAll('[role="slider"]')[1];
    await marker.trigger("touchstart", { touches: [{ clientX: 95, clientY: 0 }] });
    const move = new Event("touchmove", { cancelable: true });
    Object.defineProperty(move, "touches", { value: [{ clientX: 38, clientY: 60 }] });
    document.dispatchEvent(move);
    await nextTick();
    expect(stopsOf(lastValue(wrapper))[1].offset).toBe(20);
    document.dispatchEvent(new Event("touchcancel"));
    await nextTick();
    expect(wrapper.findAll('[role="slider"]')).toHaveLength(3);
    expect(marker.classes()).not.toContain("k-gradient-picker-stop-removing");
    const count = wrapper.emitted("change")!.length;
    document.dispatchEvent(move);
    expect(wrapper.emitted("change")!.length).toBe(count);
    wrapper.unmount();
  });

  it("removes readonly handles from editing and keyboard focus", () => {
    const wrapper = mount(GradientPicker, { props: { readonly: true } });
    expect(wrapper.get('[role="slider"]').attributes("tabindex")).toBe("-1");
    wrapper.unmount();
  });
  it("normalizes values and converts between the two types", () => {
    expect(normalizeGradient(undefined)).toEqual(createLinearGradient());
    expect(
      normalizeGradient([
        { color: "#00ff00", offset: 120 },
        { color: "#ff0000", offset: -5 },
      ]),
    ).toEqual([
      { color: "#ff0000", offset: 0 },
      { color: "#00ff00", offset: 100 },
    ]);
    expect(normalizeGradient(undefined, "corner")).toEqual(createCornerGradient());
    expect(normalizeGradient(linear(), "corner")).toEqual([
      "#ff0000",
      "#0000ff",
      "#ff0000",
      "#0000ff",
    ]);
    expect(normalizeGradient(["#ff0000", "#00ff00", "#0000ff", "#ffffff"])).toEqual([
      { color: "#ff0000", offset: 0 },
      { color: "#ffffff", offset: 100 },
    ]);
  });

  it("formats the value as preview CSS without owning the gradient function", () => {
    expect(
      formatGradient([
        { color: "#0000ff", offset: 100 },
        { color: "#ff0000", offset: 0 },
      ]),
    ).toBe("linear-gradient(90deg, #ff0000 0%, #0000ff 100%)");
    const corner = formatGradient(createCornerGradient());
    expect(corner.startsWith("radial-gradient(at 0% 0%, #ff0000")).toBe(true);
    expect(corner.endsWith("linear-gradient(135deg, #ff0000 0%, #0000ff 100%)")).toBe(true);
  });

  it("renders the painted bar itself, without a trigger box", () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });

    expect(wrapper.find(".k-gradient-picker-bar-fill").attributes("style")).toContain(
      "linear-gradient(90deg,",
    );
    expect(wrapper.findAll(".k-gradient-picker-stop")).toHaveLength(3);
    expect(wrapper.find("[role=button]").exists()).toBe(false);
    expect(document.body.querySelector(".k-color-picker-dropdown")).toBeNull();

    const corner = mount(GradientPicker, {
      props: { modelValue: createCornerGradient(), type: "corner" },
    });
    expect(corner.find(".k-gradient-picker-corners-color").attributes("style")).toContain(
      "radial-gradient(at 0% 0%,",
    );
    expect(corner.findAll(".k-gradient-picker-corner")).toHaveLength(4);
  });

  it("mirrors the three control sizes on the root", () => {
    const small = mount(GradientPicker, { props: { modelValue: linear(), size: "small" } });
    expect(small.classes()).toContain("k-gradient-picker-sm");

    const medium = mount(GradientPicker, { props: { modelValue: linear() } });
    expect(medium.classes()).not.toContain("k-gradient-picker-sm");
    expect(medium.classes()).not.toContain("k-gradient-picker-lg");

    const large = mount(GradientPicker, { props: { modelValue: linear(), size: "large" } });
    expect(large.classes()).toContain("k-gradient-picker-lg");

    const corner = mount(GradientPicker, {
      props: { modelValue: createCornerGradient(), type: "corner", size: "small" },
    });
    expect(corner.classes()).toContain("k-gradient-picker-sm");
  });

  it("adds a stop on click with the interpolated color", async () => {
    // Red to green: halfway is #808000.
    const wrapper = mount(GradientPicker, {
      props: {
        modelValue: [
          { color: "#ff0000", offset: 0 },
          { color: "#00ff00", offset: 100 },
        ],
      },
    });

    mousedown(wrapper.find(".k-gradient-picker-stops").element, 95);
    await nextTick();
    mouseup();
    await nextTick();

    expect(stopsOf(lastValue(wrapper))).toEqual([
      { color: "#ff0000", offset: 0 },
      { color: "#808000", offset: 50 },
      { color: "#00ff00", offset: 100 },
    ]);
    expect(wrapper.findAll(".k-gradient-picker-stop")).toHaveLength(3);
    expect(wrapper.findAll(".k-gradient-picker-stop")[1].classes()).toContain(
      "k-gradient-picker-stop-active",
    );
    // Adding a stop is not a request to open its color panel.
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();
  });

  it("drags a stop and keeps it between its neighbours", async () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mousemove(19);
    await nextTick();
    mouseup();
    await nextTick();

    expect(stopsOf(lastValue(wrapper))[1].offset).toBe(10);

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 19);
    await nextTick();
    mousemove(190);
    await nextTick();
    mouseup();
    await nextTick();

    expect(stopsOf(lastValue(wrapper))[1].offset).toBe(99.9);
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();
  });

  it("removes a stop only after dragging it down, never below two", async () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mousemove(95, 60);
    await nextTick();
    expect(wrapper.findAll(".k-gradient-picker-stop")[1].classes()).toContain(
      "k-gradient-picker-stop-removing",
    );
    mouseup();
    await nextTick();

    expect(stopsOf(lastValue(wrapper)).map((stop) => stop.color)).toEqual(["#ff0000", "#0000ff"]);
    expect(wrapper.findAll(".k-gradient-picker-stop")).toHaveLength(2);

    const before = (wrapper.emitted("update:modelValue") as GradientValue[][]).length;
    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mousemove(95, 60);
    await nextTick();
    mouseup();
    await nextTick();
    const after = (wrapper.emitted("update:modelValue") as GradientValue[][])
      .slice(before)
      .map(([next]) => next as GradientValue);
    expect(after.every((next) => Array.isArray(next) && stopsOf(next).length === 2)).toBe(true);
  });

  it("moves and deletes stops from the keyboard", async () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });

    pressKey(wrapper.findAll(".k-gradient-picker-stop")[1].element, "ArrowRight");
    await nextTick();
    expect(stopsOf(lastValue(wrapper))[1].offset).toBe(51);

    pressKey(wrapper.findAll(".k-gradient-picker-stop")[1].element, "ArrowLeft", true);
    await nextTick();
    expect(stopsOf(lastValue(wrapper))[1].offset).toBe(41);

    pressKey(wrapper.findAll(".k-gradient-picker-stop")[1].element, "Delete");
    await nextTick();
    expect(stopsOf(lastValue(wrapper))).toHaveLength(2);
  });

  it("opens the color panel when a stop is clicked, not dragged", async () => {
    const wrapper = mount(GradientPicker, {
      props: { modelValue: linear() },
      attachTo: document.body,
    });

    // A press that travels is a drag and must not pop the panel.
    mousedown(wrapper.findAll(".k-gradient-picker-stop")[0].element, 0);
    await nextTick();
    mousemove(20);
    await nextTick();
    mouseup();
    await nextTick();
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    await nextTick();

    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();
    expect(document.body.querySelector(".k-color-picker-paint")).not.toBeNull();
    expect(
      document.body.querySelector(".k-gradient-picker-color-popup .k-color-picker-arrow svg"),
    ).not.toBeNull();
    expect(
      document.body.querySelector(".k-gradient-picker-color-popup")?.getAttribute("k-placement"),
    ).toContain("bottom");

    // The panel has no alpha: the hue slider is the last row it shows.
    expect(document.body.querySelector(".k-color-picker-alpha")).toBeNull();

    const hue = document.body.querySelector<HTMLElement>(".k-color-picker-hue")!;
    pressKey(hue, "ArrowRight");
    await nextTick();

    const stops = stopsOf(lastValue(wrapper));
    expect(stops[1].color).not.toBe("#00ff00");
    expect(stops[1].color).toHaveLength(7);
    expect(stops[0].color).toBe("#ff0000");
    expect(stops[2].color).toBe("#0000ff");
    wrapper.unmount();
  });

  it("opens the color panel from an activated stop's keyboard", async () => {
    const wrapper = mount(GradientPicker, {
      props: { modelValue: linear() },
      attachTo: document.body,
    });

    pressKey(wrapper.findAll(".k-gradient-picker-stop")[2].element, "Enter");
    await nextTick();
    await nextTick();

    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();
    pressKey(document.body.querySelector<HTMLElement>(".k-color-picker-hue")!, "ArrowRight");
    await nextTick();

    const stops = stopsOf(lastValue(wrapper));
    expect(stops[2].color).not.toBe("#0000ff");
    expect(stops[2].color).toHaveLength(7);
    expect(stops[0].color).toBe("#ff0000");
    wrapper.unmount();
  });

  it("shows the opacity row with alpha and keeps the alpha in the color", async () => {
    const wrapper = mount(GradientPicker, {
      props: { modelValue: linear(), alpha: true },
      attachTo: document.body,
    });

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    await nextTick();

    const alpha = document.body.querySelector<HTMLElement>(".k-color-picker-alpha");
    expect(alpha).not.toBeNull();
    pressKey(alpha!, "Home");
    await nextTick();

    const stops = stopsOf(lastValue(wrapper));
    expect(stops[1].color).toBe("#00ff0000");
    expect(stops[0].color).toBe("#ff0000");
    wrapper.unmount();
  });

  it("edits only the clicked corner", async () => {
    const wrapper = mount(GradientPicker, {
      props: { type: "corner" },
      attachTo: document.body,
    });

    expect(wrapper.findAll(".k-gradient-picker-corner")).toHaveLength(4);
    await wrapper.find(".k-gradient-picker-corner-tr").trigger("click");
    await nextTick();
    await nextTick();

    expect(wrapper.find(".k-gradient-picker-corner-tr").attributes("aria-pressed")).toBe("true");
    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();
    expect(document.body.querySelector(".k-color-picker-alpha")).toBeNull();

    pressKey(document.body.querySelector<HTMLElement>(".k-color-picker-hue")!, "ArrowRight");
    await nextTick();

    const colors = colorsOf(lastValue(wrapper));
    expect(colors[1]).not.toBe("#ffff00");
    expect(colors[1]).toHaveLength(7);
    expect(colors[0]).toBe("#ff0000");
    expect(colors[2]).toBe("#00ff00");
    expect(colors[3]).toBe("#0000ff");
    wrapper.unmount();
  });

  it("hands the new value, and only the value, to change", async () => {
    const wrapper = mount(GradientPicker, { props: { modelValue: linear() } });

    mousedown(wrapper.find(".k-gradient-picker-stops").element, 38);
    await nextTick();
    mouseup();
    await nextTick();

    const change = wrapper.emitted("change") as [GradientValue][];
    expect(change.at(-1)![0]).toEqual(lastValue(wrapper));
    expect(stopsOf(change.at(-1)![0])).toHaveLength(4);
  });

  it("blocks every edit while disabled or read-only", async () => {
    const wrapper = mount(GradientPicker, {
      props: { modelValue: linear(), disabled: true },
      attachTo: document.body,
    });

    mousedown(wrapper.find(".k-gradient-picker-stops").element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.find(".k-gradient-picker-stop").attributes("tabindex")).toBe("-1");
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();
    wrapper.unmount();

    const corner = mount(GradientPicker, {
      props: { type: "corner", disabled: true },
    });
    expect(corner.find(".k-gradient-picker-corner").attributes("disabled")).toBeDefined();
    await corner.find(".k-gradient-picker-corner-tr").trigger("click");
    expect(corner.emitted("update:modelValue")).toBeUndefined();

    const readonly = mount(GradientPicker, {
      props: { modelValue: linear(), readonly: true },
      attachTo: document.body,
    });
    expect(readonly.classes()).toContain("k-gradient-picker-readonly");
    mousedown(readonly.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    expect(readonly.emitted("update:modelValue")).toBeUndefined();
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();
    readonly.unmount();
  });

  it("closes the color panel when the external value changes", async () => {
    const wrapper = mount(GradientPicker, {
      props: { modelValue: linear() },
      attachTo: document.body,
    });

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    await nextTick();
    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();

    await wrapper.setProps({ modelValue: createCornerGradient() });
    await nextTick();
    await nextTick();
    expect(document.body.querySelector(".k-color-picker-panel")).toBeNull();
    wrapper.unmount();
  });

  it("keeps the color panel open when v-model echoes the edit back", async () => {
    const value = ref<GradientValue>(linear());
    const wrapper = mount(
      {
        setup: () => () =>
          h(GradientPicker, {
            modelValue: value.value,
            "onUpdate:modelValue": (next: GradientValue) => (value.value = next),
          }),
      },
      { attachTo: document.body },
    );

    mousedown(wrapper.findAll(".k-gradient-picker-stop")[1].element, 95);
    await nextTick();
    mouseup();
    await nextTick();
    await nextTick();
    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();

    pressKey(document.body.querySelector<HTMLElement>(".k-color-picker-hue")!, "ArrowRight");
    await nextTick();
    await nextTick();

    const markers = wrapper.findAll(".k-gradient-picker-stop");
    expect(markers[1].find(".k-gradient-picker-stop-color").attributes("style")).not.toContain(
      "background-color: rgb(0, 255, 0)",
    );
    expect(document.body.querySelector(".k-color-picker-panel")).not.toBeNull();
    wrapper.unmount();
  });
});
