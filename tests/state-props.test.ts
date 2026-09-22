import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Table from "../components/table";
import Tour from "../components/tour";
import AutoComplete from "../components/auto-complete";

describe("unified state props", () => {
  it("AutoComplete populates options when open changes externally", async () => {
    const wrapper = mount(AutoComplete, {
      attachTo: document.body,
      props: {
        open: false,
        showOnEmpty: true,
        options: ["One"],
      },
    });
    expect(document.querySelector('[role="option"]')).toBeNull();
    await wrapper.setProps({ open: true });
    expect(document.querySelector('[role="option"]')?.textContent).toContain("One");
    wrapper.unmount();
  });
  it("Table initializes expandedKeys and synchronizes external updates after interaction", async () => {
    const expandedKeys = ["p"];
    const wrapper = mount(Table, {
      props: {
        data: [{ key: "p", name: "Parent", children: [{ key: "c", name: "Child" }] }],
        columns: [{ key: "name", title: "Name" }],
        expandedKeys,
      },
    });
    expect(wrapper.text()).toContain("Child");
    await wrapper.get('[aria-label="Collapse row"]').trigger("click");
    expect(wrapper.text()).not.toContain("Child");
    await wrapper.setProps({ expandedKeys });
    expect(wrapper.text()).not.toContain("Child");
    await wrapper.setProps({ expandedKeys: ["p"] });
    expect(wrapper.text()).toContain("Child");
    await wrapper.setProps({ expandedKeys: [], expandAllRows: true });
    expect(wrapper.text()).not.toContain("Child");
    await wrapper.setProps({ expandedKeys: undefined });
    expect(wrapper.text()).toContain("Child");
    await wrapper.setProps({ expandAllRows: false });
    expect(wrapper.text()).not.toContain("Child");
    wrapper.unmount();
  });

  it.each(["open", "modelValue"] as const)(
    "Tour supports local interaction and external %s updates",
    async (prop) => {
      const wrapper = mount(Tour, {
        attachTo: document.body,
        props: {
          [prop]: true,
          current: 1,
          steps: [{ title: "First" }, { title: "Second" }],
        },
      });
      expect(document.querySelector(".k-tour-panel")?.textContent).toContain("Second");
      await wrapper.setProps({ current: 0 });
      expect(document.querySelector(".k-tour-panel")?.textContent).toContain("First");
      (document.querySelector(".k-tour-close") as HTMLElement).click();
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("update:open")?.at(-1)).toEqual([false]);
      expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([false]);
      await wrapper.setProps({ [prop]: false });
      await wrapper.setProps({ [prop]: true });
      expect((document.querySelector(".k-tour-panel") as HTMLElement).style.display).not.toBe(
        "none",
      );
      wrapper.unmount();
    },
  );
});
