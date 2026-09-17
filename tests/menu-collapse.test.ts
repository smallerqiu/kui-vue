import { mount } from "@vue/test-utils";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import { Menu, MenuItem, SubMenu } from "../components/menu";

beforeAll(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});

describe("Menu inline collapse", () => {
  it("keeps the leaf DOM node when collapsed tooltips are enabled", async () => {
    const wrapper = mount(Menu, {
      props: { mode: "inline" },
      slots: { default: () => h(MenuItem, { key: "leaf" }, () => "Leaf") },
    });
    const item = wrapper.get(".k-menu-item").element;
    await wrapper.setProps({ inlineCollapsed: true });
    expect(wrapper.get(".k-menu-item").element).toBe(item);
    await wrapper.setProps({ inlineCollapsed: false });
    expect(wrapper.get(".k-menu-item").element).toBe(item);
    wrapper.unmount();
  });

  it("preserves nested memory across rapid toggles and forgets manually closed roots", async () => {
    vi.useFakeTimers();
    const wrapper = mount(Menu, {
      props: { mode: "inline", openKeys: ["root", "nested"] },
      slots: {
        default: () =>
          h(SubMenu, { key: "root", title: "Root" }, () =>
            h(SubMenu, { key: "nested", title: "Nested" }, () =>
              h(MenuItem, { key: "leaf" }, () => "Leaf"),
            ),
          ),
      },
    });
    try {
      await wrapper.setProps({ inlineCollapsed: true });
      await vi.advanceTimersByTimeAsync(250);
      await wrapper.setProps({ inlineCollapsed: false });
      await wrapper.setProps({ inlineCollapsed: true });
      await vi.advanceTimersByTimeAsync(250);
      await wrapper.setProps({ inlineCollapsed: false });
      await vi.advanceTimersByTimeAsync(350);
      expect(wrapper.findAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(2);
      await wrapper.findAll(".k-menu-submenu-title")[1].trigger("click");
      await wrapper.findAll(".k-menu-submenu-title")[0].trigger("click");
      await wrapper.setProps({ inlineCollapsed: true });
      await vi.advanceTimersByTimeAsync(250);
      await wrapper.setProps({ inlineCollapsed: false });
      await vi.advanceTimersByTimeAsync(350);
      expect(wrapper.findAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(0);
    } finally {
      wrapper.unmount();
      vi.useRealTimers();
    }
  });

  it("keeps a teleported submenu hidden until popup positioning is ready", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "inline", openKeys: ["group"], inlineCollapsed: false },
      slots: {
        default: () =>
          h(SubMenu, { key: "group", title: "Group" }, () =>
            h(MenuItem, { key: "item" }, () => "Item"),
          ),
      },
    });

    await wrapper.setProps({ inlineCollapsed: true });
    await new Promise((resolve) => setTimeout(resolve, 230));
    await nextTick();

    const popup = document.body.querySelector<HTMLElement>(".k-menu-submenu-popup");
    expect(popup).not.toBeNull();
    expect(popup?.style.visibility).toBe("hidden");
    wrapper.unmount();
  });
});
