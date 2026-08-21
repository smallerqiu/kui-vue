import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import VirtualList, { getVirtualRange } from "../components/virtual-list";

describe("VirtualList", () => {
  it("calculates a bounded virtual range", () => {
    expect(
      getVirtualRange({
        count: 1000,
        scrollTop: 500,
        viewportHeight: 200,
        itemHeight: 20,
        overscan: 2,
      })
    ).toEqual({ start: 23, end: 37, offset: 460, total: 20000 });
  });

  it("renders only the visible range and scrolls to an index", async () => {
    const data = Array.from({ length: 1000 }, (_, index) => ({
      id: index,
      label: `Item ${index}`,
    }));
    const wrapper = mount(VirtualList, {
      props: { data, height: 100, itemHeight: 20, overscan: 1, itemKey: "id" },
      slots: { default: ({ item }: { item: { label: string } }) => item.label },
    });
    Object.defineProperty(wrapper.element, "clientHeight", { value: 100 });
    window.dispatchEvent(new Event("resize"));
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".k-virtual-list-item").length).toBeLessThan(20);
    (wrapper.vm as unknown as { scrollToIndex: (index: number) => void }).scrollToIndex(100);
    expect((wrapper.element as HTMLElement).scrollTop).toBeGreaterThan(0);
  });
});
