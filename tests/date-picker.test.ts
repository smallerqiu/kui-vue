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

  // 规则 B：只有"用户正在那个框里敲字"才允许挡住外部值写回文本，面板打开不算编辑中。
  // 历史上这道门用的是 isFocus——它只在打开面板时置真、没有任何输入焦点事件维护，
  // 于是面板一开着外部改值就只有高亮动、文本不动。
  it("follows an external value change while the panel is open", async () => {
    const wrapper = mount(DatePicker, {
      attachTo: document.body,
      props: { mode: "dateRange", startDate: "2026-08-01", endDate: "2026-08-05" },
    });
    await wrapper.find(".k-datepicker-selection").trigger("click");
    await wrapper.vm.$nextTick();

    await wrapper.setProps({ startDate: "2026-09-01", endDate: "2026-09-03" });
    const inputs = wrapper.findAll("input");
    expect(inputs[0].element.value).toBe("2026-09-01");
    expect(inputs[1].element.value).toBe("2026-09-03");
    wrapper.unmount();
  });

  // 同一条规则的另一半：正在敲字的那个框不能被外部值盖掉，否则手输到一半就没了。
  it("leaves the box being typed in alone when the value changes elsewhere", async () => {
    const wrapper = mount(DatePicker, {
      attachTo: document.body,
      props: { mode: "dateRange", startDate: "2026-08-01", endDate: "2026-08-05" },
    });
    await wrapper.find(".k-datepicker-selection").trigger("click");
    const start = wrapper.findAll("input")[0];
    await start.trigger("focus");
    await start.setValue("2026-09-");

    await wrapper.setProps({ startDate: "2026-10-01" });
    expect(wrapper.findAll("input")[0].element.value).toBe("2026-09-");
    wrapper.unmount();
  });

  // 规则 C：值没变就不再通知。react 的 commit 同一条口径，见 kui-react/tests/date-picker.test.tsx。
  it("does not re-emit when the already selected date is picked again", async () => {
    const wrapper = mount(DatePicker, { props: { panelOnly: true, modelValue: "2026-08-21" } });
    await wrapper.find(".k-picker-day-selected").trigger("click");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
    wrapper.unmount();
  });

  it("does not re-emit when the same value is typed again", async () => {
    const wrapper = mount(DatePicker, { props: { modelValue: "2026-08-21" } });
    await wrapper.find("input").setValue("2026-08-21");

    expect(wrapper.emitted("update:modelValue")).toBeUndefined();
    expect(wrapper.emitted("change")).toBeUndefined();
    wrapper.unmount();
  });

  // 与 react 同一条口径：时间列也是区间的一条通道，缺另一头时不能把半截区间当结果发出去，
  // 但这个时间要留在输入框里。
  it("keeps a half range out of the change event when the time is picked before the second end", async () => {
    const originalScrollTo = HTMLElement.prototype.scrollTo;
    HTMLElement.prototype.scrollTo = () => {};
    try {
      const wrapper = mount(DatePicker, {
        attachTo: document.body,
        props: { mode: "dateTimeRange", opened: true },
      });
      await wrapper.vm.$nextTick();
      const panel = () => latestPanel()!;
      panel().querySelector<HTMLElement>(".k-picker-day:not(.k-picker-day-disabled)")!.click();
      await wrapper.vm.$nextTick();
      expect(wrapper.emitted("change")).toBeUndefined();

      panel().querySelector<HTMLElement>(".k-picker-footer-time")!.click();
      await wrapper.vm.$nextTick();
      const items = panel().querySelectorAll<HTMLElement>(".k-picker-time-item");
      expect(items.length).toBeGreaterThan(0);
      items[5].click();
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("change")).toBeUndefined();
      const boxes = wrapper.findAll<HTMLInputElement>(".k-datepicker-input");
      expect(boxes[0].element.value).toMatch(/ 05:00:00$/);
      expect(boxes[1].element.value).toBe("");
      wrapper.unmount();
    } finally {
      HTMLElement.prototype.scrollTo = originalScrollTo;
    }
  });

  // 规则 D：opened 是双向的。历史上 emits 里只有 openChange，
  // 而 watch(props.opened) 直接写 isVisible——于是 v-model:opened 静默失效，
  // 外部关掉也绕开了 closePopup 的半截回滚。
  it("announces the opening it drives through the panel", async () => {
    const wrapper = mount(DatePicker, { attachTo: document.body, props: { opened: false } });
    await wrapper.find(".k-datepicker-selection").trigger("click");

    expect(wrapper.emitted("openChange")).toEqual([[true]]);
    expect(wrapper.emitted("update:opened")).toEqual([[true]]);
    // 父级 v-model 把同一个值写回来时不要再通知一遍。
    await wrapper.setProps({ opened: true });
    expect(wrapper.emitted("openChange")).toHaveLength(1);
    expect(wrapper.emitted("update:opened")).toHaveLength(1);
    wrapper.unmount();
  });

  it("rolls back a half range when the parent closes the panel", async () => {
    const wrapper = mount(DatePicker, {
      attachTo: document.body,
      props: { mode: "dateRange", startDate: "2026-08-01", endDate: "2026-08-05", opened: true },
    });
    await wrapper.vm.$nextTick();
    document.body.querySelector<HTMLElement>(".k-picker-day:not(.k-picker-day-disabled)")!.click();
    await wrapper.vm.$nextTick();

    await wrapper.setProps({ opened: false });
    const inputs = wrapper.findAll("input");
    expect(inputs[0].element.value).toBe("2026-08-01");
    expect(inputs[1].element.value).toBe("2026-08-05");
    expect(wrapper.emitted("openChange")?.at(-1)).toEqual([false]);
    expect(wrapper.emitted("update:opened")?.at(-1)).toEqual([false]);
    wrapper.unmount();
  });

  // 年 / 月面板：格子只在 mode 就是"选这一年 / 这一月"时才认 disabledDate，
  // 判据是"整格里一天都挑不出来"；浏览态不拦——拦死了连"翻过去看看"都做不到。
  it("refuses a fully disabled year and lands on an open day inside a partly disabled one", async () => {
    const wrapper = mount(DatePicker, {
      props: {
        panelOnly: true,
        mode: "year",
        modelValue: "2026-01-01",
        format: "YYYY-MM-DD",
        disabledDate: (date: Date) =>
          date.getFullYear() === 2027 ||
          (date.getFullYear() === 2028 && date.getMonth() === 0 && date.getDate() === 1),
      },
    });
    const cellOf = (year: number) =>
      wrapper.findAll(".k-picker-year-item").find((cell) => cell.text() === String(year))!;
    const blocked = cellOf(2027);

    expect(blocked.classes()).toContain("k-picker-year-disabled");
    expect(blocked.attributes("aria-disabled")).toBe("true");
    expect(blocked.attributes("tabindex")).toBe("-1");
    await blocked.trigger("click");
    await blocked.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("change"), "整年被禁时点击和键盘都不该落值").toBeUndefined();

    // 格子能点就得真落值：浏览位置那天恰好被禁时，落到这一格里往后第一个能选的日子，
    // 而不是"看着能点、点了没反应"。
    await cellOf(2028).trigger("click");
    expect(wrapper.emitted("change")?.at(-1)?.[1]).toBe("2028-01-02");

    expect(cellOf(2029).attributes("role")).toBe("gridcell");
    expect(cellOf(2029).attributes("tabindex")).toBe("0");
    await cellOf(2029).trigger("keydown", { key: " " });
    expect(wrapper.emitted("change")?.at(-1)?.[1]).toBe("2029-01-01");
    wrapper.unmount();
  });

  it("refuses a fully disabled month and lands on an open day inside a partly disabled one", async () => {
    const wrapper = mount(DatePicker, {
      props: {
        panelOnly: true,
        mode: "month",
        modelValue: "2026-05-10",
        format: "YYYY-MM-DD",
        disabledDate: (date: Date) =>
          (date.getFullYear() === 2026 && date.getMonth() === 1) ||
          (date.getFullYear() === 2026 && date.getMonth() === 2 && date.getDate() === 10),
      },
    });
    // 月格子按 localeData 的顺序排，12 格恒定，下标 1 就是二月（标签文案跟语言走，不断言）。
    const cells = () => wrapper.findAll(".k-picker-month-item");
    const blocked = cells()[1];

    expect(blocked.classes()).toContain("k-picker-month-disabled");
    expect(blocked.attributes("aria-disabled")).toBe("true");
    expect(blocked.attributes("tabindex")).toBe("-1");
    await blocked.trigger("click");
    await blocked.trigger("keydown", { key: " " });
    expect(wrapper.emitted("change"), "整月被禁时点击和键盘都不该落值").toBeUndefined();

    // 没被禁的那一格保留浏览位置（10 号），别自作主张改成 1 号。
    await cells()[3].trigger("click");
    expect(wrapper.emitted("change")?.at(-1)?.[1]).toBe("2026-04-10");
    await cells()[2].trigger("click");
    expect(wrapper.emitted("change")?.at(-1)?.[1]).toBe("2026-03-01");
    wrapper.unmount();
  });

  it("keeps Feb 29 inside February when the year panel jumps a whole year", async () => {
    const wrapper = mount(DatePicker, {
      props: { panelOnly: true, mode: "year", modelValue: "2024-02-29", format: "YYYY-MM-DD" },
    });
    // 2027 年没有 2 月 29 日：落在 2 月 28 日，而不是溢出成 3 月 1 日。
    await wrapper
      .findAll(".k-picker-year-item")
      .find((cell) => cell.text() === "2027")!
      .trigger("click");
    expect(wrapper.emitted("change")?.at(-1)?.[1]).toBe("2027-02-28");
    wrapper.unmount();
  });

  it("opens the year and month panels from the keyboard", async () => {
    const wrapper = mount(DatePicker, {
      props: { panelOnly: true, modelValue: "2026-08-21" },
    });
    const yearLabel = () =>
      wrapper.findAll(".k-picker-header-label span").find((label) => /^\d{4}/.test(label.text()))!;
    const monthLabel = () => wrapper.find(".k-picker-header-month-btn");

    expect(yearLabel().attributes("tabindex")).toBe("0");
    await yearLabel().trigger("keydown", { key: "Enter" });
    expect(wrapper.find(".k-picker-year-body").exists()).toBe(true);
    await monthLabel().trigger("keydown", { key: " " });
    expect(wrapper.find(".k-picker-month-body").exists()).toBe(true);
    wrapper.unmount();
  });

  it("keeps the year and month highlight on the value, not the browsing position", async () => {
    const wrapper = mount(DatePicker, {
      props: {
        panelOnly: true,
        mode: "month",
        modelValue: "2026-08-15",
        format: "YYYY-MM-DD",
      },
    });
    const monthCells = () => wrapper.findAll(".k-picker-month-item");
    const yearCells = () => wrapper.findAll(".k-picker-year-item");
    const yearLabel = () =>
      wrapper.findAll(".k-picker-header-label span").find((label) => /^\d{4}/.test(label.text()))!;

    expect(monthCells()[7].classes()).toContain("k-picker-month-selected");
    expect(monthCells()[7].attributes("aria-selected")).toBe("true");

    // 翻到 7 月：浏览位置变了，选中态得留在值所在的那个 8 月。
    await wrapper.findAll(".k-picker-header button")[1].trigger("click");
    expect(monthCells()[6].classes(), "翻月不该把选中态带到浏览位置上").not.toContain(
      "k-picker-month-selected",
    );
    expect(monthCells()[7].classes()).toContain("k-picker-month-selected");

    // 月面板里点年份只是翻浏览位置，翻到 2027 再回年面板，选中格还得是 2026。
    await yearLabel().trigger("click");
    await yearCells()
      .find((cell) => cell.text() === "2027")!
      .trigger("click");
    await new Promise((resolve) => setTimeout(resolve, 0));
    await yearLabel().trigger("click");
    expect(
      yearCells()
        .filter((cell) => cell.classes().includes("k-picker-year-selected"))
        .map((cell) => cell.text()),
    ).toEqual(["2026"]);
    wrapper.unmount();
  });

  // panelOnly 一进来就是可见的，`updatePanelState` 那句 `if (isVisible.value) return`
  // 把"档位跟着 mode 起"也一起挡掉了——于是 mode="year" 的常驻面板渲染的是日期格。
  it("shows the year and month panels for a panel-only picker in that mode", async () => {
    const year = mount(DatePicker, { props: { panelOnly: true, mode: "year" } });
    expect(year.findAll(".k-picker-year-item")).toHaveLength(12);
    expect(year.find(".k-picker-date-grid").exists()).toBe(false);
    year.unmount();

    const month = mount(DatePicker, { props: { panelOnly: true, mode: "month" } });
    expect(month.findAll(".k-picker-month-item")).toHaveLength(12);
    month.unmount();
  });
});
