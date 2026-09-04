import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Calendar from "../components/calendar";
import Kanban from "../components/kanban";
import PageHeader from "../components/page-header";
import ConfigProvider from "../components/config";
import en from "../components/locale/en";

describe("Calendar", () => {
  it("selects dates and emits event clicks", async () => {
    const event = { key: 1, date: "2026-08-23", title: "Review", color: "#3a95ff" };
    const wrapper = mount(Calendar, { props: { modelValue: "2026-08-23", events: [event] } });
    await wrapper.find('[data-date="2026-08-24"]').trigger("click");
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["2026-08-24"]);
    await wrapper.find(".k-calendar-event").trigger("click");
    expect(wrapper.emitted("eventClick")?.at(-1)?.[0]).toEqual(event);
  });

  it("uses the ConfigProvider locale for labels and week order", () => {
    const wrapper = mount({
      components: { Calendar, ConfigProvider },
      setup: () => ({ en }),
      template: `<ConfigProvider :locale="en"><Calendar model-value="2026-08-23" /></ConfigProvider>`,
    });
    expect(wrapper.find(".k-calendar-toolbar").text()).toContain("Today");
    expect(wrapper.find(".k-calendar-title").text()).toContain("August");
    expect(wrapper.find(".k-calendar-weekdays span").text()).toMatch(/^Sun/i);
  });

  it("follows controlled month changes and supports grid keyboard navigation", async () => {
    const wrapper = mount(Calendar, {
      attachTo: document.body,
      props: { modelValue: "2026-08-23" },
    });
    const selected = wrapper.find<HTMLElement>('[data-date="2026-08-23"]');
    selected.element.focus();
    await selected.trigger("keydown", { key: "ArrowRight" });
    expect((document.activeElement as HTMLElement).dataset.date).toBe("2026-08-24");

    await wrapper.setProps({ modelValue: "2026-09-15" });
    expect(wrapper.find('[data-date="2026-09-15"]').classes()).not.toContain(
      "k-calendar-cell-outside",
    );
    wrapper.unmount();
  });

  it("keeps event clicks separate from date selection with a custom event slot", async () => {
    const event = { key: 1, date: "2026-08-23", title: "Review" };
    const wrapper = mount(Calendar, {
      props: { modelValue: "2026-08-23", events: [event] },
      slots: { event: ({ event: item }) => item.title },
    });
    await wrapper.find(".k-calendar-event-custom").trigger("click");
    expect(wrapper.emitted("eventClick")?.at(-1)?.[0]).toEqual(event);
    expect(wrapper.emitted("change")).toBeUndefined();
  });
});

describe("Kanban", () => {
  it("groups data and emits moves", async () => {
    const data = [{ id: 1, status: "todo", title: "Task" }];
    const wrapper = mount(Kanban, {
      props: {
        columns: [
          { key: "todo", title: "Todo" },
          { key: "done", title: "Done" },
        ],
        data,
      },
      slots: { item: ({ item }) => item.title },
    });
    expect(wrapper.findAll(".k-kanban-column")).toHaveLength(2);
    await wrapper.find(".k-kanban-item").trigger("dragstart");
    await wrapper.findAll(".k-kanban-column")[1].trigger("drop");
    expect(wrapper.emitted("move")?.at(-1)?.[0]).toMatchObject({
      item: data[0],
      from: "todo",
      to: "done",
    });

    await wrapper.find(".k-kanban-item").trigger("keydown", {
      key: "ArrowRight",
      altKey: true,
    });
    expect(wrapper.emitted("move")?.at(-1)?.[0]).toMatchObject({
      item: data[0],
      from: "todo",
      to: "done",
    });
  });

  it("applies fill and outline themes", async () => {
    const wrapper = mount(Kanban, { props: { theme: "fill" } });
    expect(wrapper.classes()).toContain("k-kanban-fill");
    await wrapper.setProps({ theme: "outline" });
    expect(wrapper.classes()).toContain("k-kanban-outline");
  });

  it("uses the global locale for empty columns", () => {
    const wrapper = mount({
      components: { ConfigProvider, Kanban },
      setup: () => ({ en, columns: [{ key: "todo", title: "Todo" }] }),
      template: `<ConfigProvider :locale="en"><Kanban :columns="columns" /></ConfigProvider>`,
    });
    expect(wrapper.find(".k-empty-description").text()).toBe("No Data");
  });

  it("keeps numeric and string column keys distinct", () => {
    const wrapper = mount(Kanban, {
      props: {
        columns: [
          { key: 1, title: "Number" },
          { key: "1", title: "String" },
        ],
        data: [
          { id: 1, status: 1, title: "Numeric task" },
          { id: 2, status: "1", title: "String task" },
        ],
      },
    });
    const columns = wrapper.findAll(".k-kanban-column");
    expect(columns[0].text()).toContain("Numeric task");
    expect(columns[0].text()).not.toContain("String task");
    expect(columns[1].text()).toContain("String task");
  });
});

describe("PageHeader", () => {
  it("renders title, description and actions", () => {
    const wrapper = mount(PageHeader, {
      props: { title: "Projects", description: "Team work" },
      slots: { actions: "Create" },
    });
    expect(wrapper.find(".k-page-header-title").text()).toBe("Projects");
    expect(wrapper.find(".k-page-header-description").text()).toBe("Team work");
    expect(wrapper.find(".k-page-header-actions").text()).toBe("Create");
  });
});
