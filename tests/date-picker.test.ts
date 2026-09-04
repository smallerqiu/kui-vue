import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DatePicker from "../components/date-picker";

describe("DatePicker calendar grid", () => {
  it("does not create a Teleport before the panel is opened", () => {
    const wrapper = mount(DatePicker, { attachTo: document.body });

    expect(wrapper.html()).not.toContain("teleport");
    expect(document.body.querySelector(".k-date-picker-dropdown")).toBeNull();
    wrapper.unmount();
  });

  it("renders a seven-column calendar with six complete weeks", () => {
    const wrapper = mount(DatePicker, { props: { panelOnly: true, modelValue: "2026-08-21" } });

    expect(wrapper.findAll(".k-picker-weekday")).toHaveLength(7);
    expect(wrapper.findAll(".k-picker-date-grid > .k-picker-day")).toHaveLength(42);
    expect(wrapper.find(".v-dp-table").exists()).toBe(false);
  });

  it("renders timestamp zero instead of treating it as empty", () => {
    const wrapper = mount(DatePicker, {
      props: { modelValue: 0, valueType: "timestamp", format: "YYYY-MM-DD" },
    });

    expect(wrapper.find("input").element.value).toBe("1970-01-01");
  });

  it("uses startDate and endDate as range values", () => {
    const wrapper = mount(DatePicker, {
      props: { mode: "dateRange", startDate: "2026-08-01", endDate: "2026-08-05" },
    });

    const inputs = wrapper.findAll("input");
    expect(inputs[0].element.value).toBe("2026-08-01");
    expect(inputs[1].element.value).toBe("2026-08-05");
  });

  it("opens with Enter and closes with Escape", async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body });
    await wrapper.trigger("keydown", { key: "Enter" });
    expect(wrapper.attributes("aria-expanded")).toBe("true");
    await wrapper.trigger("keydown", { key: "Escape" });
    expect(wrapper.attributes("aria-expanded")).toBe("false");
    wrapper.unmount();
  });

  it("emits the configured output type instead of a Dayjs object", async () => {
    const wrapper = mount(DatePicker, { props: { valueType: "string" } });
    await wrapper.find("input").setValue("2026-08-21");

    expect(wrapper.emitted("change")?.some((args) => args[0] === "2026-08-21")).toBe(true);
  });
});
