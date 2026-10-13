import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import Table from "../components/table";
import type { Column } from "../components/table";
import { resolveCellEllipsis } from "../components/table/utils";

/**
 * 单元格省略号：列上 `ellipsis` 与表格级 `ellipsis` 两档，`rows` 多行截断，悬停提示只在格子
 * **真的被截断**时才弹（判定发生在 hover 那一刻，所以这里要桩 `scrollWidth` / `scrollHeight`）。
 * kui-react 的 `tests/table-ellipsis.test.tsx` 是同一套期望的镜像，改任何一条都要两仓一起改；
 * `components/table/utils.ts` 里的 `resolveCellEllipsis` 是逐字节相同的共享块。
 */
const data = [
  { key: "a", title: "Ship the ellipsis spec", owner: "Ann" },
  { key: "b", title: "Mirror it into kui-react", owner: "Bob" },
];

const columns: Column[] = [
  { title: "Title", key: "title" },
  { title: "Owner", key: "owner" },
];

const cellOf = (wrapper: ReturnType<typeof mount>, row: number, col: number): HTMLElement =>
  wrapper.findAll("tbody tr")[row].findAll("td")[col].element as HTMLElement;

const ellipsisIn = (wrapper: ReturnType<typeof mount>, row: number, col: number) =>
  cellOf(wrapper, row, col).querySelector<HTMLElement>(".k-table-cell-ellipsis");

/** jsdom 里 `scrollWidth` / `clientWidth` 恒为 0，量不出溢出；想让某一格被判定成"截断了"就按维度桩一个差值。 */
const markClipped = (element: HTMLElement, dimension: "width" | "height" = "width") => {
  const scroll = dimension === "width" ? "scrollWidth" : "scrollHeight";
  const client = dimension === "width" ? "clientWidth" : "clientHeight";
  Object.defineProperty(element, scroll, { configurable: true, value: 320 });
  Object.defineProperty(element, client, { configurable: true, value: 100 });
};

/** `mouseenter` 不冒泡，直接派发到格子上那一层 span，再等一次响应式刷新。 */
const hover = async (element: HTMLElement, type: "mouseenter" | "mouseleave") => {
  element.dispatchEvent(new MouseEvent(type));
  await nextTick();
};

const tipText = () => document.querySelector(".k-tooltip-title")?.textContent;
const noTip = () => expect(document.querySelector(".k-tooltip")).toBeNull();

/** 行数写在行内样式上；直接读样式串，不依赖 jsdom 是否认识 `-webkit-line-clamp` 这个属性。 */
const lineClampOf = (element: HTMLElement): string | null =>
  element
    .getAttribute("style")
    ?.match(/line-clamp:\s*([^;]+)/)?.[1]
    ?.trim() ?? null;

describe("Table cell ellipsis", () => {
  it("only truncates the columns that ask for it", () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "key",
        columns: [
          { title: "Title", key: "title", ellipsis: true },
          { title: "Owner", key: "owner" },
        ],
      },
    });

    expect(wrapper.findAll(".k-table-cell-ellipsis")).toHaveLength(2);
    expect(ellipsisIn(wrapper, 0, 0)?.textContent).toBe("Ship the ellipsis spec");
    // 没开省略号的列一格包裹都不加，渲染结果和以前完全一样
    expect(ellipsisIn(wrapper, 0, 1)).toBeNull();
    expect(cellOf(wrapper, 0, 1).textContent).toBe("Ann");
    wrapper.unmount();
  });

  it("lets the table cover every column and opts a single one back out", async () => {
    const wrapper = mount(Table, { props: { data, rowKey: "key", columns, ellipsis: true } });
    expect(wrapper.findAll(".k-table-cell-ellipsis")).toHaveLength(4);

    await wrapper.setProps({
      columns: [
        { title: "Title", key: "title" },
        { title: "Owner", key: "owner", ellipsis: false },
      ],
    });
    expect(wrapper.findAll(".k-table-cell-ellipsis")).toHaveLength(2);
    expect(ellipsisIn(wrapper, 0, 1)).toBeNull();
    // 关掉的那一列内容仍然照常显示，只是不再截断
    expect(cellOf(wrapper, 0, 1).textContent).toBe("Ann");
    wrapper.unmount();
  });

  it("truncates slot and render content as well as plain values", () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "key",
        columns: [
          { title: "Title", key: "title" },
          { title: "Owner", key: "owner", render: (value) => h("i", String(value)) },
        ],
        ellipsis: true,
      },
      slots: { title: (scope: { value: unknown }) => h("b", String(scope.value)) },
    });

    // 插槽 > render > 原始值，三条来源都被同一层 span 包住
    expect(ellipsisIn(wrapper, 0, 0)?.querySelector("b")?.textContent).toBe(
      "Ship the ellipsis spec",
    );
    expect(ellipsisIn(wrapper, 0, 1)?.querySelector("i")?.textContent).toBe("Ann");
    wrapper.unmount();
  });

  it("clamps to several lines with rows", () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "key",
        columns: [
          { title: "Title", key: "title", ellipsis: true },
          { title: "Owner", key: "owner", ellipsis: 2 },
          { title: "Key", key: "key", ellipsis: { rows: 3 } },
        ],
      },
    });

    // 单行只有 `k-table-cell-ellipsis`，靠 `text-overflow` 收成一行，不写行内样式
    const single = ellipsisIn(wrapper, 0, 0) as HTMLElement;
    expect(single.classList.contains("k-table-cell-ellipsis-rows")).toBe(false);
    expect(single.getAttribute("style")).toBeNull();

    // 数字就是行数，`rows` 也一样，最终落到 `-webkit-line-clamp` 上
    expect(
      (ellipsisIn(wrapper, 0, 1) as HTMLElement).classList.contains("k-table-cell-ellipsis-rows"),
    ).toBe(true);
    expect(lineClampOf(ellipsisIn(wrapper, 0, 1) as HTMLElement)).toBe("2");
    expect(lineClampOf(ellipsisIn(wrapper, 0, 2) as HTMLElement)).toBe("3");
    wrapper.unmount();
  });

  it("keeps the tree cell's own class when it truncates", () => {
    const wrapper = mount(Table, {
      props: {
        data: [{ key: "a", title: "Parent", children: [{ key: "a1", title: "Child" }] }],
        rowKey: "key",
        expandAllRows: true,
        ellipsis: true,
        columns: [{ title: "Title", key: "title" }],
      },
    });

    const cell = ellipsisIn(wrapper, 1, 0) as HTMLElement;
    expect(cell.classList.contains("k-table-tree-content")).toBe(true);
    expect(cell.classList.contains("k-table-cell-ellipsis")).toBe(true);
    wrapper.unmount();
  });

  it("shows the tip only for a cell that is really clipped", async () => {
    const wrapper = mount(Table, { props: { data, rowKey: "key", columns, ellipsis: true } });

    const clipped = ellipsisIn(wrapper, 0, 0) as HTMLElement;
    const roomy = ellipsisIn(wrapper, 0, 1) as HTMLElement;
    markClipped(clipped);

    await hover(roomy, "mouseenter");
    noTip();

    await hover(clipped, "mouseenter");
    await vi.waitFor(() => expect(tipText()).toBe("Ship the ellipsis spec"));

    await hover(clipped, "mouseleave");
    await vi.waitFor(noTip);
    wrapper.unmount();
  });

  it("measures height instead of width once rows is above one", async () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "key",
        columns: [{ title: "Title", key: "title", ellipsis: { rows: 2 } }],
      },
    });

    const cell = ellipsisIn(wrapper, 0, 0) as HTMLElement;
    // 只桩宽度：多行模式看的是纵向溢出，所以这里不该弹提示
    markClipped(cell, "width");
    await hover(cell, "mouseenter");
    noTip();

    markClipped(cell, "height");
    await hover(cell, "mouseenter");
    await vi.waitFor(() => expect(tipText()).toBe("Ship the ellipsis spec"));
    wrapper.unmount();
  });

  it("replaces or drops the tip on request", async () => {
    const wrapper = mount(Table, {
      props: {
        data,
        rowKey: "key",
        columns: [
          {
            title: "Title",
            key: "title",
            ellipsis: { tooltip: "Open the ticket for the full text" },
          },
          { key: "owner", title: "Owner", ellipsis: { tooltip: false } },
        ],
      },
    });

    const custom = ellipsisIn(wrapper, 0, 0) as HTMLElement;
    markClipped(custom);
    // 气泡的宿主就是这一格 span 自己：`Tooltip` 只往它身上挂事件与 `aria-expanded`，不多套一层元素
    expect(custom.getAttribute("aria-expanded")).toBe("false");
    await hover(custom, "mouseenter");
    await vi.waitFor(() => expect(tipText()).toBe("Open the ticket for the full text"));

    await hover(custom, "mouseleave");
    await vi.waitFor(noTip);

    const off = ellipsisIn(wrapper, 0, 1) as HTMLElement;
    markClipped(off);
    await hover(off, "mouseenter");
    noTip();
    // `tooltip: false` 连气泡的宿主都不挂，只留一个截断用的 span
    expect(off.hasAttribute("aria-expanded")).toBe(false);
    wrapper.unmount();
  });
});

describe("resolveCellEllipsis", () => {
  it("falls back to the table switch and lets the column win", () => {
    expect(resolveCellEllipsis(undefined, undefined)).toBeNull();
    expect(resolveCellEllipsis(undefined, true)).toEqual({ rows: 1, tooltip: undefined });
    expect(resolveCellEllipsis(false, true)).toBeNull();
    expect(resolveCellEllipsis(true, false)).toEqual({ rows: 1, tooltip: undefined });
  });

  it("accepts a number as the row count and floors it to at least one line", () => {
    expect(resolveCellEllipsis(3, undefined)).toEqual({ rows: 3, tooltip: undefined });
    expect(resolveCellEllipsis({ rows: 2, tooltip: "tip" }, undefined)).toEqual({
      rows: 2,
      tooltip: "tip",
    });
    expect(resolveCellEllipsis(0, undefined)?.rows).toBe(1);
    expect(resolveCellEllipsis(1.8, undefined)?.rows).toBe(1);
    expect(resolveCellEllipsis({ rows: 2.7 }, undefined)?.rows).toBe(2);
  });
});
