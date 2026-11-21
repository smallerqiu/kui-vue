import { mount } from "@vue/test-utils";
import { List, LayoutGrid } from "kui-icons";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Segmented from "../components/segmented";

const options = [
  { label: "Alpha", value: "a" },
  { label: "Beta", value: "b" },
];

describe("Segmented", () => {
  it("renders icon-only options without value text and still selects by value", async () => {
    const wrapper = mount(Segmented, {
      props: {
        value: "list",
        options: [
          { value: "list", icon: List },
          { value: "grid", icon: LayoutGrid },
        ],
      },
    });
    const items = wrapper.findAll('[role="radio"]');
    expect(items.map((item) => item.text())).toEqual(["", ""]);
    expect(items.every((item) => item.find(".k-icon").exists())).toBe(true);
    expect(items.map((item) => item.attributes("aria-label"))).toEqual(["list", "grid"]);
    expect(items[0].element.children).toHaveLength(1);
    await items[1].trigger("click");
    expect(wrapper.emitted("change")?.at(-1)).toEqual(["grid"]);
    await wrapper.trigger("keydown", { key: "ArrowLeft" });
    expect(wrapper.emitted("change")?.at(-1)).toEqual(["list"]);
    wrapper.unmount();
  });
  it("preserves explicit labels, numeric zero, value fallbacks and custom labels", () => {
    const wrapper = mount(Segmented, {
      props: {
        options: [
          { value: "list", icon: List, label: "List" },
          { value: 1, icon: List, label: 0 },
          { value: "plain" },
        ],
      },
    });
    expect(wrapper.findAll('[role="radio"]').map((item) => item.text())).toEqual([
      "List",
      "0",
      "plain",
    ]);
    wrapper.unmount();
    const custom = mount(Segmented, {
      props: { options: [{ value: "list", icon: List }] },
      slots: { label: () => h("b", "Custom") },
    });
    expect(custom.get('[role="radio"] b').text()).toBe("Custom");
    custom.unmount();
  });
  it("accepts bare strings and numbers as value plus label", async () => {
    const wrapper = mount(Segmented, { props: { options: ["daily", "weekly"] } });
    const radios = wrapper.findAll('[role="radio"]');
    expect(radios.map((radio) => radio.text())).toEqual(["daily", "weekly"]);
    // No value is defined yet, so nothing may present itself as checked.
    expect(radios.map((radio) => radio.attributes("aria-checked"))).toEqual(["false", "false"]);
    expect(radios.map((radio) => radio.attributes("tabindex"))).toEqual(["0", "-1"]);
    await radios[1].trigger("click");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["weekly"]);
  });

  it("keeps the group reachable when the checked option is disabled", () => {
    const wrapper = mount(Segmented, {
      props: {
        modelValue: "b",
        options: [
          { label: "Alpha", value: "a" },
          { label: "Beta", value: "b", disabled: true },
        ],
      },
    });
    expect(wrapper.findAll('[role="radio"]').map((radio) => radio.attributes("tabindex"))).toEqual([
      "0",
      "-1",
    ]);
  });

  it("falls back to the first enabled option for the tab stop", () => {
    const wrapper = mount(Segmented, {
      props: {
        options: [
          { label: "Alpha", value: "a", disabled: true },
          { label: "Beta", value: "b" },
        ],
      },
    });
    expect(wrapper.findAll('[role="radio"]').map((radio) => radio.attributes("tabindex"))).toEqual([
      "-1",
      "0",
    ]);
  });

  it("declares the group orientation", () => {
    expect(mount(Segmented, { props: { options } }).attributes("aria-orientation")).toBe(
      "horizontal",
    );
    expect(
      mount(Segmented, { props: { options, direction: "vertical" } }).attributes(
        "aria-orientation",
      ),
    ).toBe("vertical");
  });

  it("walks bare options with the arrow keys", async () => {
    const wrapper = mount(Segmented, { props: { modelValue: "a", options: ["a", "b", "c"] } });
    await wrapper.trigger("keydown", { key: "ArrowRight" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["b"]);
  });
});
