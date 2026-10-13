import { mount } from "@vue/test-utils";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
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
      props: { mode: "inline", inlineCollapsed: true },
      slots: {
        default: () =>
          h(SubMenu, { key: "group", title: "Group" }, () =>
            h(MenuItem, { key: "item" }, () => "Item"),
          ),
      },
    });

    // 折叠态下没有常驻面板（关闭即卸载），所以面板只在 hover 展开时才挂出来：
    // 它一出现就该是 visibility: hidden，等定位算完才亮，免得在旧坐标上闪一下。
    document
      .querySelector(".k-menu-submenu-title")!
      .dispatchEvent(new MouseEvent("mouseenter", { bubbles: false }));
    await nextTick();
    await nextTick();

    const popup = document.body.querySelector<HTMLElement>(".k-menu-submenu-popup");
    expect(popup).not.toBeNull();
    expect(popup?.style.visibility).toBe("hidden");

    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(document.body.querySelector<HTMLElement>(".k-menu-submenu-popup")?.style.visibility).toBe(
      "",
    );
    wrapper.unmount();
  });

  it("unmounts the submenu panel once the inline menu collapses", async () => {
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
    await nextTick();
    expect(document.querySelector(".k-menu-submenu-sub")).not.toBeNull();

    await wrapper.setProps({ inlineCollapsed: true });
    await new Promise((resolve) => setTimeout(resolve, 320));
    // 收起即卸载：向 react 的 <Transition unmountOnExit>（默认 true）对齐，
    // 折叠记忆留在状态里，DOM 里不留隐藏的子面板。
    expect(document.querySelector(".k-menu-submenu-sub")).toBeNull();
    expect(document.body.querySelector(".k-menu-submenu-popup")).toBeNull();

    await wrapper.setProps({ inlineCollapsed: false });
    await new Promise((resolve) => setTimeout(resolve, 400));
    expect(document.querySelector(".k-menu-submenu-sub")).not.toBeNull();
    wrapper.unmount();
  });

  it("writes an external openKeys update made while collapsed into the expansion memory", async () => {
    vi.useFakeTimers();
    const wrapper = mount(Menu, {
      props: { mode: "inline", inlineCollapsed: true, openKeys: ["root"] },
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
      await vi.advanceTimersByTimeAsync(250);
      await wrapper.setProps({ openKeys: ["root", "nested"] });
      await vi.advanceTimersByTimeAsync(250);
      // Nothing is expanded while collapsed: the popup path is transient hover state.
      expect(wrapper.findAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(0);
      await wrapper.setProps({ inlineCollapsed: false });
      await vi.advanceTimersByTimeAsync(400);
      expect(wrapper.findAll('.k-menu-submenu-title[aria-expanded="true"]')).toHaveLength(2);
    } finally {
      wrapper.unmount();
      vi.useRealTimers();
    }
  });

  it("does not let a collapsed popup's own report overwrite the inline memory", async () => {
    vi.useFakeTimers();
    const openKeys = ref(["root", "nested"]);
    const collapsed = ref(false);
    const Host = defineComponent({
      setup() {
        return () =>
          h(
            Menu,
            {
              mode: "inline",
              openKeys: openKeys.value,
              inlineCollapsed: collapsed.value,
              "onUpdate:openKeys": (keys: string[]) => {
                openKeys.value = [...keys];
              },
            },
            () =>
              h(SubMenu, { key: "root", title: "Root" }, () =>
                h(SubMenu, { key: "nested", title: "Nested" }, () =>
                  h(MenuItem, { key: "leaf" }, () => "Leaf"),
                ),
              ),
          );
      },
    });
    const wrapper = mount(Host, { attachTo: document.body });
    try {
      await nextTick();
      const expanded = () =>
        document.querySelectorAll('.k-menu-submenu-title[aria-expanded="true"]').length;
      expect(expanded()).toBe(2);
      collapsed.value = true;
      await nextTick();
      await vi.advanceTimersByTimeAsync(250);
      expect(expanded()).toBe(0);
      document
        .querySelector(".k-menu-submenu-title")!
        .dispatchEvent(new MouseEvent("mouseenter", { bubbles: false }));
      await nextTick();
      await vi.advanceTimersByTimeAsync(100);
      // The hover report comes back as an openKeys prop update; it must not replace memory.
      expect(openKeys.value).toEqual(["root"]);
      collapsed.value = false;
      await nextTick();
      await vi.advanceTimersByTimeAsync(400);
      expect(expanded()).toBe(2);
      expect(openKeys.value).toEqual(["root", "nested"]);
    } finally {
      wrapper.unmount();
      vi.useRealTimers();
    }
  });
});
