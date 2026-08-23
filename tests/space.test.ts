import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Space from "../components/space";

describe("Space compact", () => {
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
