import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Table from "../components/table";
import type { Column, TableKey, TableRecord } from "../components/table";

// 表体容器是整张表的唯一滚动口：横向能不能滚、固定区阴影画在哪一格、行 key 是否可用，
// 都在这一层汇合。这里的用例与 kui-react `tests/table-body.test.tsx` 一一对应。
describe("Table body", () => {
  it("keeps the horizontal scroller available when there are no rows", () => {
    const wrapper = mount(Table, {
      props: {
        data: [],
        columns: [
          { key: "name", title: "Name", width: 400, fixed: "left" },
          { key: "age", title: "Age", width: 400, fixed: "right" },
        ] as Column[],
        scroll: { x: 800 },
      },
    });
    const body = wrapper.get(".k-table-body").element as HTMLElement;

    // 空表也可能被固定列和列宽下限撑得比容器宽；隐藏溢出会让右侧列永远看不到
    expect(body.style.overflowX).toBe("auto");
  });

  it("ends a fixed-left run at the merged cell's interval end", () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: 1, name: "Merged", age: 20, score: 90 }],
        columns: [
          // 合并格盖住两列固定区；区间末尾之后的 `score` 不固定，所以这一格才是固定区末格
          { key: "name", title: "Name", width: 100, fixed: "left", colSpan: 2 },
          { key: "age", title: "Age", width: 100, fixed: "left" },
          { key: "score", title: "Score", width: 100 },
        ] as Column[],
      },
    });
    const [first] = wrapper.findAll("tbody tr td");

    expect(first.attributes("colspan")).toBe("2");
    expect(first.classes()).toContain("k-table-cell-fix-left");
    expect(first.classes()).toContain("k-table-cell-fix-left-last");
  });

  it("does not end the fixed-left run at the selection cell while the first column is fixed", async () => {
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: {
        data: [
          { key: 1, name: "Alice", age: 28 },
          { key: 2, name: "Bob", age: 32 },
        ],
        columns: [
          { key: "name", title: "Name", width: 120, fixed: "left" },
          { key: "age", title: "Age", width: 120 },
        ] as Column[],
        checkable: true,
      },
    });
    const body = wrapper.get(".k-table-body").element as HTMLDivElement;
    for (const [property, value] of Object.entries({
      scrollLeft: 120,
      scrollWidth: 600,
      clientWidth: 200,
    })) {
      Object.defineProperty(body, property, { configurable: true, value });
    }
    await wrapper.get(".k-table-body").trigger("scroll");
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await wrapper.vm.$nextTick();

    expect(wrapper.classes()).toContain("k-table-ping-left");
    const selection = (selector: string) => wrapper.get(selector);
    // 勾选列右边还有固定列，冻结区中间不能多画一道阴影
    expect(selection("thead th").classes()).toContain("k-table-cell-fix-left");
    expect(selection("thead th").classes()).not.toContain("k-table-cell-fix-left-last");
    expect(selection("tbody td").classes()).not.toContain("k-table-cell-fix-left-last");
    // 真正的固定区末格是紧挨着的第一个数据列
    expect(selection("tbody td:nth-child(2)").classes()).toContain("k-table-cell-fix-left-last");
    wrapper.unmount();
  });

  it("falls back to distinct keys when a rowKey function returns nothing usable", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const data: TableRecord[] = [{ name: "Alice" }, { name: "Bob" }];
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: {
        data,
        columns: [{ key: "name", title: "Name" }],
        checkable: true,
        // 运行时由 JS 调用方传入的取值函数不保证返回值符合类型
        rowKey: (() => undefined) as unknown as (record: TableRecord) => TableKey,
      },
    });
    const boxes = () => wrapper.findAll("tbody input").map((box) => box.element as HTMLInputElement);
    await wrapper.findAll("tbody input")[0].trigger("click");

    // 取值函数路径也要走兜底：否则两行共用一个 `undefined`，勾一行等于勾全部
    expect(boxes().map((box) => box.checked)).toEqual([true, false]);
    const keys = wrapper.emitted("update:selectedKeys")?.at(-1)?.[0] as TableKey[];
    expect(keys).toHaveLength(1);
    expect(keys.every((key) => /^kui-row-/.test(String(key)))).toBe(true);
    wrapper.unmount();
    warn.mockRestore();
  });

  it("renders raw object, Date and array values as text instead of dropping the cell", () => {
    const when = new Date(2020, 0, 2, 3, 4, 5);
    const wrapper = mount(Table, {
      props: {
        data: [{ key: 1, meta: { id: 7 }, when, list: [1, 2] }],
        columns: [
          { key: "meta", title: "Meta" },
          { key: "when", title: "When" },
          { key: "list", title: "List" },
        ] as Column[],
      },
    });

    // 与 react 的渲染兜底同口径：普通对象和 Date 调 `String()`，数组逐项展开后拼起来
    expect(wrapper.findAll("tbody td").map((cell) => cell.text())).toEqual([
      "[object Object]",
      String(when),
      "12",
    ]);
  });
});