import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { CheckboxGroup } from "../components/checkbox";
import TableColumnSetting from "../components/table/column-setting";

describe("TableColumnSetting", () => {
  it("emits hidden keys while excluding protected columns", async () => {
    const wrapper = mount(TableColumnSetting, {
      props: {
        columns: [
          { title: "Name", key: "name" },
          { title: "Role", key: "role" },
          { title: "Status", key: "status" },
        ],
        disabledKeys: ["name"],
      },
      global: {
        stubs: {
          Poptip: { template: "<div><slot /><slot name='content' /></div>" },
        },
      },
    });

    wrapper.findComponent(CheckboxGroup).vm.$emit("change", ["status"]);

    expect(wrapper.emitted("update:hiddenKeys")?.[0]).toEqual([["role"]]);
    expect(wrapper.findComponent(CheckboxGroup).props("options")).toEqual([
      { label: "Role", value: "role" },
      { label: "Status", value: "status" },
    ]);
  });

  it("lists leaf columns nested under a grouped header", () => {
    const wrapper = mount(TableColumnSetting, {
      props: {
        columns: [
          { title: "Name", key: "name" },
          {
            title: "Profile",
            key: "profile",
            children: [
              { title: "Age", key: "age" },
              { title: "City", key: "city" },
            ],
          },
        ],
        disabledKeys: ["name"],
        hiddenKeys: ["city"],
      },
      global: {
        stubs: {
          Poptip: { template: "<div><slot /><slot name='content' /></div>" },
        },
      },
    });

    // 分组表头本身不可勾选，但它下面的叶子列必须出现在面板里（与 kui-react 一致）
    expect(wrapper.findComponent(CheckboxGroup).props("options")).toEqual([
      { label: "Age", value: "age" },
      { label: "City", value: "city" },
    ]);
    expect(wrapper.findComponent(CheckboxGroup).props("modelValue")).toEqual(["age"]);

    wrapper.findComponent(CheckboxGroup).vm.$emit("change", ["age"]);
    expect(wrapper.emitted("update:hiddenKeys")?.[0]).toEqual([["city"]]);
  });
});
