import { mount } from "@vue/test-utils";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import ConfigProvider from "../components/config";
import en from "../components/locale/en";
import zhCN from "../components/locale/zh-CN";
import Table from "../components/table";
import TableColumnSetting from "../components/table/column-setting";
import type { Column, TableRecord } from "../components/table";

const rows: TableRecord[] = [
  { id: "p1", name: "Parent row", children: [{ id: "c1", name: "Child" }] },
];
const treeColumns: Column[] = [{ key: "name", title: "Name" }];

/** 只改 `k.table` 下的若干条文案，用来证明消费的是 table 自己的 key 而不是别处的默认值 */
const withTableText = (locale: typeof en, texts: Partial<typeof en.k.table>) => ({
  ...locale,
  k: { ...locale.k, table: { ...locale.k.table, ...texts } },
});

const mountTable = (locale: typeof en, props: Record<string, unknown> = {}) =>
  mount(ConfigProvider, {
    props: { locale },
    slots: {
      default: () =>
        h(Table, { data: rows, columns: treeColumns, rowKey: "id", ...props } as never),
    },
  });

describe("Table locale", () => {
  it("localizes the tree toggle and the selection checkboxes", async () => {
    const wrapper = mountTable(zhCN, { checkable: true });
    const labels = () => ({
      toggle: wrapper.get(".k-table-tree-toggle").attributes("aria-label"),
      row: wrapper.get("tbody input").attributes("aria-label"),
      header: wrapper.get("thead input").attributes("aria-label"),
    });

    // 语言包默认就是 zh-CN，表格里不该再留着写死的英文
    expect(labels()).toEqual({ toggle: "展开行", row: "选择该行", header: "全选" });

    await wrapper.setProps({ locale: en });
    expect(labels()).toEqual({ toggle: "Expand row", row: "Select row", header: "Select all" });

    // 展开之后切换按钮要说"收起"
    await wrapper.get(".k-table-tree-toggle").trigger("click");
    expect(wrapper.get(".k-table-tree-toggle").attributes("aria-label")).toBe("Collapse row");
    wrapper.unmount();
  });

  it("names the checkbox input instead of its label wrapper", () => {
    const wrapper = mountTable(zhCN, { checkable: true });
    const input = wrapper.get("tbody input").element as HTMLInputElement;

    // 可访问名必须挂在控件本身，挂在 label 上辅助技术读不到
    expect(input.getAttribute("aria-label")).toBe("选择该行");
    expect((input.closest("label") as HTMLElement).getAttribute("aria-label")).toBeNull();
    wrapper.unmount();
  });

  it("reads the empty-state text from k.table.emptyText", () => {
    const locale = withTableText(zhCN, { emptyText: "表格专属空态" });
    const wrapper = mountTable(locale, { data: [] });

    expect(wrapper.get(".k-empty-description").text()).toBe("表格专属空态");
    wrapper.unmount();

    // 显式 emptyText 仍然优先于语言包
    const explicit = mount(ConfigProvider, {
      props: { locale },
      slots: {
        default: () =>
          h(Table, { data: [], columns: treeColumns, emptyText: "props 优先" } as never),
      },
    });
    expect(explicit.get(".k-empty-description").text()).toBe("props 优先");
    explicit.unmount();
  });

  it("localizes the column setting title and reset button", () => {
    const locale = withTableText(en, { columnSettings: "PICK COLUMNS", resetColumns: "RESET_ALL" });
    const wrapper = mount(ConfigProvider, {
      props: { locale },
      slots: { default: () => h(TableColumnSetting, { columns: treeColumns } as never) },
      global: {
        stubs: {
          Poptip: { template: "<div><slot /><slot name='content' /></div>" },
        },
      },
    });

    // 触发按钮直接显示标题，面板被 stub 成常驻，两处文案都得来自 locale
    expect(wrapper.text()).toContain("PICK COLUMNS");
    expect(wrapper.text()).toContain("RESET_ALL");
    wrapper.unmount();
  });

  it("still honours explicit column setting texts over the locale", () => {
    const wrapper = mount(ConfigProvider, {
      props: { locale: en },
      slots: {
        default: () =>
          h(TableColumnSetting, {
            columns: treeColumns,
            title: "Own title",
            resetText: "Own reset",
          } as never),
      },
      global: {
        stubs: {
          Poptip: { template: "<div><slot /><slot name='content' /></div>" },
        },
      },
    });

    expect(wrapper.text()).toContain("Own title");
    expect(wrapper.text()).toContain("Own reset");
    wrapper.unmount();
  });
});
