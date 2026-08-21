import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import { TabPanel, Tabs } from "../components/tabs";

const flushLayout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 30));
  await nextTick();
};

describe("Tabs scroll navigation", () => {
  it("updates the ink bar when the active panel title changes", async () => {
    const title = ref("Short");
    const Demo = defineComponent(
      () => () =>
        h(Tabs, { modelValue: "first" }, () => [
          h(TabPanel, { key: "first", title: title.value }, () => "Content"),
        ])
    );
    const wrapper = mount(Demo, { attachTo: document.body });
    const tab = wrapper.get<HTMLElement>(".k-tabs-tab").element;
    Object.defineProperty(tab, "offsetWidth", {
      configurable: true,
      get: () => (tab.textContent?.length ?? 0) * 10,
    });

    await flushLayout();
    expect(wrapper.get<HTMLElement>(".k-tabs-ink-bar").element.style.width).toBe("50px");

    title.value = "A much longer title";
    await flushLayout();
    expect(wrapper.get<HTMLElement>(".k-tabs-ink-bar").element.style.width).toBe("190px");
    wrapper.unmount();
  });

  it("keeps the active tab visible when its container becomes narrower", async () => {
    const originalResizeObserver = globalThis.ResizeObserver;
    let triggerResize = () => {};
    class MockResizeObserver {
      constructor(callback: ResizeObserverCallback) {
        triggerResize = () => callback([], this as unknown as ResizeObserver);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal("ResizeObserver", MockResizeObserver);

    const panels = Array.from({ length: 6 }, (_, index) =>
      h(TabPanel, { key: `tab-${index}`, title: `Tab ${index}` }, () => `Content ${index}`)
    );
    const wrapper = mount(Tabs, {
      attachTo: document.body,
      props: { modelValue: "tab-0" },
      slots: { default: () => panels },
    });
    const wrap = wrapper.get<HTMLElement>(".k-tabs-nav-wrap").element;
    const inner = wrapper.get<HTMLElement>(".k-tabs-nav-inner").element;
    Object.defineProperty(wrap, "clientWidth", { configurable: true, value: 200 });
    Object.defineProperty(inner, "scrollWidth", { configurable: true, value: 600 });
    Array.from(inner.children).forEach((tab, index) => {
      Object.defineProperty(tab, "offsetLeft", { configurable: true, value: index * 100 });
      Object.defineProperty(tab, "offsetWidth", { configurable: true, value: 100 });
    });

    await wrapper.setProps({ modelValue: "tab-5" });
    triggerResize();
    await flushLayout();
    expect(wrapper.get<HTMLElement>(".k-tabs-nav").element.style.transform).toBe(
      "translate3d(-400px,0,0)"
    );

    Object.defineProperty(wrap, "clientWidth", { configurable: true, value: 100 });
    triggerResize();
    await flushLayout();
    expect(wrapper.get<HTMLElement>(".k-tabs-nav").element.style.transform).toBe(
      "translate3d(-500px,0,0)"
    );
    expect(wrapper.get<HTMLButtonElement>(".k-tabs-tab-btn-next").element.disabled).toBe(true);

    wrapper.unmount();
    vi.stubGlobal("ResizeObserver", originalResizeObserver);
  });
});
