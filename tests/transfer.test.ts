import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { nextTick } from "vue";
import Transfer from "../components/transfer";

const dataSource = [
  { key: 1, title: "Alpha" },
  { key: 2, title: "Beta" },
  { key: 3, title: "Gamma", disabled: true },
];

describe("Transfer", () => {
  it("selects a row and moves it to the target list", async () => {
    const wrapper = mount(Transfer, { props: { dataSource, modelValue: [] } });
    await wrapper.findAll(".k-transfer-item")[0].trigger("click");
    await wrapper.findAll(".k-transfer-operations button")[0].trigger("click");

    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([[1]]);
    expect(wrapper.emitted("change")?.at(-1)).toEqual([[1], "right", [1]]);
  });

  it("supports selecting rows with Enter and Space", async () => {
    const wrapper = mount(Transfer, { props: { dataSource, modelValue: [] } });
    const rows = wrapper.findAll(".k-transfer-item");
    await rows[0].trigger("keydown", { key: "Enter" });
    await rows[1].trigger("keydown", { key: " " });

    expect(wrapper.emitted("selectChange")?.at(-1)).toEqual([[1, 2], []]);
  });

  it("preserves selections outside the current search when selecting all", async () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, modelValue: [], searchable: true },
    });
    await wrapper.findAll(".k-transfer-item")[0].trigger("click");
    await wrapper.findAll(".k-transfer-search input")[0].setValue("Beta");
    await wrapper.findAll(".k-transfer-header input")[0].setValue(true);

    expect(wrapper.emitted("selectChange")?.at(-1)).toEqual([[1, 2], []]);
  });

  it("uses Input for search and applies the selected theme", () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, modelValue: [], searchable: true, theme: "fill" },
    });

    expect(wrapper.classes()).toContain("k-transfer-fill");
    expect(wrapper.findAll(".k-transfer-search")).toHaveLength(2);
    expect(wrapper.findAll(".k-transfer-search > .k-input-fill")).toHaveLength(2);
    expect(wrapper.findAll(".k-transfer-search .k-input-icon")).toHaveLength(2);
  });

  it("provides built-in footer structure and styles", () => {
    const wrapper = mount(Transfer, {
      props: { dataSource, modelValue: [] },
      slots: { footer: ({ direction }: { direction: string }) => direction },
    });

    expect(wrapper.findAll(".k-transfer-footer")).toHaveLength(2);
    expect(wrapper.findAll(".k-transfer-footer").map((item) => item.text())).toEqual([
      "left",
      "right",
    ]);
  });

  it("does not select or move disabled items", async () => {
    const wrapper = mount(Transfer, { props: { dataSource, modelValue: [] } });
    const disabledRow = wrapper.findAll(".k-transfer-item")[2];
    await disabledRow.trigger("click");
    await disabledRow.trigger("keydown", { key: "Enter" });
    await nextTick();

    expect(wrapper.emitted("selectChange")).toBeUndefined();
    expect(
      wrapper.findAll(".k-transfer-operations button")[0].attributes("disabled")
    ).toBeDefined();
  });
});
