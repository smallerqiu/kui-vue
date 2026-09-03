import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import Collapse from "../components/collapse/collapse";
import CollapsePanel from "../components/collapse/collapse-panel";

describe("Collapse", () => {
  it("supports keyboard interaction and emits the complete open key list", async () => {
    const openKeys = ref<(string | number)[]>([]);
    const wrapper = mount(
      defineComponent(() => () =>
        h(
          Collapse,
          {
            openKeys: openKeys.value,
            "onUpdate:openKeys": (value: (string | number)[]) => (openKeys.value = value),
          },
          { default: () => h(CollapsePanel, { key: "first", title: "First" }, () => "Content") },
        ),
      ),
    );
    const header = wrapper.find(".k-collapse-header");

    expect(header.attributes("aria-expanded")).toBe("false");
    await header.trigger("keydown", { key: "Enter" });
    await nextTick();

    expect(openKeys.value).toEqual(["first"]);
    expect(header.attributes("aria-expanded")).toBe("true");
  });

  it("does not toggle a disabled panel", async () => {
    const wrapper = mount(Collapse, {
      slots: {
        default: () =>
          h(CollapsePanel, { key: "disabled", title: "Disabled", disabled: true }, () => "Content"),
      },
    });
    const header = wrapper.find(".k-collapse-header");

    await header.trigger("click");
    await header.trigger("keydown", { key: " " });

    expect(wrapper.emitted("update:openKeys")).toBeUndefined();
    expect(header.attributes("aria-disabled")).toBe("true");
    expect(header.attributes("tabindex")).toBe("-1");
  });

  it("does not toggle when the extra content is clicked", async () => {
    const wrapper = mount(Collapse, {
      slots: {
        default: () =>
          h(
            CollapsePanel,
            { key: "first", title: "First" },
            { default: () => "Content", extra: () => h("button", "Action") },
          ),
      },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted("update:openKeys")).toBeUndefined();
  });
});
