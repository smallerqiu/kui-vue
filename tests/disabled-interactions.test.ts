import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { h, nextTick, ref } from "vue";
import Select from "../components/select/select";
import { TabPanel, Tabs } from "../components/tabs";
import Upload from "../components/upload/index";
import DatePicker from "../components/date-picker";
import InputTag from "../components/input-tag";
import Tree from "../components/tree";
import Option from "../components/select/option";
import Slider from "../components/slider";
import { Dropdown } from "../components/dropdown";
import { MenuItem } from "../components/menu";

describe("disabled interaction guards", () => {
  it("clears MenuItem hover styling while disabled and after leaving", async () => {
    const wrapper = mount(MenuItem, { props: { title: "Item" } });
    await wrapper.trigger("mouseenter");
    expect(wrapper.classes()).toContain("k-menu-item-active");
    await wrapper.setProps({ disabled: true });
    expect(wrapper.classes()).not.toContain("k-menu-item-active");
    await wrapper.trigger("mouseleave");
    await wrapper.setProps({ disabled: false });
    expect(wrapper.classes()).not.toContain("k-menu-item-active");
    await wrapper.trigger("mouseenter");
    expect(wrapper.classes()).toContain("k-menu-item-active");
    wrapper.unmount();
  });

  it.each(["Enter", " ", "ArrowRight"])(
    "does not redirect %s from a disabled Tree node to another node",
    async (key) => {
      const onSelect = vi.fn();
      const onCheck = vi.fn();
      const onExpand = vi.fn();
      const data = (disabled: boolean) => [
        { key: "first", title: "First", disabled },
        { key: "second", title: "Second", children: [{ key: "child", title: "Child" }] },
      ];
      const wrapper = mount(Tree, {
        props: { checkable: true, data: data(false), onSelect, onCheck, onExpand },
      });
      await wrapper.get('[data-tree-key="first"]').trigger("focus");
      await wrapper.setProps({ data: data(true) });
      const row = wrapper.get('[data-tree-key="first"]');
      await row.trigger("keydown", { key });
      expect(onSelect).not.toHaveBeenCalled();
      expect(onCheck).not.toHaveBeenCalled();
      expect(onExpand).not.toHaveBeenCalled();
      expect(row.attributes("tabindex")).toBe("-1");
      const enabled = wrapper.get('[data-tree-key="second"]');
      expect(enabled.attributes("tabindex")).toBe("0");
      await enabled.trigger("focus");
      await enabled.trigger("keydown", { key });
      expect(key === "Enter" ? onSelect : key === " " ? onCheck : onExpand).toHaveBeenCalledTimes(
        1,
      );
      wrapper.unmount();
    },
  );

  it.each(["ArrowDown", "ArrowUp", "Enter", " "])(
    "does not open a disabled Dropdown with %s",
    async (key) => {
      const onOpenChange = vi.fn();
      const wrapper = mount(Dropdown, {
        props: { disabled: true, trigger: "click", onOpenChange },
        slots: { default: () => h("button", "Trigger"), overlay: () => h("div", "Menu") },
      });
      await wrapper.get("button").trigger("keydown", { key });
      expect(onOpenChange).not.toHaveBeenCalled();
      expect(wrapper.get("button").attributes("aria-expanded")).toBe("false");
      await wrapper.setProps({ disabled: false });
      await wrapper.get("button").trigger("keydown", { key });
      await nextTick();
      expect(onOpenChange).toHaveBeenCalledWith(true);
      expect(wrapper.get("button").attributes("aria-expanded")).toBe("true");
      wrapper.unmount();
    },
  );

  it("ignores keyboard navigation from a tab that becomes disabled", async () => {
    const onChange = vi.fn();
    const disabled = ref(false);
    const wrapper = mount(Tabs, {
      props: { onTabClick: onChange },
      slots: {
        default: () => [
          h(TabPanel, { key: "one", title: "One", disabled: disabled.value }),
          h(TabPanel, { key: "two", title: "Two" }),
        ],
      },
    });
    disabled.value = true;
    await nextTick();
    await wrapper.findAll('[role="tab"]')[0].trigger("keydown", { key: "ArrowRight" });
    expect(onChange).not.toHaveBeenCalled();
    disabled.value = false;
    await nextTick();
    await wrapper.findAll('[role="tab"]')[0].trigger("keydown", { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("guards Option callbacks without replacing selection when enabled", async () => {
    const onClick = vi.fn();
    const onMouseenter = vi.fn();
    const onSelect = vi.fn();
    const wrapper = mount(Option, {
      props: { value: "one", disabled: true, onClick, onMouseenter, onSelect },
    });
    await wrapper.trigger("click");
    await wrapper.trigger("mouseenter");
    expect(onClick).not.toHaveBeenCalled();
    expect(onMouseenter).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
    await wrapper.setProps({ disabled: false });
    await wrapper.trigger("click");
    await wrapper.trigger("mouseenter");
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onMouseenter).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("cancels an ongoing Slider drag when disabled", async () => {
    const onChange = vi.fn();
    const wrapper = mount(Slider, { props: { onChange } });
    vi.spyOn(wrapper.get(".k-slider-rail").element, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      right: 200,
      bottom: 24,
      width: 200,
      height: 24,
      x: 0,
      y: 0,
      toJSON() {},
    });
    await wrapper.get(".k-slider-thumb").trigger("mousedown");
    await wrapper.setProps({ disabled: true });
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: 150 }));
    expect(onChange).not.toHaveBeenCalled();
    expect(wrapper.find(".is-dragging").exists()).toBe(false);
    await wrapper.setProps({ disabled: false });
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: 180 }));
    expect(onChange).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("does not activate a disabled Select option on hover", async () => {
    const onChange = vi.fn();
    const wrapper = mount(Select, {
      attachTo: document.body,
      props: {
        onChange,
        options: [
          { label: "Disabled", value: "disabled", disabled: true },
          { label: "Enabled", value: "enabled" },
        ],
      },
    });
    await wrapper.get(".k-select").trigger("click");
    await nextTick();
    await wrapper.setProps({ disabled: true });
    const disabled = document.body.querySelector<HTMLElement>(".k-select-item-disabled")!;

    disabled.dispatchEvent(new MouseEvent("mouseenter"));
    document.body.querySelectorAll<HTMLElement>(".k-select-item")[1].click();
    await nextTick();

    expect(disabled.classList.contains("k-select-item-active")).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
    wrapper.unmount();
  });

  it("does not close a disabled closable tab", async () => {
    const onRemove = vi.fn();
    const wrapper = mount(Tabs, {
      props: { variant: "card", onRemove },
      slots: {
        default: () => [
          h(TabPanel, { key: "disabled", title: "Disabled", disabled: true, closable: true }),
          h(TabPanel, { key: "enabled", title: "Enabled" }),
        ],
      },
    });
    const close = wrapper.get<HTMLElement>(".k-tabs-close");

    await close.trigger("click");
    await close.trigger("keydown", { key: "Enter" });

    expect(onRemove).not.toHaveBeenCalled();
    expect(close.attributes("aria-disabled")).toBe("true");
    expect(close.attributes("tabindex")).toBe("-1");
  });

  it("disables Upload abort and retry actions", () => {
    const wrapper = mount(Upload, {
      props: {
        disabled: true,
        fileList: [
          { uid: "uploading", filename: "uploading.txt", status: "uploading" },
          { uid: "error", filename: "error.txt", status: "error" },
        ],
      },
    });
    const actions = wrapper.findAll<HTMLButtonElement>(
      'button[title="Cancel upload"], button[title="Retry upload"]',
    );

    expect(actions).toHaveLength(2);
    expect(actions.every((action) => action.element.disabled)).toBe(true);
  });

  it("does not call InputTag click handlers while disabled", async () => {
    const onClick = vi.fn();
    const wrapper = mount(InputTag, { props: { disabled: true, onClick } });

    await wrapper.trigger("click");

    expect(onClick).not.toHaveBeenCalled();
  });

  it("disables every interaction in a disabled DatePicker panel", async () => {
    const onChange = vi.fn();
    const wrapper = mount(DatePicker, {
      props: { panelOnly: true, disabled: true, onChange },
    });
    const panel = wrapper.get(".k-datepicker-overlay");
    const label = panel.get(".k-picker-header-label").text();

    await panel.get(".k-picker-header button:last-child").trigger("click");
    await panel.get(".k-picker-day:not(.k-picker-day-out)").trigger("click");

    expect(panel.classes()).toContain("k-datepicker-disabled");
    expect(panel.attributes("aria-disabled")).toBe("true");
    expect(panel.get(".k-picker-header-label").text()).toBe(label);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("disables every Tree node through the root disabled prop", async () => {
    const onSelect = vi.fn();
    const onExpand = vi.fn();
    const wrapper = mount(Tree, {
      props: {
        disabled: true,
        data: [{ key: "parent", title: "Parent", children: [{ key: "child", title: "Child" }] }],
        onSelect,
        onExpand,
      },
    });
    const row = wrapper.get("[data-tree-key='parent']");

    await row.get(".k-tree-title").trigger("click");
    await row.get(".k-tree-arrow").trigger("click");

    expect(row.classes()).toContain("k-tree-item-disabled");
    expect((row.get(".k-tree-arrow button").element as HTMLButtonElement).disabled).toBe(true);
    expect(onSelect).not.toHaveBeenCalled();
    expect(onExpand).not.toHaveBeenCalled();
  });
});
