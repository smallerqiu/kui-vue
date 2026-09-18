import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { describe, expect, it, vi } from "vitest";
import Tree, { type TreeExpose, type TreeNode } from "../components/tree";

const data: TreeNode[] = [
  {
    key: "root",
    title: "Root",
    children: [
      { key: "one", title: "One" },
      { key: "two", title: "Two" },
    ],
  },
];

describe("Tree", () => {
  it("keeps child nodes mounted with leave transition classes while collapsing", async () => {
    const wrapper = mount(Tree, {
      props: { data, expandedKeys: ["root"] },
      global: { stubs: { TransitionGroup: false } },
    });

    await wrapper.get(".k-tree-arrow").trigger("click");
    await nextTick();

    expect(wrapper.find(".k-tree-slide-leave-active").exists()).toBe(true);
  });

  it("exposes tree semantics and supports keyboard navigation and selection", async () => {
    const onSelect = vi.fn();
    const wrapper = mount(Tree, {
      attachTo: document.body,
      props: { data, expandedKeys: ["root"], onSelect },
    });
    const items = wrapper.findAll<HTMLElement>("[role='treeitem']");

    expect(wrapper.get("[role='tree']").attributes("aria-multiselectable")).toBeUndefined();
    expect(items[0].attributes("aria-expanded")).toBe("true");
    await items[0].trigger("focus");
    await wrapper.get("[role='tree']").trigger("keydown", { key: "ArrowDown" });
    expect(document.activeElement?.getAttribute("data-tree-key")).toBe("one");
    await wrapper.get("[role='tree']").trigger("keydown", { key: "Enter" });
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ key: "one" }));
    wrapper.unmount();
  });

  it("loads a node once and reports load failures", async () => {
    const source = [{ key: "async", title: "Async" }];
    const loadData = vi.fn(async () => {
      source[0] = {
        ...source[0],
        children: [{ key: "child", title: "Child", isLeaf: true }],
      } as (typeof source)[number];
    });
    const wrapper = mount(Tree, { props: { data: source, loadData } });

    await wrapper.get(".k-tree-arrow").trigger("click");
    await Promise.resolve();
    await nextTick();
    await wrapper.get(".k-tree-arrow").trigger("click");
    await wrapper.get(".k-tree-arrow").trigger("click");
    expect(loadData).toHaveBeenCalledTimes(1);

    const error = new Error("failed");
    const onLoadError = vi.fn();
    const failed = mount(Tree, {
      props: {
        data: [{ key: "failed", title: "Failed" }],
        loadData: () => Promise.reject(error),
        onLoadError,
      },
    });
    await failed.get(".k-tree-arrow").trigger("click");
    await Promise.resolve();
    await nextTick();
    expect(onLoadError).toHaveBeenCalledWith(error, expect.objectContaining({ key: "failed" }));
  });

  it("supports field mapping, title slots, and instance methods", async () => {
    const wrapper = mount(Tree, {
      props: {
        data: [{ id: "group", name: "Group", items: [{ id: "leaf", name: "Leaf" }] }],
        fieldNames: { key: "id", title: "name", children: "items" },
      },
      slots: { title: (node: TreeNode & { name?: string }) => `Custom ${node.name}` },
    });
    const tree = wrapper.vm as unknown as TreeExpose;

    expect(wrapper.text()).toContain("Custom Group");
    expect(tree.getNode("leaf")?.title).toBe("Leaf");
    tree.expandAll();
    await nextTick();
    expect(wrapper.find("[data-tree-key='leaf']").exists()).toBe(true);
    tree.collapseAll();
    await nextTick();
    expect(wrapper.find("[data-tree-key='leaf']").exists()).toBe(false);
  });

  it("updates the drop zone while dragging and can drop inside a node", async () => {
    const source: TreeNode[] = [
      { key: "drag", title: "Drag" },
      { key: "target", title: "Target" },
    ];
    const onDrop = vi.fn();
    const wrapper = mount(Tree, { props: { data: source, draggable: true, onDrop } });
    const titles = wrapper.findAll<HTMLElement>(".k-tree-title");
    vi.spyOn(titles[1].element, "getBoundingClientRect").mockReturnValue({
      x: 0,
      y: 0,
      top: 0,
      right: 100,
      bottom: 24,
      left: 0,
      width: 100,
      height: 24,
      toJSON: () => ({}),
    });

    await titles[0].trigger("dragstart");
    await titles[1].trigger("dragenter", { clientY: 1 });
    expect(wrapper.get("[data-tree-key='target']").classes()).toContain("k-tree-item-drop-before");
    await titles[1].trigger("dragover", { clientY: 12 });
    expect(wrapper.get("[data-tree-key='target']").classes()).toContain("k-tree-item-drop-inside");
    await titles[1].trigger("drop", { clientY: 12 });

    expect(onDrop).toHaveBeenCalledWith(
      expect.objectContaining({ dropPosition: "inside" }),
      expect.any(Event),
    );
    expect(source[0].key).toBe("target");
    expect(source[0].children?.[0].key).toBe("drag");
  });

  it("does not expand or collapse a directory node when checking it", async () => {
    const wrapper = mount(Tree, {
      props: {
        data,
        directory: true,
        checkable: true,
        expandedKeys: ["root"],
      },
    });
    const checkbox = wrapper.get<HTMLInputElement>("[data-tree-key='root'] .k-checkbox-input");

    await checkbox.trigger("click");
    await checkbox.trigger("keydown", { key: " " });

    expect(wrapper.emitted("update:expandedKeys")).toBeUndefined();
    expect(wrapper.find("[data-tree-key='one']").exists()).toBe(true);
  });
});
