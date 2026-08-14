import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Table from "../components/table";
import type { Column, TableRecord } from "../components/table";

describe("Table tree data", () => {
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
});
