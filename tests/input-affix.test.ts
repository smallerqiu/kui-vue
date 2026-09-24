import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Input from "../components/input";
import InputNumber from "../components/input-number";

const affix = (name: string) => h("span", { class: name }, name);

describe("Input affixes", () => {
  it("keeps internal controls private and forwards public events and methods", async () => {
    const wrapper = mount(Input, {
      attachTo: document.body,
      slots: { controls: () => h("span", { class: "private-controls" }, "hidden") },
    });
    expect(wrapper.find(".private-controls").exists()).toBe(false);
    expect(wrapper.find(".k-input-search-icon").exists()).toBe(false);
    wrapper.vm.focus();
    expect(document.activeElement).toBe(wrapper.find("input").element);
    await wrapper.find("input").setValue("hello");
    expect(wrapper.emitted("change")).toEqual([["hello"]]);
    expect(wrapper.emitted("update:modelValue")).toEqual([["hello"]]);
    wrapper.vm.blur();
    expect(document.activeElement).not.toBe(wrapper.find("input").element);
    wrapper.unmount();
  });
  it("keeps native type separate from the internal InputNumber style prefix", () => {
    const input = mount(Input, { props: { type: "password" } });
    const number = mount(InputNumber, { props: { modelValue: 2 } });
    expect(input.find("input").attributes("type")).toBe("password");
    expect(input.find(".k-input-text").exists()).toBe(true);
    expect(number.find(".k-input-number-text").exists()).toBe(true);
    expect(number.find("input").attributes("inputType")).toBeUndefined();
    expect(Input.props).not.toHaveProperty("inputType");
  });
  it("renders VNode props with the same inline layout as named slots", () => {
    const propsWrapper = mount(Input, {
      props: { prefix: affix("prefix-node"), suffix: affix("suffix-node") },
    });
    const slotsWrapper = mount(Input, {
      slots: {
        prefix: () => affix("prefix-node"),
        suffix: () => affix("suffix-node"),
      },
    });

    for (const wrapper of [propsWrapper, slotsWrapper]) {
      expect(wrapper.find(".k-input-group").exists()).toBe(false);
      expect(wrapper.find(".k-input-prefix .prefix-node").exists()).toBe(true);
      expect(wrapper.find(".k-input-suffix .suffix-node").exists()).toBe(true);
    }
  });

  it("keeps string props inline", () => {
    const wrapper = mount(Input, { props: { prefix: "https://", suffix: ".com" } });

    expect(wrapper.find(".k-input-group").exists()).toBe(false);
    expect(wrapper.find(".k-input-prefix").text()).toBe("https://");
    expect(wrapper.find(".k-input-suffix").text()).toBe(".com");
  });

  it("keeps affix slots inside when addons create an InputGroup", () => {
    const wrapper = mount(Input, {
      slots: {
        prefix: () => affix("prefix-node"),
        suffix: () => affix("suffix-node"),
        addonAfter: () => affix("addon-node"),
      },
    });

    expect(wrapper.find(".k-input-prefix .prefix-node").exists()).toBe(true);
    expect(wrapper.find(".k-input-suffix .suffix-node").exists()).toBe(true);
    expect(wrapper.find(".k-input-group-suffix .addon-node").exists()).toBe(true);
  });
});
