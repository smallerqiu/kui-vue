import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Page from "../components/page";

describe("Page", () => {
  it("renders compact controls in simple mode", () => {
    const wrapper = mount(Page, {
      props: { simple: true, page: 2, total: 50, pageSize: 10 },
    });

    expect(wrapper.classes()).toContain("k-page-simple");
    expect(wrapper.find(".k-page-simple-number").text()).toBe("2/5");
    expect(wrapper.findAll(".k-pager-item")).toHaveLength(2);
    expect(wrapper.find(".k-page-number").exists()).toBe(false);
    expect(wrapper.find(".k-page-sizer").exists()).toBe(false);
  });

  it("changes pages from simple controls", async () => {
    const wrapper = mount(Page, {
      props: { simple: true, page: 2, total: 50, pageSize: 10 },
    });

    await wrapper.find(".k-pager-next").trigger("click");
    expect(wrapper.emitted("update:page")?.at(-1)).toEqual([3]);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([3, 10]);
  });

  it("supports an elevator in simple mode", async () => {
    const wrapper = mount(Page, {
      props: { simple: true, showElevator: true, page: 1, total: 1000, pageSize: 10 },
    });
    const elevator = wrapper.find(".k-page-simple-input input");

    expect(elevator.exists()).toBe(true);
    expect(wrapper.find(".k-page-options").exists()).toBe(false);
    await elevator.setValue("100");
    await elevator.trigger("change");
    expect(wrapper.emitted("update:page")?.at(-1)).toEqual([100]);
  });
});
