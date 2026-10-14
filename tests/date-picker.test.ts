import { mount, type VueWrapper } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DatePicker from "../components/date-picker";

// 面板挂在 body 上，同名节点可能同时存在好几份（关到一半的那个还在），
// 要查就查最后打开的那一份。
const latestPanel = () => {
  const panels = document.body.querySelectorAll<HTMLElement>(".k-datepicker-overlay");
  return panels[panels.length - 1] ?? null;
};

describe("DatePicker calendar grid", () => {
  it("forwards native attributes and merges root classes", () => {
    const wrapper = mount(DatePicker, {
      attrs: { id: "booking-date", class: "custom-picker", "aria-label": "Booking date" },
    });

    expect(wrapper.attributes("id")).toBe("booking-date");
    expect(wrapper.classes()).toContain("custom-picker");
    expect(wrapper.attributes("aria-label")).toBe("Booking date");
  });

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

  it("keeps panelOnly visible when opened changes to false", async () => {
    const wrapper = mount(DatePicker, { props: { panelOnly: true, opened: true } });
    await wrapper.setProps({ opened: false });
    expect(wrapper.find(".k-datepicker-overlay").isVisible()).toBe(true);
  });

  it("shows clear when only the range end has a value", () => {
    const wrapper = mount(DatePicker, {
      props: { mode: "dateRange", endDate: "2026-08-21" },
    });
    expect(wrapper.find(".k-icon-clean").exists()).toBe(true);
  });

  it("rejects disabled manual input", async () => {
    const wrapper = mount(DatePicker, {
      props: {
        disabledDate: (date: Date) => date.getFullYear() === 2027,
      },
    });
    await wrapper.find("input").setValue("2027-01-01");
    expect(wrapper.emitted("change")).toBeUndefined();
  });

  it("supports selecting calendar cells with the keyboard", async () => {
    const wrapper = mount(DatePicker, { props: { panelOnly: true, modelValue: "2026-08-21" } });
    const cell = wrapper.find(".k-picker-day:not(.k-picker-day-disabled)");
    await cell.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change")).toBeTruthy();
  });

  it("clears the opened appearance after selecting a date", async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body });
    await wrapper.find(".k-datepicker-selection").trigger("click");
    await wrapper.vm.$nextTick();
    const cell = document.body.querySelector<HTMLElement>(
      ".k-picker-day:not(.k-picker-day-disabled)",
    )!;
    cell.click();
    await wrapper.vm.$nextTick();
    expect(wrapper.classes()).not.toContain("k-datepicker-opened");
    wrapper.unmount();
  });

  // 关闭有两条路——按 Escape 和点外面，两条得走同一个 closePopup：
  // 历史上 Escape 分支直接 openChange(false)，绕开了半截选区的回滚。
  it.each([
    ["Escape", (wrapper: VueWrapper) => wrapper.trigger("keydown", { key: "Escape" })],
    ["a click outside", () => Promise.resolve(document.body.click())],
  ])(
    "restores the committed range after abandoning a partial range via %s",
    async (_label, close) => {
      const wrapper = mount(DatePicker, {
        attachTo: document.body,
        props: { mode: "dateRange", startDate: "2026-08-01", endDate: "2026-08-05" },
      });
      await wrapper.find(".k-datepicker-selection").trigger("click");
      await wrapper.vm.$nextTick();
      document.body
        .querySelector<HTMLElement>(".k-picker-day:not(.k-picker-day-disabled)")!
        .click();
      await close(wrapper);
      const inputs = wrapper.findAll("input");
      expect(inputs[0].element.value).toBe("2026-08-01");
      expect(inputs[1].element.value).toBe("2026-08-05");

      // 重开面板亮着的应该是已提交的那一头尾，而不是上次没提交的半截。
      await wrapper.find(".k-datepicker-selection").trigger("click");
      await wrapper.vm.$nextTick();
      expect(latestPanel()?.querySelectorAll(".k-picker-day-selected")).toHaveLength(2);
      wrapper.unmount();
    },
  );

  // 手输只填一个框留下的是 `[null, d]`：长度是 2、尾部还有值，
  // 回滚谓词按"长度 1 或缺尾部"判就整个漏掉——于是框里显示着一个日期，
  // `modelValue` 却是空的，也没有 `change`。判据只能是首尾是否都在。
  it.each([
    ["Escape", (wrapper: VueWrapper) => wrapper.trigger("keydown", { key: "Escape" })],
    ["a click outside", () => Promise.resolve(document.body.click())],
  ])("discards a date typed into only the end box when closing with %s", async (_label, close) => {
    const wrapper = mount(DatePicker, { attachTo: document.body, props: { mode: "dateRange" } });
    await wrapper.find(".k-datepicker-selection").trigger("click");
    await wrapper.findAll("input")[1].setValue("2026-08-21");
    expect(wrapper.findAll("input")[1].element.value).toBe("2026-08-21");

    await close(wrapper);

    const inputs = wrapper.findAll("input");
    expect(inputs[0].element.value).toBe("");
    // 半截区间不算选上，文本跟着清掉。
    expect(inputs[1].element.value).toBe("");
    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    wrapper.unmount();
  });

  it("rejects disabled times in time mode", async () => {
    const wrapper = mount(DatePicker, {
      props: { mode: "time", disabledTime: (date: Date) => date.getHours() === 10 },
    });
    await wrapper.find("input").setValue("10:00:00");

    expect(
      wrapper.emitted("change"),
      '`mode="time"` 也是带时间的档，disabledTime 得生效',
    ).toBeUndefined();
    expect(wrapper.find("input").element.value).toBe("");
    wrapper.unmount();
  });
});
