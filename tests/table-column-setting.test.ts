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
});
