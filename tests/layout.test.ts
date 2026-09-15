import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Sider } from "../components/layout";

describe("Layout Sider", () => {
  it("treats numeric strings as pixel widths", () => {
    const wrapper = mount(Sider, { props: { width: "140" } });

    expect(wrapper.attributes("style")).toContain("width: 140px");
    expect(wrapper.attributes("style")).toContain("flex: 0 0 140px");
  });

  it("preserves CSS width units", () => {
    const wrapper = mount(Sider, { props: { width: "25%" } });

    expect(wrapper.attributes("style")).toContain("width: 25%");
  });

  it("normalizes collapsedWidth in the same way", async () => {
    const wrapper = mount(Sider, {
      props: { collapsible: true, collapsed: false, width: "200", collapsedWidth: "64" },
    });

    await wrapper.setProps({ collapsed: true });
    expect(wrapper.attributes("style")).toContain("width: 64px");
    expect(wrapper.classes()).toContain("k-layout-sider-collapsible");
    expect(wrapper.classes()).toContain("k-layout-sider-collapsed");
  });
});
