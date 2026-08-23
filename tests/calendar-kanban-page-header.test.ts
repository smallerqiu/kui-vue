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
  });

  it("applies fill and outline themes", async () => {
    const wrapper = mount(Kanban, { props: { theme: "fill" } });
    expect(wrapper.classes()).toContain("k-kanban-fill");
    await wrapper.setProps({ theme: "outline" });
    expect(wrapper.classes()).toContain("k-kanban-outline");
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
