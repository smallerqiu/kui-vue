import { mount, type VueWrapper } from "@vue/test-utils";
import { Comment, Fragment, defineComponent, h, nextTick, ref } from "vue";
import { beforeEach, afterEach, expect, it, vi } from "vitest";
import { Splitter, SplitterPanel } from "../components/splitter";
const wrappers: VueWrapper[] = [];
beforeEach(() => {
  vi.useFakeTimers();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    width: 1004,
    height: 604,
    left: 0,
    top: 0,
  } as DOMRect);
});
afterEach(() => {
  wrappers.splice(0).forEach((w) => w.unmount());
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});
const pointer = (target: EventTarget, type: string, x: number) => {
  const event = new MouseEvent(type, { bubbles: true, cancelable: true, button: 0, clientX: x });
  Object.defineProperties(event, { pointerId: { value: 1 }, isPrimary: { value: true } });
  target.dispatchEvent(event);
};
const settle = async () => {
  await vi.advanceTimersByTimeAsync(20);
  await nextTick();
};
const sizes = () =>
  [...document.querySelectorAll<HTMLElement>(".k-splitter-item")].map((el) =>
    parseFloat(el.style.flexBasis),
  );
const panels = () => [
  h(SplitterPanel, { key: "a", size: 300, min: 100, collapsible: true }, () =>
    h("input", { value: "keep me" }),
  ),
  h(SplitterPanel, { key: "b", min: 100 }, () => "Right"),
];
const setup = (props = {}) => {
  const w = mount(Splitter, { attachTo: document.body, props, slots: { default: panels } });
  wrappers.push(w);
  return w;
};
it("keeps dragging when resize callbacks rerender the parent and v-model echoes the layout", async () => {
  const value = ref<number[]>(),
    count = ref(0);
  const w = mount(
    defineComponent({
      setup: () => () =>
        h(
          Splitter,
          {
            modelValue: value.value,
            "onUpdate:modelValue": (next: number[]) => {
              value.value = next;
            },
            onResize: () => {
              count.value++;
            },
            "data-count": count.value,
          },
          { default: panels },
        ),
    }),
    { attachTo: document.body },
  );
  wrappers.push(w);
  await settle();
  const handle = document.querySelector<HTMLElement>('[role="separator"]')!;
  pointer(handle, "pointerdown", 307);
  pointer(window, "pointermove", 407);
  await settle();
  expect(sizes()).toEqual([400, 600]);
  expect(value.value).toEqual([400, 600]);
  pointer(window, "pointermove", 457);
  await settle();
  pointer(window, "pointerup", 457);
  await settle();
  expect(sizes()).toEqual([450, 550]);
  value.value = [250, 750];
  await settle();
  expect(sizes()).toEqual([250, 750]);
});
it("updates collapsed binding and restores content without remounting it", async () => {
  const onCollapsed = vi.fn();
  const onCollapsedOnce = vi.fn();
  const w = mount(Splitter, {
    attachTo: document.body,
    slots: {
      default: () => [
        h(
          SplitterPanel,
          {
            size: 300,
            collapsible: true,
            "onUpdate:collapsed": onCollapsed,
            "onUpdate:collapsedOnce": onCollapsedOnce,
          },
          () => h("input"),
        ),
        h(SplitterPanel),
      ],
    },
  });
  wrappers.push(w);
  await settle();
  const input = document.querySelector("input")!;
  input.value = "edited";
  await w.find("button").trigger("click");
  expect(sizes()).toEqual([0, 1000]);
  expect(onCollapsed).toHaveBeenLastCalledWith(true);
  expect(w.find(".k-splitter-item").attributes("inert")).toBeDefined();
  await w.find("button").trigger("click");
  expect(sizes()).toEqual([300, 700]);
  expect(document.querySelector("input")).toBe(input);
  expect(input.value).toBe("edited");
  expect(onCollapsedOnce).toHaveBeenCalledTimes(1);
});
it("does not resize or collapse when disabled", async () => {
  const w = setup({ disabled: true });
  await settle();
  const handle = w.find('[role="separator"]');
  expect(handle.attributes("aria-disabled")).toBe("true");
  expect(w.find("button").attributes("disabled")).toBeDefined();
  pointer(handle.element, "pointerdown", 300);
  pointer(window, "pointerup", 500);
  await handle.trigger("keydown", { key: "ArrowRight" });
  expect(sizes()).toEqual([300, 700]);
  expect(w.emitted("change")).toBeUndefined();
});
it("flattens conditional and loop fragments into actual panels", async () => {
  const w = mount(Splitter, {
    attachTo: document.body,
    slots: {
      default: () => [
        h(Comment),
        h(Fragment, {}, [h(SplitterPanel, { key: "a" }), h(SplitterPanel, { key: "b" })]),
      ],
    },
  });
  wrappers.push(w);
  await settle();
  expect(w.findAll(".k-splitter-item")).toHaveLength(2);
  expect(w.findAll('[role="separator"]')).toHaveLength(1);
  expect(sizes()).toEqual([500, 500]);
});
it("renders the lazy preview while retaining panel widths until release", async () => {
  const w = setup({ lazy: true });
  await settle();
  pointer(w.find('[role="separator"]').element, "pointerdown", 300);
  pointer(window, "pointermove", 400);
  await settle();
  expect(sizes()).toEqual([300, 700]);
  expect(w.find(".k-splitter-preview").attributes("style")).toContain("translateX(100px)");
  pointer(window, "pointerup", 400);
  await settle();
  expect(sizes()).toEqual([400, 600]);
  expect(w.find(".k-splitter-preview").exists()).toBe(false);
});
