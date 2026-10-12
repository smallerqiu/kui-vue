import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { describe, expect, it, vi } from "vitest";
import Tree, { type TreeNode } from "../components/tree";

const rectOf = (element: Element, height = 24) =>
  vi.spyOn(element, "getBoundingClientRect").mockReturnValue({
    x: 0,
    y: 0,
    top: 0,
    right: 100,
    bottom: height,
    left: 0,
    width: 100,
    height,
    toJSON: () => ({}),
  });

describe("Tree node identity", () => {
  it("synthesizes distinct stable keys for keyless nodes", async () => {
    const data = [
      { title: "One" },
      { title: "Two", children: [{ title: "Two-a" }, { title: "Two-b" }] },
    ] as TreeNode[];
    const wrapper = mount(Tree, { props: { data } });
    const keys = wrapper
      .findAll("[data-tree-key]")
      .map((item) => item.attributes("data-tree-key") ?? "");

    expect(new Set(keys).size).toBe(keys.length);

    // 只有一个箭头，属于 “Two”：展开它只多一个键，且这个键能查回原节点。
    await wrapper.get(".k-tree-arrow").trigger("click");
    await nextTick();
    const emitted = wrapper.emitted("update:expandedKeys")!;
    const latest = emitted[emitted.length - 1] as [string[]];
    expect(latest[0]).toHaveLength(1);
    expect(wrapper.findAll("[role='treeitem']")).toHaveLength(4);
    const expandedKey = latest[0][0]!;
    expect(expandedKey).toBe(keys[1]);
  });
});

describe("Tree keyboard model", () => {
  it("keeps the twisty button out of the tab order", () => {
    const wrapper = mount(Tree, {
      props: {
        data: [{ key: "root", title: "Root", children: [{ key: "one", title: "One" }] }],
        expandedKeys: ["root"],
        checkable: true,
      },
    });
    const twisty = wrapper.get(".k-tree-arrow button");

    // roving tabindex：整棵树只留一个可 Tab 命中的 treeitem，箭头是纯点击控件。
    expect(twisty.attributes("tabindex")).toBe("-1");
    expect(wrapper.findAll('[role="treeitem"][tabindex="0"]')).toHaveLength(1);
  });

  it("renders items directly inside the node list without an extra wrapper", () => {
    const wrapper = mount(Tree, {
      props: { data: [{ key: "root", title: "Root" }] },
      global: { stubs: { TransitionGroup: false } },
    });
    const list = wrapper.get(".k-tree-node-list");

    // react 版的节点列表就是 `div.k-tree-node-list`（TransitionGroup component={null}），
    // vue 这边 `tag="div"` 自己就是这层，不能再套一层匿名 div。
    expect(list.element.children[0]!.classList.contains("k-tree-item")).toBe(true);
    expect(list.element.querySelectorAll(":scope > div:not(.k-tree-item)")).toHaveLength(0);
  });
});

describe("Tree async loading", () => {
  it("requests children for the same node only once", async () => {
    const data: TreeNode[] = [{ key: "root", title: "Root" }];
    const loadData = vi.fn(async () => {
      (data[0]!.children as TreeNode[]) = [{ key: "child", title: "Child" }];
    });
    const wrapper = mount(Tree, { props: { data, loadData } });

    await wrapper.get(".k-tree-arrow").trigger("click");
    await vi.waitFor(() => expect(loadData).toHaveBeenCalledTimes(1));
    expect(wrapper.text()).toContain("Child");

    await wrapper.get(".k-tree-arrow").trigger("click");
    await nextTick();
    expect(wrapper.text()).not.toContain("Child");

    await wrapper.get(".k-tree-arrow").trigger("click");
    await vi.waitFor(() => expect(wrapper.text()).toContain("Child"));
    expect(loadData).toHaveBeenCalledTimes(1);
  });

  it("keeps a forced parent expandable after an empty load", async () => {
    // 与 react 版同一条契约：`isLeaf: false` 强制作为父节点，一次空结果不许把它
    // 改成叶子；重复请求靠 `loadedKeys` 拦住，不是靠抹掉箭头。
    const loadData = vi.fn(async () => undefined);
    const wrapper = mount(Tree, {
      props: { data: [{ key: "root", title: "Root", isLeaf: false }] as TreeNode[], loadData },
    });

    await wrapper.get(".k-tree-arrow").trigger("click");
    await vi.waitFor(() => expect(loadData).toHaveBeenCalledTimes(1));
    expect(wrapper.get(".k-tree-arrow").classes()).toContain("k-tree-arrow-open");

    await wrapper.get(".k-tree-arrow").trigger("click");
    await nextTick();
    expect(wrapper.get(".k-tree-arrow").classes()).not.toContain("k-tree-arrow-open");
    await wrapper.get(".k-tree-arrow").trigger("click");
    await vi.waitFor(() =>
      expect(wrapper.get(".k-tree-arrow").classes()).toContain("k-tree-arrow-open"),
    );
    expect(loadData).toHaveBeenCalledTimes(1);
  });
});

describe("Tree drop target guard", () => {
  it("does not advertise a descendant as a valid drop target", async () => {
    const source: TreeNode[] = [
      { key: "root", title: "Root", children: [{ key: "child", title: "Child" }] },
    ];
    const onDrop = vi.fn();
    const wrapper = mount(Tree, {
      props: { data: source, draggable: true, expandedKeys: ["root"], onDrop },
      // 拖动开始会把被拖节点收起（双仓一致），离开动画期间子节点仍在 DOM 里；
      // 不打断 TransitionGroup 的桩就复现不出“指示线画在后代的行上”这一步。
      global: { stubs: { TransitionGroup: false } },
    });
    const fire = (element: Element, type: string, init: Record<string, unknown> = {}) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      Object.assign(event, { dataTransfer: {} }, init);
      element.dispatchEvent(event);
      return event;
    };
    const titles = wrapper.findAll<HTMLElement>(".k-tree-title");
    rectOf(titles[1].element);

    fire(titles[0].element, "dragstart");

    // 拖动开始会把被拖节点收起，后代那一行进入离开动画、class 不再更新，所以这里
    // 看的是 `dragover` 有没有被 `preventDefault`：没有 = 浏览器判定为不可放置，
    // 指示线也不会画。少了守卫时这里会画上指示线并放行 drop，松手却静默失败。
    expect(fire(titles[1].element, "dragover", { clientY: 12 }).defaultPrevented).toBe(false);

    fire(titles[1].element, "drop", { clientY: 12 });
    await nextTick();
    expect(onDrop).not.toHaveBeenCalled();
    expect(source[0]!.children!.map((item) => item.key)).toEqual(["child"]);
  });

  it("still accepts a sibling as a drop target", async () => {
    const source: TreeNode[] = [
      { key: "drag", title: "Drag" },
      { key: "target", title: "Target" },
    ];
    const wrapper = mount(Tree, { props: { data: source, draggable: true } });
    const fire = (element: Element, type: string, init: Record<string, unknown> = {}) => {
      const event = new Event(type, { bubbles: true, cancelable: true });
      Object.assign(event, { dataTransfer: {} }, init);
      element.dispatchEvent(event);
      return event;
    };
    const titles = wrapper.findAll<HTMLElement>(".k-tree-title");
    rectOf(titles[1].element);

    fire(titles[0].element, "dragstart");
    const overSibling = fire(titles[1].element, "dragover", { clientY: 12 });
    await nextTick();

    // 正控：守卫不能顺手把合法的放置目标也拒了。
    expect(overSibling.defaultPrevented).toBe(true);
    expect(wrapper.get("[data-tree-key='target']").classes()).toContain("k-tree-item-drop-inside");
  });
});
