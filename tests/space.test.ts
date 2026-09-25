import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Space from "../components/space";

describe("Space compact", () => {
  it("wraps only when explicitly enabled", async () => {
    const wrapper = mount(Space, {
      slots: { default: () => [h("button", "A"), h("button", "B")] },
    });
    expect(wrapper.classes()).not.toContain("k-space-wrap");
    await wrapper.setProps({ compact: true });
    expect(wrapper.classes()).not.toContain("k-space-wrap");
    await wrapper.setProps({ wrap: true });
    expect(wrapper.classes()).toContain("k-space-wrap");
    await wrapper.setProps({ compact: false, wrap: false });
    expect(wrapper.classes()).not.toContain("k-space-wrap");
    await wrapper.setProps({ wrap: undefined });
    expect(wrapper.classes()).not.toContain("k-space-wrap");
    wrapper.unmount();
  });

  it("keeps a single child independent instead of removing its end radius", () => {
    const wrapper = mount(Space, {
      props: { compact: true },
      slots: { default: () => h("button", "Details") },
    });
    const button = wrapper.get("button");
    expect(button.classes()).not.toContain("k-space-first-item");
    expect(button.classes()).not.toContain("k-space-last-item");
  });

  it("marks both ends when multiple children form a compact group", () => {
    const wrapper = mount(Space, {
      props: { compact: true },
      slots: { default: () => [h("button", "Details"), h("button", "Close")] },
    });
    const buttons = wrapper.findAll("button");
    expect(buttons[0].classes()).toContain("k-space-first-item");
    expect(buttons[1].classes()).toContain("k-space-last-item");
  });
});
