import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Table from "../components/table";
import type { Column, TableRecord } from "../components/table";

describe("Table tree data", () => {
  it("hides columns by key", async () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: "1", name: "Alice", role: "Admin" }],
        columns: [
          { title: "Name", key: "name" },
          { title: "Role", key: "role" },
        ],
        hiddenColumnKeys: ["role"],
      },
    });

    expect(wrapper.text()).toContain("Name");
    expect(wrapper.text()).toContain("Alice");
    expect(wrapper.text()).not.toContain("Role");
    expect(wrapper.text()).not.toContain("Admin");
  });

  it("treats scroll.x as a minimum width and still fills a wider container", () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: 1, name: "Row" }],
        columns: [{ key: "name", title: "Name" }],
        scroll: { x: 1050 },
      },
    });
    const style = wrapper.get("table").attributes("style");
    expect(style).toContain("width: 100%");
    expect(style).toContain("min-width: 1050px");
  });

  it("supports controlled expansion without mutating the prop", async () => {
    const data: TableRecord[] = [
      {
        key: "parent",
        name: "Parent row",
        children: [{ key: "child", name: "Child row" }],
      },
    ];
    const columns: Column[] = [{ key: "name", title: "Name" }];
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: { data, columns, expandedKeys: [] },
    });

    expect(wrapper.text()).not.toContain("Child row");
    await wrapper.get(".k-table-tree-toggle").trigger("click");
    expect(wrapper.emitted("update:expandedKeys")?.at(-1)).toEqual([["parent"]]);
    expect(wrapper.text()).not.toContain("Child row");

    await wrapper.setProps({ expandedKeys: ["parent"] });
    expect(wrapper.text()).toContain("Child row");
    expect(wrapper.findAll("tbody tr")).toHaveLength(2);
    wrapper.unmount();
  });

  it("renders only a virtual window for large tables", async () => {
    const data = Array.from({ length: 1000 }, (_, index) => ({
      key: index,
      name: `Row ${index}`,
    }));
    const wrapper = mount(Table, {
      props: {
        data,
        columns: [{ key: "name", title: "Name", width: 160, fixed: "right" }],
        virtual: true,
        scroll: { y: 200 },
        itemHeight: 40,
        overscan: 2,
      },
    });
    const body = wrapper.get<HTMLElement>(".k-table-body");
    Object.defineProperty(body.element, "clientHeight", { value: 200 });
    await body.trigger("scroll");
    await wrapper.vm.$nextTick();

    expect(wrapper.findAll("tbody tr:not(.k-table-virtual-spacer)").length).toBeLessThan(20);
    expect(wrapper.find(".k-table-virtual-spacer-bottom").exists()).toBe(true);
    expect(wrapper.find(".k-table-row-even .k-table-cell-fix-right").exists()).toBe(true);
  });
});
