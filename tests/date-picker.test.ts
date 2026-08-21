import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DatePicker from "../components/date-picker";

describe("DatePicker calendar grid", () => {
  it("renders a seven-column calendar with six complete weeks", () => {
    const wrapper = mount(DatePicker, { props: { panelOnly: true, modelValue: "2026-08-21" } });

    expect(wrapper.findAll(".k-picker-weekday")).toHaveLength(7);
    expect(wrapper.findAll(".k-picker-date-grid > .k-picker-day")).toHaveLength(42);
    expect(wrapper.find(".v-dp-table").exists()).toBe(false);
  });
});
