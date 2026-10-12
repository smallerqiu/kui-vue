import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import Table from "../components/table";
import type { Column, TableKey, TableRecord } from "../components/table";

describe("Table tree data", () => {
  it("supports keyboard sorting and exposes the current sort direction", async () => {
    const wrapper = mount(Table, {
      props: {
        data: [
          { key: 1, name: "Beta", age: 30 },
          { key: 2, name: "Alpha", age: 25 },
        ],
        columns: [
          { key: "name", title: "Name", sorter: true },
          { key: "age", title: "Age" },
        ],
      },
    });
    const [sortable, plain] = wrapper.findAll("thead th");
    const names = () => wrapper.findAll("tbody tr").map((tr) => tr.find("td")?.text());

    expect(sortable.attributes("tabindex")).toBe("0");
    expect(sortable.attributes("aria-sort")).toBe("none");
    // 不可排序的表头既不能聚焦也不该声明 aria-sort
    expect(plain.attributes("tabindex")).toBeUndefined();
    expect(plain.attributes("aria-sort")).toBeUndefined();

    await sortable.trigger("keydown", { key: "Enter" });
    expect(sortable.attributes("aria-sort")).toBe("ascending");
    expect(names()).toEqual(["Alpha", "Beta"]);

    await sortable.trigger("keydown", { key: " " });
    expect(sortable.attributes("aria-sort")).toBe("descending");
    expect(names()).toEqual(["Beta", "Alpha"]);

    // 三态循环：descending 之后再排一次回到 none
    await sortable.trigger("keydown", { key: "Enter" });
    expect(sortable.attributes("aria-sort")).toBe("none");

    // 不可排序的表头上按键盘、点击都不会改动排序
    await plain.trigger("click");
    await plain.trigger("keydown", { key: "Enter" });
    expect(sortable.attributes("aria-sort")).toBe("none");
  });

  it("sorts with the shared comparator so both frameworks agree", async () => {
    const wrapper = mount(Table, {
      props: {
        data: [
          { key: 1, n: "10" },
          { key: 2, n: "9" },
          { key: 3, n: 1 },
          { key: 4, n: null },
        ],
        columns: [{ key: "n", title: "N", sorter: true }],
      },
    });
    const order = () => wrapper.findAll("tbody td").map((td) => td.text());

    await wrapper.get("thead th").trigger("click");
    expect(order()).toEqual(["", "1", "9", "10"]);

    await wrapper.get("thead th").trigger("click");
    expect(order()).toEqual(["10", "9", "1", ""]);
  });

  it("reads cell values and sort values through dotted column keys", async () => {
    // 与 kui-react `tests/table.test.tsx` 的同名用例共用一份期望：整名优先，其次按 `.` 下钻，中途遇到 null 不抛错。
    const data: TableRecord[] = [
      { key: "r1", user: { name: "Carol" }, tags: ["t1", "z"] },
      { key: "r2", user: { name: "Ann" }, tags: ["t1"] },
      { key: "r3", user: null },
    ];
    const columns: Column[] = [
      { key: "user.name", title: "Name", sorter: true },
      { key: "tags.1", title: "Tag" },
      { key: "constructor.name", title: "Proto" },
    ];
    const wrapper = mount(Table, { props: { data, columns, rowKey: "key" } });
    const cells = () =>
      wrapper.findAll("tbody tr").map((row) => row.findAll("td").map((td) => td.text()));

    expect(cells()).toEqual([
      ["Carol", "z", ""],
      ["Ann", "", ""],
      ["", "", ""],
    ]);

    // 排序同样按路径取值：r3 的 user 是 null，取到空串排在最前
    await wrapper.get("thead th").trigger("click");
    expect(cells()).toEqual([
      ["", "", ""],
      ["Ann", "", ""],
      ["Carol", "z", ""],
    ]);

    wrapper.unmount();
  });

  it("uses the same dotted reader for rowKey and childrenColumnName", async () => {
    const parent: TableRecord = {
      meta: { uid: "p1" },
      name: "Parent 1",
      rows: { items: [{ meta: { uid: "p1c" }, name: "Child 1" }] },
    };
    const wrapper = mount(Table, {
      props: {
        data: [parent],
        columns: [{ key: "name", title: "Name" }],
        rowKey: "meta.uid",
        childrenColumnName: "rows.items",
        expandAllRows: true,
      },
    });
    const rows = () => wrapper.findAll("tbody tr").map((row) => row.text());

    expect(rows()).toEqual(["Parent 1", "Child 1"]);

    await wrapper.get(".k-table-tree-toggle").trigger("click");
    expect(rows()).toEqual(["Parent 1"]);

    // 换一份"路径相同、取值相同"的新记录重新渲染：rowKey 按路径解析出的 key 仍然稳定，
    // 折叠过的父行不会被当成新增父行重新展开（路径走不通会退回 WeakMap 合成 key，这里就会失败）。
    await wrapper.setProps({ data: [{ ...parent }] });
    expect(rows()).toEqual(["Parent 1"]);

    wrapper.unmount();
  });

  it("does not show the empty state while loading", async () => {
    const wrapper = mount(Table, {
      props: {
        data: [],
        columns: [{ key: "name", title: "Name" }],
        loading: true,
        emptyText: "No records",
      },
    });

    expect(wrapper.find(".k-spin").exists()).toBe(true);
    expect(wrapper.find(".k-empty").exists()).toBe(false);
    expect(wrapper.find(".k-table-loading-placeholder").exists()).toBe(true);

    await wrapper.setProps({ loading: false });
    expect(wrapper.find(".k-spin").exists()).toBe(false);
    expect(wrapper.find(".k-empty").exists()).toBe(true);
    expect(wrapper.find(".k-table-loading-placeholder").exists()).toBe(false);
    expect(wrapper.text()).toContain("No records");
  });

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

  it("keeps the header in its own table while the body scrolls", async () => {
    const columns: Column[] = [
      { key: "name", title: "Name" },
      { key: "age", title: "Age" },
    ];
    const wrapper = mount(Table, {
      props: { data: [{ key: 1, name: "Alice", age: 28 }], columns },
    });

    // 与 kui-react 同名用例等价：没有 scroll.y 时整张表还是一个 table，表头就在滚动容器里，
    // 不该多出容器、id 或滚动条宽度变量。
    expect(wrapper.findAll("table")).toHaveLength(1);
    expect(wrapper.find(".k-table-body thead").exists()).toBe(true);
    expect(wrapper.find(".k-table-thead").exists()).toBe(false);
    expect(wrapper.find(".k-table-thead-inner").exists()).toBe(false);
    expect(wrapper.classes()).not.toContain("k-table-split-header");
    expect(wrapper.findAll("thead th").every((th) => !th.attributes("id"))).toBe(true);
    expect(wrapper.findAll("tbody td").every((td) => !td.attributes("aria-labelledby"))).toBe(true);
    expect(
      wrapper.find(".k-table").element.style.getPropertyValue("--k-table-scrollbar-width"),
    ).toBe("");

    await wrapper.setProps({ scroll: { y: 200 } });
    expect(wrapper.findAll("table")).toHaveLength(2);
    expect(wrapper.find(".k-table-thead thead").exists()).toBe(true);
    expect(wrapper.find(".k-table-thead tbody").exists()).toBe(false);
    // 与 kui-react 同名用例等价：分栏表头分内外两层，外层用 `padding-inline-end` 让出表体滚动条的
    // 槽位，裁剪只能放在内层（`overflow: hidden` 只裁到 padding box，裁在外层会连槽位一起被表头内容画穿）。
    // 这一层结构变了，`styles/index.less` 里 `> .k-table-thead-inner` 和同步 `scrollLeft` 的目标就同时失效。
    expect(wrapper.find(".k-table-thead > .k-table-thead-inner > table").exists()).toBe(true);
    expect(wrapper.find(".k-table-body thead").exists()).toBe(false);
    expect(wrapper.classes()).toContain("k-table-split-header");
    expect(wrapper.findAll(".k-table-body tbody tr")).toHaveLength(1);

    // 两张 table 共用同一份 colgroup，列宽与固定列偏移才可能逐像素对齐
    expect(
      wrapper
        .findAll("colgroup col")
        .map((col) => (col.element as HTMLTableColElement).style.width),
    ).toEqual(["auto", "auto", "auto", "auto"]);

    // 表体格和表头格之间不再有结构关系，列名靠 id 关联回去。
    // 断言只认"这一格指过去的那一格确实存在、而且标题就是这个列"，不锁具体 id 字符串。
    const cells = wrapper.findAll(".k-table-body tbody tr:first-child td");
    expect(cells).toHaveLength(columns.length);
    cells.forEach((cell, index) => {
      const labelledBy = cell.attributes("aria-labelledby");
      expect(labelledBy).toBeTruthy();
      // id 只含 [a-zA-Z0-9_-]（组件里洗过），属性选择器可以直接用
      const headerCell = wrapper.find(`[id="${labelledBy}"]`);
      expect(headerCell.element.tagName).toBe("TH");
      expect(headerCell.text()).toBe(columns[index].title);
    });

    // 多个 table 时 id 必须还在整个文档里唯一，否则 aria-labelledby 会指到别的表上
    const ids = wrapper.findAll("[id]").map((node) => node.attributes("id") as string);
    expect(new Set(ids).size).toBe(ids.length);

    // 槽位宽度是实测出来的：jsdom 里没有真实滚动条，只要求"写成 px 且非空"，
    // 真机上这条决定表头容器和表体内容盒等宽。
    expect(
      wrapper.find(".k-table").element.style.getPropertyValue("--k-table-scrollbar-width"),
    ).toMatch(/^[\d.]+px$/);
    wrapper.unmount();
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

  it("uses one width basis for colgroup and sticky offsets", () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: 1, name: "Alice", age: 28 }],
        columns: [
          { key: "name", title: "Name", fixed: "left" },
          { key: "age", title: "Age", fixed: "left", width: 220 },
          { key: "key", title: "Id" },
        ] as Column[],
        checkable: true,
        scroll: { x: 1_200, y: 200 },
      },
    });
    const widths = wrapper
      .findAll(".k-table-body col")
      .map((col) => (col.element as HTMLTableColElement).style.width);
    const headers = wrapper.findAll(".k-table-thead th");

    // 勾选列、固定列的确切宽度、非固定列交给 auto 吸收多余宽度（与 kui-react 一致）
    expect(widths).toEqual(["50px", "150px", "220px", "auto"]);
    // 偏移必须逐段等于上一列的渲染宽度，否则横向滚动时固定列之间会露缝/重叠
    expect((headers[1].element as HTMLTableCellElement).style.left).toBe("50px");
    expect((headers[2].element as HTMLTableCellElement).style.left).toBe("200px");
    wrapper.unmount();
  });

  // 真机回归：普通列声明了宽度却被写成 auto，会在 table-layout: fixed 下被固定列挤成 0 宽，
  // 横向可滚范围一起消失，固定列就"看着没生效"。（与 kui-react 同名用例等价）
  it("keeps declared widths on non-fixed columns so fixed columns keep a scroll range", () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: 1, name: "Alice", age: 28 }],
        columns: [
          { key: "name", title: "Name", fixed: "left", width: 120 },
          { key: "age", title: "Age", width: 150 },
          { key: "key", title: "Id" },
          { key: "action", title: "Operate", fixed: "right", render: () => "Edit" },
        ] as Column[],
        checkable: true,
        scroll: { x: 1_200, y: 200 },
      },
    });

    // 勾选列 50、声明过宽度的列照原值、只有没写宽度的普通列才是 auto
    expect(
      wrapper
        .findAll(".k-table-body col")
        .map((col) => (col.element as HTMLTableColElement).style.width),
    ).toEqual(["50px", "120px", "150px", "auto", "150px"]);

    const headers = wrapper.findAll(".k-table-thead th");
    // 左偏移把勾选列也算进去，右固定列贴着右边缘（与 kui-react 一致）
    expect((headers[1].element as HTMLTableCellElement).style.left).toBe("50px");
    expect((headers[4].element as HTMLTableCellElement).style.right).toBe("0px");
    wrapper.unmount();
  });

  // 真机回归：没写宽度的普通列在 `<col>` 上是 `auto`，窗口一窄就被一路压到表头一个字一行。
  // `<col>` 继续留 `auto`（宽容器里照旧平摊多余空间），但表格的内容最小宽度要按每列的基准之和兜底，
  // 于是窄容器先出横向滚动条。显式 `scroll.x` 仍然以调用方给的为准。（与 kui-react 同名用例等价）
  it("floors the table's minimum width at each column's basis so a narrow container scrolls", () => {
    const columns = [
      { key: "name", title: "Name", width: 120 },
      { key: "age", title: "Age" },
      { key: "action", title: "Operate", fixed: "right" },
    ] as Column[];
    const wrapper = mount(Table, { props: { data: [{ key: 1, name: "Alice", age: 28 }], columns, checkable: true } });
    const table = wrapper.find(".k-table-body table").element as HTMLTableElement;
    // 120 + 150（没写宽度的普通列按下限计入）+ 150（没写宽度的固定列）+ 勾选列 50
    expect(table.style.minWidth).toBe("470px");
    expect(
      wrapper.findAll(".k-table-body col").map((col) => (col.element as HTMLTableColElement).style.width),
    ).toEqual(["50px", "120px", "auto", "150px"]);
    wrapper.unmount();

    const scrolled = mount(Table, {
      props: { data: [{ key: 1, name: "Alice", age: 28 }], columns, checkable: true, scroll: { x: 900 } },
    });
    expect((scrolled.find(".k-table-body table").element as HTMLTableElement).style.minWidth).toBe("900px");
    scrolled.unmount();
  });

  it("makes a grouped parent column's fixed cover its whole leaf range", () => {
    const wrapper = mount(Table, {
      props: {
        data: [
          { key: 1, name: "Alice", age: 28 },
          { key: 2, name: "Bob", age: 32 },
        ],
        columns: [
          {
            key: "group",
            title: "Group",
            fixed: "left",
            children: [
              { key: "name", title: "Name" },
              { key: "age", title: "Age", width: 100 },
            ],
          },
          { key: "key", title: "Id" },
          {
            key: "right",
            title: "Right",
            fixed: "right",
            children: [
              { key: "action", title: "Operate", render: () => "Edit" },
              { key: "more", title: "More", width: 80 },
            ],
          },
        ] as Column[],
        scroll: { y: 200 },
      },
    });
    const headerRows = wrapper.findAll(".k-table-thead tr");
    // 每格同时看方向、偏移和固定类：少一格偏移或父格没被标成固定列都说明继承没生效（与 kui-react 同一份期望）
    const cellsOf = (row: (typeof headerRows)[number]) =>
      row.findAll("th").map((node) => {
        const cell = node.element as HTMLTableCellElement;
        return {
          text: cell.textContent ?? "",
          position: cell.style.position,
          left: cell.style.left,
          right: cell.style.right,
          classes: [...cell.classList].filter((name) => name.startsWith("k-table-cell-fix")),
        };
      });

    expect(headerRows).toHaveLength(2);
    expect(cellsOf(headerRows[0])).toEqual([
      {
        text: "Group",
        position: "sticky",
        left: "0px",
        right: "",
        classes: ["k-table-cell-fix-left", "k-table-cell-fix-left-last"],
      },
      { text: "Id", position: "", left: "", right: "", classes: [] },
      {
        text: "Right",
        position: "sticky",
        left: "",
        right: "0px",
        classes: ["k-table-cell-fix-right", "k-table-cell-fix-right-first"],
      },
    ]);
    expect(cellsOf(headerRows[1])).toEqual([
      {
        text: "Name",
        position: "sticky",
        left: "0px",
        right: "",
        classes: ["k-table-cell-fix-left"],
      },
      {
        text: "Age",
        position: "sticky",
        left: "150px",
        right: "",
        classes: ["k-table-cell-fix-left", "k-table-cell-fix-left-last"],
      },
      {
        text: "Operate",
        position: "sticky",
        left: "",
        right: "80px",
        classes: ["k-table-cell-fix-right", "k-table-cell-fix-right-first"],
      },
      {
        text: "More",
        position: "sticky",
        left: "",
        right: "0px",
        classes: ["k-table-cell-fix-right"],
      },
    ]);

    // 叶子列拿到继承的宽度与方向，所以 colgroup 和表体单元格一起跟着固定
    expect(
      wrapper
        .findAll(".k-table-body col")
        .map((col) => (col.element as HTMLTableColElement).style.width),
    ).toEqual(["150px", "100px", "auto", "150px", "80px"]);
    const bodyCells = wrapper.findAll(".k-table-body tbody tr:first-child td");
    expect(bodyCells.map((cell) => (cell.element as HTMLTableCellElement).style.left)).toEqual([
      "0px",
      "150px",
      "",
      "",
      "",
    ]);
    expect(bodyCells.map((cell) => (cell.element as HTMLTableCellElement).style.right)).toEqual([
      "",
      "",
      "",
      "80px",
      "0px",
    ]);
    wrapper.unmount();
  });

  it("keeps the bordered right edge on cells that only end their own row", () => {
    const wrapper = mount(Table, {
      props: {
        data: [
          { key: 1, name: "Alice", age: 28 },
          { key: 2, name: "Bob", age: 32 },
          { key: 3, name: "Carol", age: 36 },
        ],
        columns: [
          { key: "name", title: "Name", width: 120, fixed: "left" },
          {
            key: "other",
            title: "Other",
            children: [
              {
                key: "address",
                title: "Address",
                children: [
                  { key: "street", title: "Street" },
                  // 合并让第二行的行末格停在中间列上：它仍然是 `:last-child`，但并不是最后一列
                  { key: "block", title: "Block", rowSpan: (_record, row) => (row === 0 ? 2 : 1) },
                ],
              },
            ],
          },
          {
            key: "gender",
            title: "Gender",
            width: 100,
            fixed: "right",
            rowSpan: (_record, row) => (row === 0 ? 2 : 1),
          },
        ] as Column[],
        bordered: true,
      },
    });
    const marked = (cell: Element) => cell.classList.contains("k-table-cell-last-column");
    // bordered 的右边框只由"真的盖到最后一列"的格子让出，外侧那条由滚动容器补。
    // 分组表头每一行的格数不同，行末那一格（Address / Block）必须保留分隔线。（与 kui-react 同一份期望）
    // 这一例没有 scroll.y，表头还在表体那张 table 里
    const headerRows = wrapper.findAll(".k-table-body thead tr");
    expect(headerRows.map((row) => row.findAll("th").map((th) => marked(th.element)))).toEqual([
      [false, false, true],
      [false],
      [false, false],
    ]);
    const bodyRows = wrapper.findAll(".k-table-body tbody tr");
    expect(bodyRows.map((row) => row.findAll("td").map((td) => marked(td.element)))).toEqual([
      [false, false, false, true],
      [false, false],
      [false, false, false, true],
    ]);
    wrapper.unmount();
  });

  it("supports local expansion and synchronizes changed props", async () => {
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
    expect(wrapper.text()).toContain("Child row");

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

  it("ignores scroll events bubbled up from a scroller inside a cell", async () => {
    const data = Array.from({ length: 200 }, (_, index) => ({
      key: `k${index}`,
      name: `Row ${index}`,
    }));
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: {
        data,
        columns: [{ key: "name", title: "Name" }],
        virtual: true,
        scroll: { y: 200 },
        itemHeight: 40,
        overscan: 2,
      },
    });
    const body = wrapper.get<HTMLElement>(".k-table-body");
    Object.defineProperty(body.element, "clientHeight", { value: 200, configurable: true });
    const visibleRows = () =>
      wrapper.findAll("tbody tr:not(.k-table-virtual-spacer)").map((row) => row.text());
    await body.trigger("scroll");
    await wrapper.vm.$nextTick();
    const before = visibleRows();
    expect(before.length).toBeGreaterThan(0);

    const inner = document.createElement("div");
    for (const [property, value] of Object.entries({
      scrollTop: 4000,
      scrollLeft: 4000,
      scrollWidth: 5000,
      clientWidth: 100,
    })) {
      Object.defineProperty(inner, property, { value, configurable: true });
    }
    body.element.appendChild(inner);
    inner.dispatchEvent(new Event("scroll", { bubbles: true }));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await wrapper.vm.$nextTick();

    // 内层滚动条的位置不能改写虚拟窗口
    expect(visibleRows()).toEqual(before);
    wrapper.unmount();
  });

  it("keeps rendering the tail window when the virtual body scrolls past its content", async () => {
    // jsdom 没有布局：挂载前把 clientHeight 固定成 200，表格才能量到视口高度
    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      value: 200,
    });
    try {
      const data = Array.from({ length: 200 }, (_, index) => ({
        key: `k${index}`,
        name: `Row ${index}`,
      }));
      const wrapper = mount(Table, {
        attachTo: document.body,
        props: {
          data,
          columns: [{ key: "name", title: "Name" }],
          virtual: true,
          scroll: { y: 200 },
          itemHeight: 40,
          overscan: 2,
        },
      });
      const body = wrapper.get<HTMLElement>(".k-table-body");
      Object.defineProperty(body.element, "scrollTop", { configurable: true, value: 1_000_000 });
      const visibleRows = () =>
        wrapper.findAll("tbody tr:not(.k-table-virtual-spacer)").map((row) => row.text());

      await body.trigger("scroll");
      await wrapper.vm.$nextTick();

      // 越界滚动只能贴到最后一屏，不能把 tbody 清空
      expect(visibleRows().length).toBeGreaterThan(0);
      expect(visibleRows().join(" ")).toContain("Row 199");
      wrapper.unmount();
    } finally {
      Reflect.deleteProperty(HTMLElement.prototype, "clientHeight");
    }
  });

  it("locks the known limitation that a virtual window drops merged cells whose anchor row scrolled out", async () => {
    // 文档写明虚拟模式不与行合并同时使用，这里锁定实际行为而不是崩溃：
    // 锚点行落在窗口外时，被它覆盖的那一行会少渲染一格（整行左移一列）。
    // kui-react 的 tests/table.test.tsx 有同名用例断言同一份结果，两边行为必须一致。
    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      value: 200,
    });
    try {
      const data = Array.from({ length: 20 }, (_, index) => ({
        key: index,
        name: `Row ${index}`,
      }));
      const wrapper = mount(Table, {
        attachTo: document.body,
        props: {
          data,
          columns: [
            {
              key: "key",
              title: "Group",
              rowSpan: (record: TableRecord, index: number) => (index % 3 === 0 ? 3 : 0),
            },
            { key: "name", title: "Name" },
          ],
          virtual: true,
          scroll: { y: 200 },
          itemHeight: 40,
          overscan: 2,
        },
      });
      const cellCounts = () =>
        wrapper
          .findAll("tbody tr:not(.k-table-virtual-spacer)")
          .map((row) => row.findAll("td").length);
      expect(cellCounts().slice(0, 3)).toEqual([2, 1, 1]);

      const body = wrapper.get<HTMLElement>(".k-table-body");
      Object.defineProperty(body.element, "scrollTop", { configurable: true, value: 400 });
      await body.trigger("scroll");
      await wrapper.vm.$nextTick();

      const counts = cellCounts();
      // 窗口起点是第 8 行，它被第 6 行的锚点覆盖，而锚点已经不在窗口里 → 这一行只剩一格，
      // 名称格顶到了分组列的位置（整行左移一列），窗口里第一个合并格出现在第二行。
      expect(counts[0]).toBe(1);
      expect(counts[1]).toBe(2);
      const windowRows = wrapper.findAll("tbody tr:not(.k-table-virtual-spacer)");
      expect(windowRows[0].element.firstElementChild?.textContent).toBe("Row 8");
      expect(windowRows[0].element.querySelector("[rowspan]")).toBeNull();
      expect(windowRows[1].element.querySelector("[rowspan]")?.getAttribute("rowspan")).toBe("3");
      wrapper.unmount();
    } finally {
      Reflect.deleteProperty(HTMLElement.prototype, "clientHeight");
    }
  });

  it("uses a rowKey function for selection and tree expansion", async () => {
    const data: TableRecord[] = [
      { id: "p1", name: "Parent row", children: [{ id: "c1", name: "Child row" }] },
    ];
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: {
        data,
        columns: [{ key: "name", title: "Name" }],
        checkable: true,
        rowKey: (record: TableRecord) => String(record.id),
      },
    });

    expect(wrapper.text()).not.toContain("Child row");
    await wrapper.get(".k-table-tree-toggle").trigger("click");
    expect(wrapper.emitted("update:expandedKeys")?.at(-1)).toEqual([["p1"]]);
    expect(wrapper.text()).toContain("Child row");

    await wrapper.get("tbody input").trigger("click");
    expect(wrapper.emitted("update:selectedKeys")?.at(-1)).toEqual([["p1"]]);
    wrapper.unmount();
  });

  it("gives rows without a usable rowKey distinct, stable keys", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const data: TableRecord[] = [{ name: "Alice" }, { name: "Bob" }, { name: "Carol" }];
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: { data, columns: [{ key: "name", title: "Name" }], checkable: true },
    });
    const boxes = () =>
      wrapper.findAll("tbody input").map((box) => box.element as HTMLInputElement);

    expect(boxes()).toHaveLength(3);
    await wrapper.findAll("tbody input")[0].trigger("click");
    await wrapper.findAll("tbody input")[2].trigger("click");

    // 兜底 key 必须逐行不同，否则勾选一行等于勾选全部
    expect(boxes().map((box) => box.checked)).toEqual([true, false, true]);
    const keys = wrapper.emitted("update:selectedKeys")?.at(-1)?.[0] as TableKey[];
    expect(keys).toHaveLength(2);
    expect(new Set(keys).size).toBe(2);
    expect(keys.every((key) => /^kui-row-/.test(String(key)))).toBe(true);
    // 缺 rowKey 只提示一次，避免大表格刷屏
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls.flat().join(" ")).toContain("rowKey");

    // 同一批记录对象换个数组引用重新渲染，key 不变，勾选状态不漂移
    await wrapper.setProps({ data: [...data] });
    expect(boxes().map((box) => box.checked)).toEqual([true, false, true]);

    warn.mockRestore();
    wrapper.unmount();
  });

  it("expands parent rows that arrive later without undoing manual collapses", async () => {
    const parent1: TableRecord = {
      key: "p1",
      name: "Parent 1",
      children: [{ key: "p1c", name: "Child 1" }],
    };
    const parent2: TableRecord = {
      key: "p2",
      name: "Parent 2",
      children: [{ key: "p2c", name: "Child 2" }],
    };
    const columns: Column[] = [{ key: "name", title: "Name" }];
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: { data: [parent1], columns, expandAllRows: true },
    });
    const rows = () => wrapper.findAll("tbody tr").map((row) => row.text());

    expect(rows()).toEqual(["Parent 1", "Child 1"]);

    // 用户手动折叠第一行
    await wrapper.get(".k-table-tree-toggle").trigger("click");
    expect(rows()).toEqual(["Parent 1"]);

    // 异步数据到达：新增的父行自动展开，用户折叠过的行保持折叠
    await wrapper.setProps({ data: [parent1, parent2] });
    expect(rows()).toEqual(["Parent 1", "Parent 2", "Child 2"]);

    // 作者定的语义：p1 从数据里消失再回来算"新增父行"，不记住它曾被手动折叠过（与 kui-react 同一份期望）
    await wrapper.setProps({ data: [parent2] });
    expect(rows()).toEqual(["Parent 2", "Child 2"]);
    await wrapper.setProps({ data: [parent2, parent1] });
    expect(rows()).toEqual(["Parent 2", "Child 2", "Parent 1", "Child 1"]);

    wrapper.unmount();
  });

  it("does not re-render rows when a non-virtual body scrolls", async () => {
    const data: TableRecord[] = Array.from({ length: 120 }, (_, index) => ({
      key: `p${index}`,
      name: `Parent ${index}`,
      children: [{ key: `c${index}`, name: `Child ${index}` }],
    }));
    const rowKey = vi.fn((record: TableRecord) => String(record.key));
    const renderCell = vi.fn((value: unknown) => String(value));
    const wrapper = mount(Table, {
      attachTo: document.body,
      props: {
        data,
        columns: [{ key: "name", title: "Name", render: renderCell }],
        rowKey,
        checkable: true,
        scroll: { y: 200 },
      },
    });
    const body = wrapper.get<HTMLElement>(".k-table-body");
    const cellRenders = renderCell.mock.calls.length;
    const keyCalls = rowKey.mock.calls.length;

    Object.defineProperty(body.element, "scrollTop", { configurable: true, value: 4_000 });
    await body.trigger("scroll");
    await wrapper.vm.$nextTick();
    await new Promise((resolve) => requestAnimationFrame(resolve));

    // 非虚拟表格的滚动只该影响 sticky 表头，不该把 240 行重新铺一遍
    expect(renderCell.mock.calls.length).toBe(cellRenders);
    expect(rowKey.mock.calls.length).toBe(keyCalls);
    wrapper.unmount();
  });

  it("does not re-walk the whole tree when controlled expanded keys change", async () => {
    const data: TableRecord[] = Array.from({ length: 120 }, (_, index) => ({
      key: `p${index}`,
      name: `Parent ${index}`,
      children: [{ key: `c${index}`, name: `Child ${index}` }],
    }));
    const rowKey = vi.fn((record: TableRecord) => String(record.key));
    const wrapper = mount(Table, {
      props: { data, columns: [{ key: "name", title: "Name" }] as Column[], rowKey },
    });

    // 可见行本身要按展开状态走一遍树，加上渲染期逐行查 key，这些是必须的；
    // 但受控展开变化不该再额外收集一次全部父行 key —— 只有 expandAllRows 的
    // 增量合并才用得上那份集合（120 个父行：修复后 241 次，多走一遍是 361 次）。
    const afterMount = rowKey.mock.calls.length;
    await wrapper.setProps({ expandedKeys: ["p0"] });
    const delta = rowKey.mock.calls.length - afterMount;
    expect(delta).toBeGreaterThan(0);
    expect(delta).toBeLessThan(300);

    wrapper.unmount();
  });
});
