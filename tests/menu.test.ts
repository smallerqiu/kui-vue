import { mount } from "@vue/test-utils";
import { defineComponent, h } from "vue";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { Menu, MenuItem } from "../components/menu";

beforeAll(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      disconnect() {}
    },
  );
});

describe("MenuItem", () => {
  it("does not emit click or select when disabled", async () => {
    const onClick = vi.fn();
    const onSelect = vi.fn();
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(Menu, { onSelect }, () =>
            h(MenuItem, { key: "disabled", disabled: true, onClick }, () => "Disabled"),
          ),
      ),
    );

    await wrapper.get(".k-menu-item").trigger("click");

    expect(onClick).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("emits click and select when enabled", async () => {
    const onClick = vi.fn();
    const onSelect = vi.fn();
    const wrapper = mount(
      defineComponent(
        () => () =>
          h(Menu, { onSelect }, () => h(MenuItem, { key: "enabled", onClick }, () => "Enabled")),
      ),
    );

    await wrapper.get(".k-menu-item").trigger("click");

    expect(onClick).toHaveBeenCalledOnce();
    expect(onSelect).toHaveBeenCalledWith({ key: "enabled", keyPath: [] });
  });
});
