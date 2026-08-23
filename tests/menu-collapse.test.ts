import { mount } from "@vue/test-utils";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import { Menu, MenuItem, SubMenu } from "../components/menu";

beforeAll(() => {
  vi.stubGlobal("ResizeObserver", class {
    observe() {}
    disconnect() {}
  });
});

describe("Menu inline collapse", () => {
  it("keeps a teleported submenu hidden until popup positioning is ready", async () => {
    const wrapper = mount(Menu, {
      attachTo: document.body,
      props: { mode: "inline", openKeys: ["group"], inlineCollapsed: false },
      slots: {
        default: () => h(SubMenu, { key: "group", title: "Group" }, () => h(MenuItem, { key: "item" }, () => "Item")),
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
