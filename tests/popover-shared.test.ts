import { mount } from "@vue/test-utils";
import { h, nextTick, type Component } from "vue";
import { describe, expect, it, vi } from "vitest";
import Poptip from "../components/poptip";
import Popconfirm from "../components/popconfirm";

describe.each([
  ["poptip", Poptip],
  ["popconfirm", Popconfirm],
] as const)("%s shared popup behavior", (name, component) => {
  it("binds outside clicks for an initially open popup and stops listening after close", async () => {
    const onShow = vi.fn();
    const wrapper = mount(component as Component, {
      props: { show: true, title: "Details", "onUpdate:show": onShow },
      slots: { default: () => h("button", "Open") },
      attachTo: document.body,
    });
    try {
      await nextTick();
      document.body.click();
      expect(onShow).toHaveBeenCalledExactlyOnceWith(false);
      await nextTick();
      document.body.click();
      expect(onShow).toHaveBeenCalledTimes(1);
    } finally {
      wrapper.unmount();
    }
  });

  it("ignores inside clicks and closes on an outside click", async () => {
    const onShow = vi.fn();
    const wrapper = mount(component as Component, {
      props: { title: "Details", trigger: "click", "onUpdate:show": onShow },
      slots: { default: () => h("button", "Open") },
      attachTo: document.body,
    });
    try {
      await wrapper.find("button").trigger("click");
      await nextTick();
      await nextTick();
      expect(onShow).toHaveBeenLastCalledWith(true);
      onShow.mockClear();
      document
        .querySelector(`.k-${name}-title`)!
        .dispatchEvent(new MouseEvent("click", { bubbles: true }));
      expect(onShow).not.toHaveBeenCalled();
      document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      expect(onShow).toHaveBeenLastCalledWith(false);
    } finally {
      wrapper.unmount();
    }
    onShow.mockClear();
    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onShow).not.toHaveBeenCalled();
  });
});
