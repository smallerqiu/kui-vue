import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import StatCard from "../components/stat-card/stat-card";
import StatNumber from "../components/stat-card/stat-number";

describe("StatCard", () => {
  it("updates a number without recreating its element", async () => {
    const wrapper = mount(StatNumber, {
      props: { modelValue: 1234, duration: 0, autoAnimate: false },
    });
    await nextTick();
    const number = wrapper.find(".k-stat-countup-number").element;
    expect(number.textContent).toBe("1,234");

    await wrapper.setProps({ modelValue: 5678 });
    expect(wrapper.find(".k-stat-countup-number").element).toBe(number);
    expect(number.textContent).toBe("5,678");
  });

  it("falls back to immediate animation when IntersectionObserver is unavailable", async () => {
    const wrapper = mount(StatNumber, { props: { modelValue: 42, duration: 0 } });
    await nextTick();
    expect(wrapper.text()).toBe("42");
  });

  it("uses scoped default affixes and omits empty descriptions", async () => {
    const wrapper = mount(StatCard, {
      props: {
        size: "small",
        items: [{ key: "revenue", value: 12, duration: 0, autoAnimate: false }],
      },
      slots: { prefix: ({ item }) => `$${item.key}` },
    });
    await nextTick();
    expect(wrapper.text()).toContain("$revenue12");
    expect(wrapper.find(".k-stat-card-item-desc").exists()).toBe(false);
    expect(wrapper.classes()).toContain("k-stat-card-small");
  });
});
