import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import { Col, Row } from "../components/row-col";

describe("Row / Col", () => {
  it("uses native gap without adding gutter padding to columns", async () => {
    const wrapper = mount(Row, {
      props: { gutter: [16, 8] },
      slots: { default: () => h(Col, { span: 12 }, () => "column") },
    });

    expect(wrapper.attributes("style")).toContain("column-gap: 16px");
    expect(wrapper.attributes("style")).toContain("row-gap: 8px");
    expect(wrapper.get(".k-col").attributes("style")).toBeUndefined();

    await wrapper.setProps({ gutter: [24, 12] });
    expect(wrapper.attributes("style")).toContain("column-gap: 24px");
    expect(wrapper.attributes("style")).toContain("row-gap: 12px");
  });

  it("uses flex layout and alignment classes without a type prop", () => {
    const wrapper = mount(Row, { props: { justify: "center", align: "middle" } });

    expect(wrapper.classes()).toEqual(
      expect.arrayContaining(["k-row", "k-row-center", "k-row-middle"]),
    );
  });
});
