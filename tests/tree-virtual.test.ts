import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import Tree from "../components/tree";
import TreeSelect from "../components/tree-select";

const data = Array.from({ length: 1000 }, (_, index) => ({
  key: `node-${index}`,
  title: `Node ${index + 1}`,
}));

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Tree virtual scrolling", () => {
  it("renders only a virtual window for a large tree", async () => {
    const wrapper = mount(Tree, {
      props: { data, virtual: true, height: 168, itemHeight: 28, overscan: 2 },
    });
    const virtualList = wrapper.get<HTMLElement>(".k-tree-virtual-list");
    Object.defineProperty(virtualList.element, "clientHeight", { value: 168 });
    await virtualList.trigger("scroll");
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll(".k-tree-item").length).toBeLessThan(20);
    expect(wrapper.get<HTMLElement>(".k-virtual-list-spacer").element.style.height).toBe("28000px");
  });

  it("uses the same virtual tree inside TreeSelect", async () => {
    const wrapper = mount(TreeSelect, {
      attachTo: document.body,
      props: { treeData: data, virtual: true, virtualHeight: 168, itemHeight: 28 },
    });
    await wrapper.get(".k-tree-select").trigger("click");
    await wrapper.vm.$nextTick();

    const dropdown = document.body.querySelector(".k-tree-select-dropdown");
    expect(dropdown?.classList.contains("k-tree-select-dropdown-virtual")).toBe(true);
    expect(dropdown?.querySelectorAll(".k-tree-item").length).toBeLessThan(20);
    wrapper.unmount();
  });
});
