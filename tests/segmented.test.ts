import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Segmented from "../components/segmented";

const options = [
  { label: "Alpha", value: "a" },
  { label: "Beta", value: "b" },
];

describe("Segmented", () => {
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
      mount(Segmented, { props: { options, direction: "vertical" } }).attributes("aria-orientation"),
    ).toBe("vertical");
  });

  it("walks bare options with the arrow keys", async () => {
    const wrapper = mount(Segmented, { props: { modelValue: "a", options: ["a", "b", "c"] } });
    await wrapper.trigger("keydown", { key: "ArrowRight" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["b"]);
  });
});