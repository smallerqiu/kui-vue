import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InputNumber from "../components/input-number/index";

describe("InputNumber keyboard", () => {
  it("steps the value with arrow keys by default", async () => {
    const wrapper = mount(InputNumber, { props: { modelValue: 1 } });
    await wrapper.find("input").trigger("keydown", { key: "ArrowUp" });
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([2]);
  });

  it("ignores arrow keys when keyboard is false", async () => {
    const wrapper = mount(InputNumber, { props: { modelValue: 1, keyboard: false } });
    await wrapper.find("input").trigger("keydown", { key: "ArrowUp" });
    await wrapper.find("input").trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  });
});
