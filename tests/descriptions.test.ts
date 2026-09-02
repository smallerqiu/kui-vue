import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import { Descriptions, DescriptionsItem } from "../components/descriptions";

describe("Descriptions", () => {
  it("wraps oversized rows without producing invalid column spans", () => {
    const wrapper = mount(Descriptions, {
      props: { bordered: true, column: 3 },
      slots: {
        default: () => [
          h(DescriptionsItem, { label: "A", span: 2 }, () => "A"),
          h(DescriptionsItem, { label: "B", span: 2 }, () => "B"),
          h(DescriptionsItem, { label: "C" }, () => "C"),
        ],
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(wrapper.text()).not.toContain("[object Object]");
    expect(wrapper.text()).toContain("AABBCC");
    expect(rows).toHaveLength(2);
    rows.forEach((row) => {
      const total = row.findAll("th,td").reduce((sum, cell) => sum + cell.element.colSpan, 0);
      expect(total).toBe(6);
    });
  });

  it("does not render an empty header", () => {
    const wrapper = mount(Descriptions, {
      slots: { default: () => h(DescriptionsItem, { label: "A" }, () => "A") },
    });
    expect(wrapper.find(".k-descriptions-header").exists()).toBe(false);
  });
});
