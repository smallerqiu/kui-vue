import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { h } from "vue";
import ListPanel from "../components/list-panel";

describe("ListPanel", () => {
  it("renders filters, summary, actions, content and footer", () => {
    const wrapper = mount(ListPanel, {
      props: { summary: "12 records" },
      slots: {
        filters: "Filters",
        actions: "Actions",
        default: "Results",
        footer: "Pagination",
      },
    });
    expect(wrapper.find(".k-list-panel-filters").text()).toBe("Filters");
    expect(wrapper.find(".k-list-panel-summary").text()).toBe("12 records");
    expect(wrapper.find(".k-list-panel-toolbar-extra").text()).toContain("Actions");
    expect(wrapper.find(".k-list-panel-content").text()).toBe("Results");
    expect(wrapper.find(".k-list-panel-footer").text()).toBe("Pagination");
    expect(wrapper.find(".k-card-outline").exists()).toBe(true);
  });

  it("does not render an empty toolbar", () => {
    const wrapper = mount(ListPanel, { slots: { default: "Results" } });
    expect(wrapper.find(".k-list-panel-toolbar").exists()).toBe(false);
  });

  it("supports VNode summaries and an explicit borderless panel", () => {
    const wrapper = mount(ListPanel, {
      props: { summary: h("strong", "12 records"), bordered: false },
    });
    expect(wrapper.find(".k-list-panel-summary strong").text()).toBe("12 records");
    expect(wrapper.classes()).toContain("k-list-panel-borderless");
    expect(wrapper.find('[role="toolbar"]').exists()).toBe(true);
  });

  it("does not treat a null summary as toolbar content", () => {
    const wrapper = mount(ListPanel, { props: { summary: null as never } });
    expect(wrapper.find(".k-list-panel-toolbar").exists()).toBe(false);
  });

  it("replaces the regular toolbar with bulk actions when rows are selected", () => {
    const wrapper = mount(ListPanel, {
      props: { summary: "12 records", selectedCount: 2 },
      slots: {
        filters: "Filters",
        actions: "Actions",
        selection: ({ count }: { count: number }) => `${count} selected`,
      },
    });

    expect(wrapper.find(".k-list-panel-selection").text()).toBe("2 selected");
    expect(wrapper.find(".k-list-panel-filters").exists()).toBe(false);
    expect(wrapper.find(".k-list-panel-toolbar-extra").exists()).toBe(false);
  });
});
