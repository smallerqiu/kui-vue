import { mount } from "@vue/test-utils";
import { defineComponent, h, nextTick, onUnmounted } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import Alert from "../components/alert";
import Tag from "../components/tag";

afterEach(() => vi.useRealTimers());

describe.each([
  ["Alert", Alert, { closable: true }, ".k-alert", 300],
  ["Tag", Tag, { closeable: true }, ".k-tag", 200],
] as const)("%s close lifecycle", (_name, Component, props, selector, duration) => {
  it("retains DOM during exit, removes content, and emits each event once", async () => {
    vi.useFakeTimers();
    const cleanup = vi.fn();
    const Child = defineComponent({
      setup() {
        onUnmounted(cleanup);
        return () => h("span", "Content");
      },
    });
    const wrapper = mount(Component, {
      props,
      attachTo: document.body,
      slots: { default: () => h(Child) },
      global: { stubs: { transition: false } },
    });
    const close = document.querySelector<HTMLElement>(`${selector}-close`)!;
    close.click();
    close.click();
    await nextTick();
    expect(wrapper.emitted("close")).toHaveLength(1);
    expect(wrapper.emitted("afterClose")).toBeUndefined();
    expect(document.querySelector(selector)).not.toBeNull();
    await vi.advanceTimersByTimeAsync(duration + 100);
    expect(document.querySelector(selector)).toBeNull();
    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(wrapper.emitted("afterClose")).toHaveLength(1);
    await wrapper.setProps({ color: "blue" });
    expect(document.querySelector(selector)).toBeNull();
    wrapper.unmount();
  });

  it("cancels completion when the parent unmounts during exit", async () => {
    vi.useFakeTimers();
    const onAfterClose = vi.fn();
    const wrapper = mount(Component, {
      props: { ...props, onAfterClose },
      attachTo: document.body,
      global: { stubs: { transition: false } },
    });
    await wrapper.get(`${selector}-close`).trigger("click");
    wrapper.unmount();
    await vi.advanceTimersByTimeAsync(duration + 100);
    expect(onAfterClose).not.toHaveBeenCalled();
    expect(document.querySelector(selector)).toBeNull();
  });
});
