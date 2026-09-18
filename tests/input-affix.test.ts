import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Input from "../components/input";

const affix = (name: string) => h("span", { class: name }, name);

describe("Input affixes", () => {
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
