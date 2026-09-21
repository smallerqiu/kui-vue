import { mount } from "@vue/test-utils";
import { h, nextTick, type Component } from "vue";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import {
  AutoComplete,
  Cascader,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Mentions,
  Popup,
  Select,
  TreeSelect,
} from "../components";

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
});
afterEach(() => {
  vi.restoreAllMocks();
});

const cases = [
  {
    name: "ColorPicker",
    component: ColorPicker,
    root: "",
    selector: ".k-color-picker-dropdown",
    props: { opened: true },
  },
  {
    name: "Select",
    component: Select,
    root: ".k-select",
    selector: ".k-select-dropdown",
    props: { options: [{ label: "One", value: "one" }] },
  },
  {
    name: "TreeSelect",
    component: TreeSelect,
    root: ".k-tree-select",
    selector: ".k-tree-select-dropdown",
    props: { treeData: [{ key: "one", title: "One" }] },
  },
  {
    name: "Cascader",
    component: Cascader,
    root: ".k-cascader",
    selector: ".k-cascader-dropdown",
    props: { options: [{ value: "one", label: "One" }] },
  },
  {
    name: "AutoComplete",
    component: AutoComplete,
    root: "",
    selector: ".k-auto-complete-dropdown",
    props: { open: true, showOnEmpty: true, options: ["one"] },
  },
  {
    name: "DatePicker",
    component: DatePicker,
    root: "",
    selector: ".k-datepicker-overlay",
    props: { opened: true },
  },
];
const tick = async () => {
  await nextTick();
  await nextTick();
};

describe.each(cases)("$name Popup adapter", ({ component, root, selector, props }) => {
  it("preserves the overlay root and closes once on outside click", async () => {
    const container = document.createElement("section");
    document.body.append(container);
    const onOpenChange = vi.fn();
    const wrapper = mount(ConfigProvider, {
      attachTo: document.body,
      global: { stubs: { transition: false } },
      props: { getPopupContainer: () => container },
      slots: {
        default: () => h(component as Component, { ...props, onOpenChange }),
      },
    });
    try {
      if (root) await wrapper.get(root).trigger("click");
      await tick();
      const panel = container.querySelector<HTMLElement>(selector)!;
      expect(panel).not.toBeNull();
      expect(panel.parentElement).toBe(container);
      expect(panel.querySelector(".k-popup-content")).toBeNull();
      onOpenChange.mockClear();
      panel.click();
      await tick();
      expect(onOpenChange).not.toHaveBeenCalled();
      document.body.click();
      await tick();
      expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
      if (!("open" in props)) {
        document.body.click();
        await tick();
        expect(onOpenChange).toHaveBeenCalledTimes(1);
      }
    } finally {
      wrapper.unmount();
      container.remove();
    }
  });

  it("closes via shared Escape without duplicate notifications", async () => {
    const onOpenChange = vi.fn();
    const wrapper = mount(component as Component, {
      attachTo: document.body,
      props: { ...props, onOpenChange },
    });
    try {
      if (root) await wrapper.get(root).trigger("click");
      await tick();
      onOpenChange.mockClear();
      document.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true }),
      );
      await tick();
      expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
    } finally {
      wrapper.unmount();
    }
  });
});

it("keeps a parent Popup open when choosing a Select option in its portal", async () => {
  const onOpenChange = vi.fn(),
    onChange = vi.fn();
  const wrapper = mount(Popup, {
    attachTo: document.body,
    props: { defaultOpen: true, onOpenChange },
    slots: {
      default: () => h("button", "Parent"),
      overlay: () => h(Select, { options: [{ label: "One", value: "one" }], onChange }),
    },
  });
  try {
    await tick();
    (document.querySelector(".k-select") as HTMLElement).click();
    await tick();
    (document.querySelector(".k-select-item") as HTMLElement).click();
    await tick();
    expect(onChange).toHaveBeenCalledWith("one");
    expect(onOpenChange).not.toHaveBeenCalled();
  } finally {
    wrapper.unmount();
  }
});

it("retains caret-based Mentions selection in the shared popup", async () => {
  const onSelect = vi.fn();
  const wrapper = mount(Mentions, {
    attachTo: document.body,
    props: { options: ["alice"], onSelect },
  });
  try {
    const textarea = wrapper.get("textarea");
    (textarea.element as HTMLTextAreaElement).value = "@al";
    (textarea.element as HTMLTextAreaElement).selectionStart = 3;
    await textarea.trigger("input");
    await tick();
    const option = document.querySelector<HTMLElement>(".k-mentions-dropdown .k-select-item");
    expect(option?.textContent).toContain("alice");
    option!.click();
    await tick();
    expect(onSelect).toHaveBeenCalledTimes(1);
  } finally {
    wrapper.unmount();
  }
});
