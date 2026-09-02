import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import { TypographyParagraph } from "../components/typography";

describe("Typography", () => {
  it("uses library icons for edit and copy actions", async () => {
    const wrapper = mount(TypographyParagraph, {
      props: { modelValue: "Editable text", editable: true, copyable: true },
    });

    expect(wrapper.findAll(".k-typography-action .k-icon")).toHaveLength(2);
    expect(wrapper.text()).not.toMatch(/[✎✓⧉]/);

    await wrapper.find('[aria-label="Copy"]').trigger("click");
    await nextTick();
    expect(wrapper.find('[aria-label="Copy"] .k-icon').exists()).toBe(true);
  });

  it("supports tooltips for copy and edit actions", () => {
    const wrapper = mount(TypographyParagraph, {
      props: {
        modelValue: "Helpful text",
        copyable: { tooltip: "Copy text", copiedTooltip: "Copied" },
        editable: { tooltip: "Edit text" },
      },
    });
    const tooltips = wrapper.findAllComponents({ name: "Tooltip" });

    expect(tooltips.map((tooltip) => tooltip.props("title"))).toEqual(["Edit text", "Copy text"]);
  });

  it("expands and collapses ellipsis content", async () => {
    const wrapper = mount(TypographyParagraph, {
      props: {
        modelValue: "A long paragraph that can be expanded.",
        ellipsis: {
          rows: 2,
          expandable: true,
          expandText: "More",
          collapseText: "Less",
          tooltip: true,
        },
      },
    });

    expect(wrapper.find(".k-typography-content").classes()).toContain("is-ellipsis");
    expect(wrapper.find(".k-typography-expand").text()).toBe("More");
    expect(wrapper.findComponent({ name: "Tooltip" }).props("title")).toBe(
      "A long paragraph that can be expanded.",
    );

    await wrapper.find(".k-typography-expand").trigger("click");
    expect(wrapper.find(".k-typography-content").classes()).not.toContain("is-ellipsis");
    expect(wrapper.find(".k-typography-expand").text()).toBe("Less");

    await wrapper.find(".k-typography-expand").trigger("click");
    expect(wrapper.find(".k-typography-content").classes()).toContain("is-ellipsis");
  });

  it("extracts readable text from nested slot content", async () => {
    const wrapper = mount(TypographyParagraph, {
      props: { copyable: true },
      slots: { default: () => ["Install ", h("strong", "kui-vue")] },
    });

    await wrapper.find('[aria-label="Copy"]').trigger("click");
    expect(wrapper.emitted("copy")?.[0]).toEqual(["Install kui-vue"]);
  });
});
