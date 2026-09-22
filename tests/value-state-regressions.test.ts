import { mount } from "@vue/test-utils";
import { expect, it } from "vitest";
import { defineComponent, h, nextTick, ref } from "vue";
import { Slider, Select, DatePicker } from "../components";

it("keeps the current Slider value when constraints change and clamps it when needed", async () => {
  const wrapper = mount(Slider, { props: { value: 20 } });
  try {
    await wrapper.get('[role="slider"]').trigger("keydown", { key: "ArrowRight" });
    await wrapper.setProps({ max: 200 });
    expect(wrapper.get('[role="slider"]').attributes("aria-valuenow")).toBe("21");
    await wrapper.setProps({ max: 10 });
    expect(wrapper.get('[role="slider"]').attributes("aria-valuenow")).toBe("10");
    await wrapper.setProps({ modelValue: 5 });
    expect(wrapper.get('[role="slider"]').attributes("aria-valuenow")).toBe("5");
  } finally {
    wrapper.unmount();
  }
});

it("tracks in-place push, splice, and index replacement in a Select model array", async () => {
  const selected = ref(["a"]);
  const Host = defineComponent(
    () => () =>
      h(Select, {
        multiple: true,
        modelValue: selected.value,
        options: [
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
        ],
      }),
  );
  const wrapper = mount(Host);
  try {
    selected.value.push("b");
    await nextTick();
    expect(wrapper.text()).toContain("Beta");
    selected.value.splice(0, 1);
    await nextTick();
    expect(wrapper.text()).not.toContain("Alpha");
    selected.value[0] = "a";
    await nextTick();
    expect(wrapper.text()).toContain("Alpha");
    expect(wrapper.text()).not.toContain("Beta");
  } finally {
    wrapper.unmount();
  }
});

it("restores the last committed DatePicker range, and never resurrects a cleared range", async () => {
  const wrapper = mount(DatePicker, {
    props: { value: ["2026-08-01", "2026-08-05"], mode: "dateRange" },
    attachTo: document.body,
  });
  const values = () => wrapper.findAll("input").map((input) => input.element.value);
  const cancelPartial = async () => {
    await wrapper.find(".k-datepicker-selection").trigger("click");
    document.body.querySelector<HTMLElement>(".k-picker-day:not(.k-picker-day-disabled)")!.click();
    await nextTick();
    document.body.click();
    await nextTick();
  };
  try {
    await wrapper.findAll("input")[1].setValue("2026-08-15");
    await wrapper.findAll("input")[0].setValue("2026-08-10");
    expect(values()).toEqual(["2026-08-10", "2026-08-15"]);
    await cancelPartial();
    expect(values()).toEqual(["2026-08-10", "2026-08-15"]);
    await wrapper.find(".k-icon-clean").trigger("click");
    await cancelPartial();
    expect(values()).toEqual(["", ""]);
    await wrapper.setProps({ modelValue: ["2026-08-20", "2026-08-25"] });
    await cancelPartial();
    expect(values()).toEqual(["2026-08-20", "2026-08-25"]);
  } finally {
    wrapper.unmount();
  }
});
