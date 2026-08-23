import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FeatureCard from "../components/feature-card";

describe("FeatureCard", () => {
  it("supports size, direction, slots and keyboard interaction", async () => {
    const wrapper = mount(FeatureCard, {
      props: {
        title: "Projects",
        size: "small",
        direction: "vertical",
        clickable: true,
        color: "#f59e0b",
        iconBackground: "#fff4d6",
      },
      slots: { extra: "More" },
    });
    expect(wrapper.classes()).toEqual(
      expect.arrayContaining([
        "k-feature-card-small",
        "k-feature-card-vertical",
        "k-feature-card-clickable",
      ])
    );
    expect(wrapper.attributes("role")).toBe("button");
    expect(wrapper.attributes("style")).toContain("--k-feature-card-color: #f59e0b");
    expect(wrapper.attributes("style")).toContain("--k-feature-card-icon-bg: #fff4d6");
    expect(wrapper.find(".k-feature-card-extra").text()).toBe("More");
    await wrapper.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not emit clicks when disabled", async () => {
    const wrapper = mount(FeatureCard, {
      props: { title: "Disabled", clickable: true, disabled: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
    expect(wrapper.attributes("aria-disabled")).toBe("true");
  });
});
